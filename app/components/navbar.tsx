"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { SigninButton } from "./button";
import { useState } from "react";
import { Redirect_btn } from "./redirect_btn";
import Image from 'next/image';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const nextAuthUrl = process.env.NEXT_PUBLIC_NEXTAUTH_URL;

  return (


    <nav className=" dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center justify-center">
          <a href={nextAuthUrl} className="relative p-4">
            <span className="text-2xl font-bold tracking-wide text-white">Kudos Vault</span>
            <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-red-500 transform -translate-x-4 -translate-y-4"></div>
            <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-red-500 transform translate-x-4 translate-y-4"></div>
          </a>
        </div>

        <div className="flex items-center md:order-2 space-x-3">
          {session == null ? (
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          ) : (
            <div className="relative">
              <button
                type="button"
                className="flex text-sm bg-red-500 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                
                <Image
                  className="w-16 h-16 rounded-full"
                  src={session.user?.image ? session.user.image : "/user/default.png"}
                  alt="user photo"
                  width={64} // Adjust width as needed
                  height={64} // Adjust height as needed
                />
              </button>

              {dropdownVisible && (
                <div className="absolute right-0 z-50 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">{session.user?.email}</span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">{session.user?.name}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      
                      <Redirect_btn classname="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200" value="Dashboard" redirect="/user/dashboard" />

                    </li>

                    <li>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>


  )
}