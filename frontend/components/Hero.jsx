export default function Hero() {
  return (
    <section className=" text-white overflow-hidden font-primary">
      <div className="mx-auto max-w-screen-xl px-4 py-32 pt-20 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center ">
          <h1 className="mb-8 md:text-[48px] text-white  font-dmsans    bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl  text-transparent sm:text-5xl">
            Where
            <span className="    bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  text-transparent ">
              {" "}
              blockchain{" "}
            </span>
            meets inbox,
            <span className="sm:block text-white">
              your{" "}
              <span className="   bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text  text-transparent ">
                {" "}
                web3
              </span>{" "}
              email companion
            </span>
          </h1>

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"></p> */}
        </div>
      </div>
    </section>
  );
}
