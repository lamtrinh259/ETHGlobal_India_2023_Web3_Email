import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { useAccount, useConnect } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Head({ isApp }) {
  const [wallet, setWallet] = useState({});
  const [add, setAdd] = useState({});
  const [userToken, setUserToken] = useState({});
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      // console.log("Connected", { address, connector, isReconnected });
      sessionStorage.setItem("address", address);
      sessionStorage.setItem("type", "rb");
      router.push("/create-cipher");
    },
  });
  useEffect(() => {
    let address = sessionStorage.getItem("address");
    if (address) {
      setAdd(address);
    }
  }, []);
  async function authenticate(api_key, idToken, pin) {
    let { data } = await axios.post(
      `https://3p-bff.oktostage.com/api/v1/authenticate`,
      {
        id_token: idToken,
      },
      {
        headers: {
          "x-api-key": api_key,
        },
      }
    );

    // user signup flow
    const { auth_token, refresh_auth_token, device_token } = data.data;
    setUserToken(data.data);
    return { auth_token, refresh_auth_token, device_token };
  }
  // 3. Call `/api/v1/wallet` endpoint to create wallet
  async function create_wallet(api_key, auth) {
    const { data } = await axios.post(
      `https://3p-bff.oktostage.com/api/v1/wallet`,
      {},
      {
        headers: {
          "x-api-key": api_key,
          authorization: `Bearer ${auth}`,
        },
      }
    );
    const { wallets } = data.data;
    if (wallets?.success) alert("Wallet created successfully !!!");
    setWallet(wallets);
    return wallets;
  }
  async function createOktoWallet() {
    let res = await authenticate(
      "474abe92-fdc1-489c-be47-764d850c4253",
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMxMzg2NzQ1ODYxNzI3MzQ0MjMiLCJlbWFpbCI6ImhlbWFuZ3ZvcmEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidDJWX1ZVdWZ3UzZvM1RwYUk2dFNMdyIsImlhdCI6MTcwMjE2MDQ5NiwiZXhwIjoxNzAyMTY0MDk2fQ.RMwhCVlFCu7D3MEmgyRuFn6IJT7P-6WH8P3_RD3japVVAWLqtc_FsZn9euUj9XkZn0vJVG9R-l9_tGQsLqmOrhIvviw7xmzscUs3VGgtfoboQn6VVep6LatsfCRw45TkNzP31zS0HN2dcMzI97dcMFJogZyc_iQXCOVx47wyk7tSg57HWhKSdaEGexPm0lxP0m61xYPzqDE78MPycRYwBwktT2Um335DRWW9ud-ag2PVOJ_-Vlmnz43SgGSqRgek50EVyp1MyggXzAGsIsWIsiv8_ELGqTDgSRo1RhUVbri7uyYIhnebk0piv0uBvymHCqhDq1f2USEH5Fys-Ry-dQ",
      "123456"
    );
    console.log(res);
    let walletres = await create_wallet(
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMxMzg2NzQ1ODYxNzI3MzQ0MjMiLCJlbWFpbCI6ImhlbWFuZ3ZvcmEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidDJWX1ZVdWZ3UzZvM1RwYUk2dFNMdyIsImlhdCI6MTcwMjE2MDQ5NiwiZXhwIjoxNzAyMTY0MDk2fQ.RMwhCVlFCu7D3MEmgyRuFn6IJT7P-6WH8P3_RD3japVVAWLqtc_FsZn9euUj9XkZn0vJVG9R-l9_tGQsLqmOrhIvviw7xmzscUs3VGgtfoboQn6VVep6LatsfCRw45TkNzP31zS0HN2dcMzI97dcMFJogZyc_iQXCOVx47wyk7tSg57HWhKSdaEGexPm0lxP0m61xYPzqDE78MPycRYwBwktT2Um335DRWW9ud-ag2PVOJ_-Vlmnz43SgGSqRgek50EVyp1MyggXzAGsIsWIsiv8_ELGqTDgSRo1RhUVbri7uyYIhnebk0piv0uBvymHCqhDq1f2USEH5Fys-Ry-dQ",
      res.auth_token
    );
    console.log(walletres);
    if (isHomePage) {
      sessionStorage.setItem("address", walletres[0].address);
      sessionStorage.setItem("auth_token", res.auth_token);
      sessionStorage.setItem("api", "474abe92-fdc1-489c-be47-764d850c4253");
      sessionStorage.setItem("type", "okto");
      router.push({
        pathname: "/create-cipher",
      });
    }
    setWallet(walletres[0]);
  }
  async function logout() {
    const { data } = await axios.post(
      `https://3p-bff.oktostage.com/api/v1/logout`,
      {},
      {
        headers: {
          "x-api-key": "474abe92-fdc1-489c-be47-764d850c4253",
          authorization: `Bearer ${userToken.auth_token}`,
        },
      }
    );
    setWallet("");
    console.log("logout", data);
    return data;
  }

  function fun(openConnectModal) {
    openConnectModal();

    // setTimeout(() => {
    //   document.getElementsByClassName(
    //     "iekbcc0 ju367v4y ju367v37 ju367v3s ju367v4d ju367va ju367v15"
    //   )[0].innerHTML =
    //     '<div style="height:100vh;color:white;display:flex;flex-direction: column;font-size:30px;align-items: center;text-align: center;justify-content: center;">Don`t have a web3 wallet?<br> create a okto wallet now  <a style="color:white;text-decoration:underline" href="/create-cipher"> click here</a></div>';
    // }, 150);
    // setTimeout(() => {
    //   document.getElementsByClassName(
    //     "iekbcc0 ju367v4 ju367va ju367v14 ju367v1s"
    //   )[2].innerHTML =
    //     '<div   class="iekbcc0 ju367v4 ju367va ju367v14 ju367v1s"><div class="iekbcc0 ju367vj ju367v2b ju367v6c ju367v8r ju367v93" role="img" style="background: rgb(255, 255, 255);"><div class="iekbcc0 ju367vh ju367v2m ju367v8p ju367v9e" style="transition: opacity 0.15s linear 0s; user-select: none; background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTAgMGgyOHYyOEgweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDcuNTJhNi40OCA2LjQ4IDAgMCAwLTYuMzk4IDcuNTEyYy4wMzUuMjMuMTcuNzI3LjQyMS44ODIuMzE0LjE5My42Ny4wMjcuOTYxLS4xMWguMDAybDEuMjMtLjU3M2EuNTI2LjUyNiAwIDAgMSAuNDQ1LjAxLjUzLjUzIDAgMCAxIC4yODQuNTA0LjUxNy41MTcgMCAwIDEtLjI4Ny40MjZsLTEuNTIyLjcwOWEuNzE0LjcxNCAwIDAgMC0uMzg2LjQzLjcwNS43MDUgMCAwIDAgLjQ0Ljg3NC42OTUuNjk1IDAgMCAwIC41MTQtLjAyMWwzLjM0LTEuNTU3YS41MTQuNTE0IDAgMCAxIC40MzkuMDE2LjUyLjUyIDAgMCAxIC4yODQuNDg4Yy0uMDEyLjE0LS4wOS4zNDctLjI4LjQzNmwtMi4yNjUgMS4wNTVhLjY5Ni42OTYgMCAwIDAtLjM4NC41ODUuNjk3LjY5NyAwIDAgMCAuOTg0LjY4M2w0LjA2OC0xLjg5N2EuNTQyLjU0MiAwIDAgMSAuNDUgMCAuNTIuNTIgMCAwIDEgLjMuNDYxYzAgLjE0OS0uMDA2LjI1OC0uMjQyLjQ2OS0uMjA2LjE4NC0uNTA4LjM2Ni0xLjUzNy44MDUtLjM1My4xNS0uNTkzLjI2LS41NTQuNDUuMDMuMTQzLjEzNC4xOTcuNDc5LjE4MS4zNDUtLjAxNSAxLjg5Ny0uMTM3IDMuNDUyLTEuNDM2QTYuNDY2IDYuNDY2IDAgMCAwIDIwLjQ4IDE0YzAtLjcyMi0uMTE4LTEuNDE2LS4zMzYtMi4wNjRhLjYyNC42MjQgMCAwIDEtLjUxLTEuMTM5QTYuNDc4IDYuNDc4IDAgMCAwIDE0IDcuNTJabTIuNCA0LjA4YS42MjQuNjI0IDAgMSAxLTEuMjQ3IDAgLjYyNC42MjQgMCAwIDEgMS4yNDcgMFoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjE0IiB4Mj0iMTQiIHkxPSIwIiB5Mj0iMjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjNjI0NkY1Ii8+PHN0b3Agb2Zmc2V0PSIuNDkzIiBzdG9wLWNvbG9yPSIjNTE2NkVFIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTZCOUY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+&quot;); background-repeat: no-repeat; opacity: 1;"></div><div class="iekbcc0 ju367vc5 ju367vj ju367vt ju367vv ju367v2m ju367v8r ju367v9e"></div></div><div class="iekbcc0"><div class="iekbcc0">Okto SDK</div></div></div>';
    // }, 150);
  }
  return (
    <header className="sticky top-0 w-full font-primary bg-opacity-30 transition duration-300 ease-in-out bg-black z-10 backdrop-filter backdrop-blur-lg">
      <nav className={"container  mx-auto px-6  " + (isApp ? " ml-20" : "")}>
        <div className="flex justify-between items-center flex-row ">
          <Link
            href="/"
            className="text-2xl  text-white flex flex-row items-center  cursor-pointer"
          >
            <img src="./logo2.png" className="h-20 w-20"></img>CipherInbox
          </Link>
          <div className="hidden md:flex items-center justify-between w-[32vw] ">
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
                    {!wallet.address &&
                      (() => {
                        if (!connected) {
                          return (
                            <div className="flex flex-row">
                              <button
                                onClick={() => fun(openConnectModal)}
                                type="button"
                                className="bg-white  rounded-lg"
                              >
                                Connect Wallet
                              </button>
                              <button
                                onClick={() => createOktoWallet()}
                                type="button"
                                className="bg-white p-2 rounded-lg ml-5"
                              >
                                login / Sign up with Okto
                              </button>
                            </div>
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
                    {wallet.address && (
                      <div className="flex flex-row justify-center items-center mr-7">
                        <div className="text-white">
                          {" "}
                          {wallet.address?.substring(0, 4) +
                            "...." +
                            wallet?.address?.slice(-2)}
                        </div>
                        <button
                          className="bg-white p-2 rounded"
                          onClick={() => logout()}
                        >
                          Logout
                        </button>
                      </div>
                    )}
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
