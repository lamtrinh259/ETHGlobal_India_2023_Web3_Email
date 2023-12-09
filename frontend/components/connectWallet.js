"use client";
import { useEffect, useState } from "react";

export default function ConnectWallet() {
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [currentAccount]);

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  return (
    <section>
      {!currentAccount && (
        <button
          onClick={connectWallet}
          className="bg-lime-600 hover:bg-lime-500 px-8 py-2 text-slate-100 rounded-3xl uppercase"
        >
          Connect Wallet
        </button>
      )}
      {currentAccount && (
        <p className="text-lime-700 text-lg">
          {currentAccount.slice(0, 6)}...{currentAccount.slice(36)}
        </p>
      )}
    </section>
  );
}
