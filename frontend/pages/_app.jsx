// pages/_app.js or pages/_app.tsx

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useRouter } from "next/router";
import Link from "next/link";
import { oktoWallet } from "@rainbow-me/rainbowkit/wallets";
import { InjectedConnector } from "@wagmi/core";
import axios from "axios";
// axios.defaults.baseURL = process.env.REACT_PUBLIC_API_URL;

// axios.interceptors.request.use(
//   (config) => {
//     if (!config.headers.Authorization) {
//       const token = JSON.parse(localStorage.getItem("keyCloak")).token;

//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = "e3eb5d75a03055b0cfdd7db3de26d98f";

const { wallets } = getDefaultWallets({
  appName: "CipherInbox",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "CipherInbox",
};
const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
  {
    groupName: "Or create a new wallet with Okto",
    wallets: [
      oktoWallet({
        chains,
        projectId,
        walletConnectOptions: {
          projectId,
          metadata: {
            name: "CipherInbox", //mandatory
            description: "Cipher Inbox",
            url: "http://localhost:3000",
            icons: ["DAPP_ICON"],
          },
        },
        walletConnectVersion: "2",
      }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        locale={locale}
        theme={darkTheme({
          accentColor: "#7b3fe4",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
