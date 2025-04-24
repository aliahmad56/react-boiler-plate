import React, { useState } from "react";
import { Link } from "react-router-dom";
import createMusicImage from "../../assets/sidebar/createMusicImage.png";
import logoImage from "../../assets/sidebar/logoImage.png";
import twitterImage from "../../assets/sidebar/twitterImage.png";
import instagramImage from "../../assets/sidebar/instagramImage.png";
import redittImage from "../../assets/sidebar/redittImage.png";
import ticktokImage from "../../assets/sidebar/ticktokImage.png";
import upgradeImage from "../../assets/sidebar/upgradeImage.png";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <span></span>
      </button>

      <aside
        id="separator-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !sidebarOpen ? "-translate-x-full" : ""
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        {/* <div className="h-full min-h-screen px-3 py-4 overflow-y-auto bg-black-500 dark:bg-gray-800" style={
            {backgroundColor:'black'}
        }> */}
        <div
          className="h-full px-3 py-4 flex flex-col bg-black dark:bg-gray-800"
          style={{ backgroundColor: "black" }}
        >
          {/* Main navigation section */}
          <div className="flex-grow">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                    <img
                      src={logoImage}
                      className="w-8 h-8"
                      alt="musicLibraryImage"
                    ></img>
                  </span>
                  <span className="ms-3 text-white hover:text-black">
                    Songs Manager
                  </span>
                </a>
              </li>

              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="lucide lucide-home "
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-black">
                  Home
                </span>
              </Link>

              <Link
                to="/library"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-library size-6"
                  >
                    <path d="m16 6 4 14"></path>
                    <path d="M12 6v14"></path>
                    <path d="M8 8v12"></path>
                    <path d="M4 4v16"></path>
                  </svg>
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-black">
                  Library
                </span>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                  <img
                    src={createMusicImage}
                    className="w-full h-full"
                    alt="musicLibraryImage"
                  ></img>
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap text-white hover:text-black">
                  Create Music
                </span>
              </Link>
            </ul>

            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                  <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                    <img
                      src={createMusicImage}
                      className="w-full h-full"
                      alt="musicLibraryImage"
                    ></img>
                  </span>
                  <span className="ms-3 text-white hover:text-black">
                    Credits
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-xl border border-red-500 flex items-center p-3 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group "
                >
                  <span className="w-5 h-5 text-gray-500 dark:text-gray-400">
                    <img
                      src={upgradeImage}
                      className="w-6 h-6"
                      alt="musicLibraryImage"
                    ></img>
                  </span>
                  <span className="ms-3 text-red-500">Upgrades</span>
                </a>
              </li>
            </ul>
          </div>

          {/* User profile section */}
          <div className="mt-auto pt-4">
            <div className="flex items-center p-2 text-gray-900 transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <span className="border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="lucide lucide-log-in text-muted-foreground transition-colors group-hover/button:text-brand-accent"
                  aria-label="Sign In"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" x2="3" y1="12" y2="12"></line>
                </svg>
              </span>
              <span className="ms-3 text-white hover:text-black">Login</span>
            </div>
          </div>

          {/* Social media icons - Now fixed at bottom */}
          <div className="mt-4 pb-4">
            <div className="flex space-x-3 justify-center">
              <span>
                <img src={ticktokImage} className="w-8 h-8" alt="TikTok" />
              </span>
              <span>
                <img src={instagramImage} className="w-8 h-8" alt="Instagram" />
              </span>
              <span>
                <img src={redittImage} className="w-8 h-8" alt="Reddit" />
              </span>
              <span>
                <img src={twitterImage} className="w-8 h-8" alt="Twitter" />
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
