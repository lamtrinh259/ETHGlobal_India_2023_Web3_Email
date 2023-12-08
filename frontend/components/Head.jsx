import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";

import { useConnect } from "wagmi";

export default function Head() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <header className="sticky top-0 w-full font-primary bg-opacity-30 transition duration-300 ease-in-out bg-black z-10 backdrop-filter backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
            CipherInbox
          </h1>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              Features
            </a>
            <ConnectButton />
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
