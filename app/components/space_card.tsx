"use client"

import { getspaces, UserSpace } from "@/actions/dashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Redirect_btn } from "./redirect_btn";
import Image from 'next/image'; // Import the Image component


export function Space_card() {

    const router = useRouter()
    // const [spacedata, setspacedata] = useState<Data | null>(null);
    const [spacedata, setspacedata] = useState<UserSpace[]>([]);

    useEffect(() => {
        async function fetchdata() {
            try {

                const response = await getspaces();
                setspacedata(response);

            } catch (error) {
                console.error('Error fetching data in deshboard page :', error);
            }
        }
        fetchdata()
    }, [])


    console.log("\n\n spacedata in dashboard : " + JSON.stringify(spacedata));


    return (
        <>
            {spacedata.length === 0 ? (

                <div className=" bg-gray-900 flex flex-col items-center justify-center p-6">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">


                            {/* Card Skeleton 2 */}
                            <div className="relative max-w-sm w-full p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 animate-pulse">
                                <div className="h-36 bg-gray-700 rounded-lg mb-4"></div>
                                <div className="h-6 bg-gray-600 rounded w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
                            </div>


                        </div>
                    </div>
                </div>




            ) : (
                <div className="flex justify-center items-center w-full">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 w-full max-w-7xl">
                        {spacedata.map((data) => (

                            <div key={data.id} className="w-full cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {/* <div className="flex justify-end px-4 pt-4"> */}
                                    {/* <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button> */}
                                    {/* <!-- Dropdown menu --> */}
                                    {/* <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                            </li>
                                        </ul>
                                    </div> */}
                                {/* </div> */}
                                <div onClick={() => router.push(`/user/space/${data.spaceName}`)} className="flex pt-6 flex-col items-center pb-10">
                                    <Image className="w-32 h-32 mb-3 rounded-full object-cover"
                                     src={data.image || '/user/default.png'} 
                                     alt="form_photo" 
                                     width={128}
                                     height={128}
                                     
                                     />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.spaceName}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <div className="flex mt-4 md:mt-6">


                                        <span className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            <Redirect_btn classname="" value="See Dashboard" redirect={`/user/space/${data.spaceName}`} />
                                        </span>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            )}

        </>

    )
}