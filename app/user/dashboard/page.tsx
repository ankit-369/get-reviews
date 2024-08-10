import Navbar from "@/app/components/navbar";
import { Space_card } from "@/app/components/space_card";
import { Redirect_btn } from "@/app/components/redirect_btn";


const dashboard: React.FC = () => {
    return (
        <div className="min-h-screen dark:bg-gray-800">
            <Navbar></Navbar>
            {/* Header */}
            {/* <p>{JSON.stringify(spacedata)}</p> */}
            {/* <div className="flex mt-10 justify-center w-full gap-20">


                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm  p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline
                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>
                </div>
            </div> */}
            <div className="container mx-auto px-4 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
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
                        <button className="inline-flex font-medium items-center text-blue-600 hover:underline">

                            <Redirect_btn classname="" value="Create New Form" redirect="createspace" />

                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex  items-center mt-8 w-full">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mx-auto">Your Forms</p>


                <span className="inline-flex items-center justify-center p-0.5 mb-2 mr-64 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <Redirect_btn classname="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" value="Create New Form" redirect="createspace" />
                </span>
            </div> */}


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


            <>
                <Space_card />
            </>



            {/* <!-- Footer Section --> */}
            <footer className="mt-10 bg-gray-900 text-white py-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    {/* <!-- Logo Section --> */}
                    <div className="flex items-center justify-center mb-6 md:mb-0">
                        <a href="http://localhost:3000" className="relative p-4">
                            <span className="text-2xl font-bold tracking-wide text-white">
                                Kudos Vault                </span>
                            <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-red-500 transform -translate-x-4 -translate-y-4"></div>
                            <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-red-500 transform translate-x-4 translate-y-4"></div>
                        </a>
                    </div>
                    {/* <!-- Navigation Links --> */}
                    <div className="flex space-x-6">
                        <a href="https://github.com/ankit-369/get-reviews" target="_blank" className="text-gray-400 hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.24c-3.338.726-4.043-1.393-4.043-1.393-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.837 1.237 1.837 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.42-1.302.762-1.602-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.467-2.38 1.235-3.22-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.303 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.005.404 2.293-1.553 3.297-1.23 3.297-1.23.655 1.653.244 2.876.12 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.623-5.476 5.92.431.371.824 1.1.824 2.218v3.29c0 .32.192.694.8.577C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/_x_ankit" target="_blank" className="text-gray-400 hover:text-white">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.575 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.923 2.205-4.923 4.923 0 .385.045.76.127 1.122-4.092-.205-7.719-2.164-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.71.87 3.217 2.188 4.099-.807-.025-1.568-.247-2.228-.616v.062c0 2.388 1.698 4.381 3.946 4.831-.413.111-.849.171-1.296.171-.314 0-.622-.03-.923-.086.623 1.944 2.428 3.355 4.568 3.395-1.674 1.309-3.778 2.087-6.065 2.087-.393 0-.779-.023-1.158-.067 2.161 1.39 4.723 2.201 7.482 2.201 8.98 0 13.893-7.443 13.893-13.893 0-.21-.004-.42-.014-.63.952-.688 1.781-1.55 2.438-2.533z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* <!-- Footer Bottom --> */}
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; 2024 Kudos Vault. All rights reserved.</p>
                </div>
            </footer>


        </div>)
}

export default dashboard;