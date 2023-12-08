import Head from "next/head";

export default function CreateCipher() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <section class=" text-white overflow-hidden">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Your cipher domain
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Your identity across web3, one name for all your crypto addresses,
              and your decentralised website.
            </p>

            <div class="mt-8 flex justify-center ">
              <input
                className="p-4 rounded-lg w-[50%] h-10 "
                placeholder="Search for a cipher "
              ></input>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
