import { useState } from "react";
import Head from "../components/Head";
import axios from "axios";
import { useAccount } from "wagmi";
import axiosConfig from "../util/axios";

export default function CreateCipher() {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [email, setEmail] = useState("");

  function createEmail() {
    console.log(address);
    axiosConfig
      .post("email-notification/generate-email-id", {
        email: "email@t.com",
        walletAddress: address,
      })
      .then(function (response) {
        console.log(response.data);
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
                className="p-3 rounded-lg w-[20%] h-8 text-black"
                placeholder="Search for a cipher "
              ></input>{" "}
              @cipherInbox.com
            </div>
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
