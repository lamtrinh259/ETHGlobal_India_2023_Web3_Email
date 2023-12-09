import Head from "../components/Head";

export default function CreateCipher() {
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

            <div className="mt-8 flex justify-center ">
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
