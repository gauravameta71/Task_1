/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section class="bg-white dark:bg-black">
      <div class="container px-8 py-4 mx-auto">
        <div>
          <p class="text-3xl text-orange-500 font-bold">Contact us</p>

          <p class="mt-3 text-gray-500 dark:text-gray-400">
            Get in touch with us
          </p>
        </div>

        
          <div className="flex flex-col items-center justify-center px-6 py-8  md:h-full ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:white dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Contact us
                </h1>

                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter Your Email"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Contact
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  );
};

export default page;
