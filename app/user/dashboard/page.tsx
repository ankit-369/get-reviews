import Navbar from "@/app/components/navbar";
import { Space_card } from "@/app/components/space_card";
import { Redirect_btn } from "@/app/components/redirect_btn";


export default function Dashboard()  {
    return (
        <div className="min-h-screen dark:bg-gray-800">
            
            <div className="container mx-auto px-4 ">
                <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                    {/* <!-- Card 1 --> */}
                    <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg> */}
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Organize Your Creations</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Effortlessly manage your created forms and spaces. Stay on top of your submissions with our intuitive dashboard, and get started on creating something new with just a click!</p>
                        {/* <button className="inline-flex font-medium items-center text-blue-600 hover:underline">

                            <Redirect_btn classname="" value="Explore Your Forms" redirect="createspace" />

                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </button> */}
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg> */}
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Create New Spaces</h5>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Ready to start something new? Click below to quickly create a new form or space and add to your collection. Your next big idea is just a click away!</p>
                        <div className="inline-flex font-medium items-center text-blue-600 hover:underline">

                            <Redirect_btn classname="" value="Create New Form" redirect="createspace" />

                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            


            <div className="flex gap-32 flex-col md:flex-row justify-center items-center mt-10 px-4">
                <div className="mb-4 md:mb-0 md:mr-8">
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Your Forms</p>
                </div>
                <div>
                    <span className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <Redirect_btn classname="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" value="Create New Form" redirect="createspace" />
                    </span>
                </div>
            </div>




            {/* Space card */}


            <div className="ml-10 mr-10">
                <Space_card />
            </div>



            


        </div>)
}

