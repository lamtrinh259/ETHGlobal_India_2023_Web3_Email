export default function Head() {
  return (
    <header class="bg-white bg-opacity-5 text-white shadow-lg hidden md:block ">
      <div class="container mx-auto flex items-center h-24">
        <a href="" class="flex items-center justify-center">
          <img
            class="h-16"
            src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
            alt=""
          />
          <span class="ml-4 uppercase font-black">
            clara
            <br />
            thella
          </span>
        </a>
        <nav class="contents font-semibold text-base lg:text-lg">
          <ul class="mx-auto flex items-center">
            <li class="p-5 xl:p-8 active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>Projects</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>Services</span>
              </a>
            </li>
            <li class="p-5 xl:p-8">
              <a href="">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </nav>
        <button class="border border-white rounded-full font-bold px-8 py-2">
          Contact me
        </button>
      </div>
    </header>
  );
}
