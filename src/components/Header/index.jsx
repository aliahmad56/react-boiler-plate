import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import Button from "../Button";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useLogout(); // Get the logout function from the hook

  return (
    <nav className="bg-black dark:bg-gray-900 fixed right-0 left-64 z-20 top-0 border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between p-4">
        {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white italic">
          Ai Song Creation
          </span>
        </a> */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button
            type="button"
            className="bg-white text-black py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
        <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Create
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Library
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
