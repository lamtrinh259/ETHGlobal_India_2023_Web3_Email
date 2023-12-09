import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { useConnect } from "wagmi";

export default function Head({ isApp }) {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  function fun(openConnectModal) {
    openConnectModal();
    setTimeout(() => {
      document.getElementsByClassName(
        "iekbcc0 ju367v4y ju367v37 ju367v3s ju367v4d ju367va ju367v15"
      )[0].innerHTML =
        '<div style="height:100vh;color:white;display:flex;flex-direction: column;font-size:30px;align-items: center;text-align: center;justify-content: center;">Don`t have a web3 wallet?<br> claim cipher domain now <a style="color:white;text-decoration:underline" href="/create-cipher"> click here</a></div>';
    }, 150);
  }
  return (
    <header className="sticky top-0 w-full font-primary bg-opacity-30 transition duration-300 ease-in-out bg-black z-10 backdrop-filter backdrop-blur-lg">
      <nav className={"container  mx-auto px-6  " + (isApp ? " ml-20" : "")}>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl  text-white flex flex-row items-center  cursor-pointer"
          >
            <img src="./logo2.png" className="h-20 w-20"></img>CipherInbox
          </Link>
          <div className="hidden md:flex items-center justify-between w-[22vw] ">
            <Link
              href="/#"
              className="text-gray-400 hover:text-gray-200 text-lg"
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-gray-400 hover:text-gray-200  text-lg"
            >
              Features
            </Link>
            {/* <ConnectButton /> */}

            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <button
                            onClick={() => fun(openConnectModal)}
                            type="button"
                            className="bg-white p-2 rounded-lg"
                          >
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <button
                            onClick={openChainModal}
                            type="button"
                            className="bg-white p-2 rounded-lg"
                          >
                            Wrong network
                          </button>
                        );
                      }

                      return (
                        <div
                          className="bg-white p-2  rounded-lg"
                          style={{
                            display: "flex",
                            gap: 12,
                          }}
                        >
                          <button
                            onClick={openChainModal}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              background: "white",
                            }}
                            type="button"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: "hidden",
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? "Chain icon"}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                          </button>

                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            {/* <WalletButton wallet="metamask" />
            <WalletButton wallet="walletconnect" /> */}
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              {" "}
              {/* Add a hamburger menu icon here */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
