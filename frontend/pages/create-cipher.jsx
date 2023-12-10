import { useEffect, useState } from "react";
import Head from "../components/Head";

import { useAccount } from "wagmi";
import axiosConfig from "../util/axios";
import { useRouter } from "next/router";

export default function CreateCipher() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [email, setEmail] = useState("");
  const [wallet, setWallet] = useState({});
  const [errors, setErrors] = useState("");
  const router = useRouter();
  useEffect(() => {
    let wall = {};
    let add = sessionStorage.getItem("address");
    wall.address = add;
    if (add) {
      wall.auth_token = sessionStorage.getItem("auth_token");
      wall.api = sessionStorage.getItem("api");
      wall.type = sessionStorage.getItem("type");
      setWallet(wall);
      console.log(wall);
    }
  }, []);
  function createEmail() {
    console.log(address);
    axiosConfig
      .post("email-notification/generate-email-id", {
        email: "email@t.com",
        walletAddress: address,
      })
      .then(function (response) {
        console.log(response.data);
        router.push("/mail");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Head />
      <section className=" text-white overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-32 pt-20 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto text-center font-primary">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl  text-transparent sm:text-5xl">
              Your cipher domain
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Your identity across web3, one name for all your crypto addresses,
              and your decentralised website.
            </p>

            <div className="mt-8 flex justify-center flex-row ">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg w-[25%] h-8 text-black mr-1"
                placeholder="ETHIndia2023 "
              ></input>{" "}
              @cipherInbox.com
            </div>
            {errors && <div className="text-red-500 text-xl">{errors}</div>}
            {email && (
              <button
                className="bg-white p-2 rounded-lg text-black mt-5"
                onClick={() => createEmail()}
              >
                Mint Now
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
