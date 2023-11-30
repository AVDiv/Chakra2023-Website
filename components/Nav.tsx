import React from "react";
import { WordLogo } from "./svgs/WordLogo";

export function Navbar() {
  return (
    <nav className="bg-[#6969690A] fixed top-0 z-50 w-full backdrop-blur-sm backdrop-brightness-100 bg-gradient-radial from-transparent to-[#00000060] bg-[length:5px_5px] ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="h-8">
          <WordLogo color="#FFDE17" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-semibold text-glow-yellow flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="/#home" className="block py-2 pl-3 pr-4">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="block py-2 pl-3 pr-4">
                About
              </a>
            </li>
            {/* <li>
              <a href="/#partners" className="block py-2 pl-3 pr-4">
                Partners
              </a>
            </li> */}
            <li>
              <a href="/#contact" className="block py-2 pl-3 pr-4">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
