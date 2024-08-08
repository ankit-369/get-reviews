"use client"

import { getspaces, UserSpace } from "@/actions/dashboard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Redirect_btn } from "./redirect_btn";


export function Space_card() {

    const router = useRouter()
    // const [spacedata, setspacedata] = useState<Data | null>(null);
    const [spacedata, setspacedata] = useState<UserSpace[]>([]);

    useEffect(() => {
        async function fetchdata() {
            try {
                // const response = await axios.get('/api/user/dashboard');
                const response = await getspaces();

                setspacedata(response);
            } catch (error) {
                console.error('Error fetching data in deshboard page :', error);
            }
        }
        fetchdata()
    }, [])


    // console.log("\n\n spacedata in dashboard : " + JSON.stringify(spacedata));


    return (
        <>
            {spacedata.length === 0 ? (

                <div role="status" className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>


            ) : (
                <div className="flex justify-center items-center w-full">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 w-full max-w-7xl">
                        {spacedata.map((data) => (

                            <div key={data.id} className="w-full cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-end px-4 pt-4">
                                    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                        <span className="sr-only">Open dropdown</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                        </svg>
                                    </button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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
                                    </div>
                                </div>
                                <div onClick={() => router.push(`/user/space/${data.spaceName}`)} className="flex flex-col items-center pb-10">
                                    <img className="w-32 h-32 mb-3 rounded-full object-cover" src={data.image || '/user/default.png'} alt="form_photo" />
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.spaceName}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                                    <div className="flex mt-4 md:mt-6">
                                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Space</a>

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