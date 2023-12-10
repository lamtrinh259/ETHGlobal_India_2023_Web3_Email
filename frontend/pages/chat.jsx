import { useEffect, useRef, useState } from "react";

import Footer from "../components/Footer";
import Head from "../components/Head";

import SidebarDrawer from "../components/SidebarDrawer";
import Popup from "reactjs-popup";

import { Client } from "@xmtp/xmtp-js";
import { ethers } from "ethers";
import Chat from "./chat";

const PEER_ADDRESS = "0xe0CD38806355Dd7Fe7dF6A88986E1600005515BD";

export default function Chatv() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
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
  const [inputValue, setInputValue] = useState("");

  const handleSend = async () => {
    if (inputValue) {
      await onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const onSendMessage = async (value) => {
    return convRef.current.send(value);
  };
  const handleInputChange = (event) => {
    if (event.key === "Enter") {
      handleSend();
    } else {
      setInputValue(event.target.value);
    }
  };
  const MessageList = ({ messages }) => {
    messages = messages.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
  };
  return (
    <>
      <Head isApp={true} />
      <div className="">
        <SidebarDrawer />

        <div className="h-screen overflow-hidden w-full absolute top-12 left-14  shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar container  ">
          {/* This is an example component */}

          {/* headaer */}

          {/* end header */}
          {/* Chatting */}

          <div className="w-1/2 mt-5 border-r border-gray-300 ">
            <div className="h-16  flex items-center">
              <a
                // onClick={() => setOpen((o) => !o)}
                className="cursor-pointer w-48 mx-auto bg-white   flex flex-row items-start justify-center text-black  transition duration-150    "
              >
                {currentAccount && !isOnNetwork && (
                  <section className="">
                    <button
                      onClick={initXmtp}
                      className="bg-white 0  text-black rounded-xl uppercase"
                    >
                      Connect to chat
                    </button>
                  </section>
                )}
              </a>
            </div>
            <div className="px-2  pb-8 ml-4 h-screen">
              <ul className="space-y-2 ">
                <li>
                  <a className="bg-gray-500 bg-opacity-30 text-white flex items-center justify-between  px-4 rounded cursor-pointer ">
                    <div className="flex flex-row py-4 px-2 justify-center items-center  ">
                      <div className="">
                        <img
                          src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                          className="object-cover h-12 w-12 rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <div className="text-lg font-semibold">Hemang</div>
                        <span className="text-gray-500">
                          Pick me at 9:00 Am
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className=" px-2 w-full"
            x-data="{ checkAll: false, filterMessages: false }"
          >
            <div className="mt-8 flex items-center justify-between">
              <div className="px-2 flex items-center space-x-4">
                {/* <span className="text-sm text-gray-500">1-15 of 1,323</span> */}
              </div>
            </div>
            <div className="text-white    bg-black">
              {/* <span className="text-2xl ">Inbox</span> */}
              <div className="flex flex-row justify-between bg-gray-500 bg-opacity-30   backdrop-filter backdrop-blur-lg min-h-[90vh]">
                {/* chat list */}

                {/* end chat list */}
                {/* message */}
                <div className="w-full  flex flex-col justify-between">
                  {currentAccount && isOnNetwork && messages && (
                    <div className="flex flex-col mt-5">
                      {messages.map((message, index) => (
                        <li
                          key={message.id}
                          className="  my-1 py-2 pl-2 odd:bg-gray-700 odd:text-slate-100 rounded-lg"
                          title="Click to log this message to the console"
                        >
                          <strong>
                            {message.senderAddress === clientRef.current.address
                              ? "You"
                              : "Bot"}
                            :{" "}
                          </strong>
                          <span>{message.content}</span>
                          <span className="absolute right-2 bg-gray-400 text-black rounded-full px-2">
                            {" "}
                            {message.sent.toLocaleTimeString()}
                          </span>
                        </li>
                      ))}
                    </div>
                  )}
                  <div className="py-5">
                    <input
                      className="w-full bg-white py-5 px-3 rounded-xl text-gray-500"
                      type="text"
                      value={inputValue}
                      onKeyUp={handleInputChange}
                      onChange={handleInputChange}
                      placeholder="type your message here..."
                    />
                    <button
                      onClick={handleSend}
                      className="w-1/6 h-10 bg-gray-600 text-slate-100 cursor-pointer"
                    >
                      SEND
                    </button>
                  </div>
                </div>
                {/* end message */}
              </div>
            </div>
          </div>
          <Popup open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="p-6 w-[35%] flex items-center justify-center bottom-0 right-0 fixed mb-0 pt-0">
              <div className="container max-w-screen-lg mx-auto">
                <div className="bg-gray-100 flex justify-between flex-row w-[100%] top-0 p-2 px-4 font-bold">
                  <div>New Message </div>
                  <div
                    className="cursor-pointer text-red-500 font-normal"
                    onClick={closeModal}
                  >
                    X
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded shadow-lg   p-4  mb-6">
                    <div className=" text-sm grid-cols-1 lg:grid-cols-3">
                      <div className="lg:col-span-2">
                        <div className=" text-sm grid-cols-1 md:grid-cols-5">
                          <div className="md:col-span-5">
                            <label htmlFor="full_name">To</label>
                            <input
                              type="text"
                              name="full_name"
                              id="full_name"
                              className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                              defaultValue=""
                              placeholder="email@domain.com"
                            />
                          </div>
                          <div className="md:col-span-5">
                            <label htmlFor="email">Subject</label>
                            <input
                              type="text"
                              name="email"
                              id="email"
                              className="h-10 border mt-1 rounded px-2 w-full bg-gray-50"
                              defaultValue=""
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label htmlFor="country">Message</label>

                            <div
                              contentEditable
                              type="text"
                              name="zipcode"
                              id="zipcode"
                              className="transition-all  flex items-start justify-start flex-col border  rounded px-2 w-full bg-gray-50 h-52"
                              placeholder=""
                              defaultValue=""
                            />
                          </div>

                          <div className="md:col-span-5 text-start">
                            <div className="inline-flex items-start">
                              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
