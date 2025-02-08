const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-transparent dark:border-[#333333] border-b-2">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#ad61d8]">
          VoxRights AI
        </span>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white hover:text-gradient-to-r hover:from-[#6C00B7] hover:to-[#7B0A1A]"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-gradient-to-r hover:from-[#6C00B7] hover:to-[#7B0A1A] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-gradient-to-r hover:from-[#6C00B7] hover:to-[#7B0A1A] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700"
              >
                For Voice Actors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-gradient-to-r hover:from-[#6C00B7] hover:to-[#7B0A1A] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700"
              >
                For Content Creators
              </a>
            </li>
          </ul>
        </div>
        <button className="md:flex md:w-auto flex items-center justify-center rounded-lg border border-transparent bg-gradient-to-r from-[#7A00E6] to-[#8F0A1A] px-6 py-2 text-base font-medium text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-[#6C00B7] hover:to-[#7B0A1A] focus:outline-none focus:ring-2 focus:ring-[#6C00B7] focus:ring-offset-2 focus:ring-offset-gray-100 dark:bg-gradient-to-r dark:from-[#7A00E6] dark:to-[#8F0A1A] dark:hover:bg-gradient-to-r dark:hover:from-[#6C00B7] dark:hover:to-[#7B0A1A] dark:focus:ring-[#6C00B7]">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
