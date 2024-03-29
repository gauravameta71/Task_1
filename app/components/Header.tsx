"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";

const HeaderMain = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl text-center pb-2 sm:pb-0 text-blackish text-white font-bold">
                <Link href="/">JetSetJourney</Link>
                <span className="text-orange-500 text-sm font-thin sm:text-xs md:text-sm lg:text-base xl:text-lg">
                  {" "}
                  explore beyond
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-orange-500 hover:text-black font-bold rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:bg-orange-500 hover:text-black font-bold rounded-lg p-2"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:bg-orange-500 hover:text-black font-bold rounded-lg p-2"
                >
                  Services
                </Link>{" "}
                <Link
                  href="/contact"
                  className="text-white hover:bg-orange-500 hover:text-black font-bold rounded-lg p-2"
                >
                  Contact
                </Link>
                <a href="/signin">
                  {/* Login Button */}
                  <button
                    type="button"
                    className="text-white bg-orange-600 hover:bg-orange-800  focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-2 me-2 mb-0"
                  >
                    Login
                  </button>
                </a>
              </div>
            </div>

            {/* For Mobile */}

            <div className="md:hidden flex items-center">
              <div className="flex m-4 h-10">
                {/* LOGIN BUTTON */}

                <a href="/signup">
                  {/* Login Button */}
                  <button
                    type="button"
                    className="text-white bg-orange-600 hover:bg-orange-800  focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2 mb-0"
                  >
                    Login
                  </button>
                </a>
              </div>
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white   hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-0 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-white block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/products"
                  className="text-white block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Services
                </a>{" "}
                <a
                  href="/contact"
                  className="text-white block hover:bg-orange-600 hover:text-black font-bold rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default HeaderMain;
