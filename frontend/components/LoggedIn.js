import { useEffect, useRef, useState } from "react";
import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";
import Chat from "./chat";

const PEER_ADDRESS = "0xe0CD38806355Dd7Fe7dF6A88986E1600005515BD";

export default function LoggedIn() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [messages, setMessages] = useState(null);
  const convRef = useRef(null);
  const clientRef = useRef(null);
  const [signer, setSigner] = useState(null);
  const [isOnNetwork, setIsOnNetwork] = useState(false);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (isOnNetwork && convRef.current) {
      const streamMessages = async () => {
        const newStream = await convRef.current.streamMessages();
        for await (const msg of newStream) {
          const exists = messages.find((m) => m.id === msg.id);
          if (!exists) {
            setMessages((prevMessages) => {
              const msgsnew = [...prevMessages, msg];
              return msgsnew;
            });
          }
        }
      };
      streamMessages();
    }
  }, [messages, isOnNetwork]);

  const checkIfWalletIsConnected = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      setSigner(provider.getSigner());
    } else {
      console.log("No authorized account found");
    }
  };

  const newConversation = async function (xmtp_client, addressTo) {
    // if (await xmtp_client?.canMessage(PEER_ADDRESS)) {
    const conversation = await xmtp_client.conversations.newConversation(
      addressTo
    );
    convRef.current = conversation;
    const messages = await conversation.messages();
    setMessages(messages);
    // } else {
    console.log("Can't message because is not on the network.");
    // }
  };

  const initXmtp = async function () {
    const xmtp = await Client.create(signer, { env: "production" });
    newConversation(xmtp, PEER_ADDRESS);
    setIsOnNetwork(!!xmtp.address);
    clientRef.current = xmtp;
  };

  return (
    <section className="w-full h-screen flex justify-center">
      {!currentAccount && (
        <section className="mt-4">
          <p>Not Logged In</p>
        </section>
      )}
      {currentAccount && (
        <section className="w-full h-full flex justify-center">
          {currentAccount && !isOnNetwork && (
            <section className="mt-6">
              <button
                onClick={initXmtp}
                className="bg-white 0 px-8 py-2 text-black rounded-xl uppercase"
              >
                Connect to chat
              </button>
            </section>
          )}
          {currentAccount && isOnNetwork && messages && (
            <Chat
              client={clientRef.current}
              conversation={convRef.current}
              messageHistory={messages}
            />
          )}
        </section>
      )}
    </section>
  );
}
