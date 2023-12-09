import { ConnectButton, WalletButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { useAccount, useConnect } from "wagmi";
import { useRouter } from "next/router";
import axios from "axios";

export default function Head({ isApp }) {
  const router = useRouter();

  const account = useAccount({
    onConnect({ address, connector, isReconnected }) {
      // console.log("Connected", { address, connector, isReconnected });
      router.push("/create-cipher");
    },
  });

  async function authenticate(api_key, idToken, pin) {
    let { data } = await axios.post(
      `/api/v1/authenticate`,
      {
        id_token: idToken,
      },
      {
        headers: {
          "x-api-key": api_key,
        },
      }
    );

    const token = data.token;
    // user signup flow
    if (token) {
      const { data } = await axios.post(
        `/api/v1/set_pin`,
        {
          id_token: idToken,
          token: token,
          relogin_pin: pin,
          purpose: "set_pin",
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      const { auth_token, refresh_auth_token, device_token } = data;
      return { auth_token, refresh_auth_token, device_token };
    }
    // user login flow
    else {
      const { auth_token, refresh_auth_token, device_token } = data;
      return { auth_token, refresh_auth_token, device_token };
    }
  }
  function createOktoWallet() {
    authenticate(
      "474abe92-fdc1-489c-be47-764d850c4253",
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0MDc0MDg3MTgxOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDMxMzg2NzQ1ODYxNzI3MzQ0MjMiLCJlbWFpbCI6ImhlbWFuZ3ZvcmEyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiV0wxRVBURkd2YklFNkdfR1NnZVNFdyIsImlhdCI6MTcwMjE0MTY1MCwiZXhwIjoxNzAyMTQ1MjUwfQ.Op3VOlQtKzngh72zf8XnZcs8d64fw6krjFaFWHkxM6nIaiwzA4qwfOFTuHzm2GB5Vkwx4eG1h59KOIAx5t_LX_e2N_HH2UkiKNid3_PfzV-0O4kiJ396590EluOgnF4k9VVM3EuCiA08kFzmqnXG-Qi41-VYTtmH2fJT7GsnEKta23aEeam_CYNkxB2_8iGaDU1NLbF_Eqgsa2FLsYmsiPs6QzHGNhWXwJ5LW2xri13MkAwpfZDk6SPqE-60ZKQYQkDonkg7cOkMvqyegimwSt83GF0fAwm1hMI2QEaFmtu3m8GNXuaSCNaRKuKJb-EoV3r13yp_4iA45yhRjjbG4g",
      "1234"
    );
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
          <div className="hidden md:flex items-center justify-between w-[25vw] ">
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
                          <div className="flex flex-row">
                            <button
                              onClick={() => fun(openConnectModal)}
                              type="button"
                              className="bg-white p-2 rounded-lg"
                            >
                              Connect Wallet
                            </button>
                            {/* <button
                              onClick={() => createOktoWallet()}
                              type="button"
                              className="bg-white p-2 rounded-lg ml-5"
                            >
                              Sign up with Okto
                            </button> */}
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
