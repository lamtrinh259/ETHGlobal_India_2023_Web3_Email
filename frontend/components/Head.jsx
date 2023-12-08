export default function Head() {
  return (
    <header className="sticky top-0 w-full md:bg-opacity-90 transition duration-300 ease-in-out bg-neutral-900 z-10">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            MyWebsite
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-600">
              Contact
            </a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Sign Up
            </a>
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
