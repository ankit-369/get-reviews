import Navbar from "@/app/components/navbar";
import { Space_card } from "@/app/components/space_card";
import { Redirect_btn } from "@/app/components/redirect_btn";


export default function Dashboard() {
    return (
        <div className="min-h-screen pb-8 bg-gray-900 text-white">

            <div className="container mx-auto px-4 py-12">
                <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
                    {/* <!-- Card 1 --> */}
                    <div className="max-w-sm w-full p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-yellow-400">Organize Your Creations</h5>
                        <p className="mb-3 text-gray-300">Effortlessly manage your created forms and spaces. Stay on top of your submissions with our intuitive dashboard, and get started on creating something new with just a click!</p>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div className="max-w-sm w-full p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-red-500">Create New Spaces</h5>
                        <p className="mb-3 text-gray-300">Ready to start something new? Click below to quickly create a new form or space and add to your collection. Your next big idea is just a click away!</p>
                        <div className="inline-flex font-medium items-center text-blue-500 hover:underline">
                            <Redirect_btn classname="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300" value="Create New Form" redirect="createspace" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-32 flex-col md:flex-row justify-center items-center mt-10 px-4">
                <div className="mb-4 md:mb-0 md:mr-8">
                    <p className="text-lg font-semibold text-green-400">Your Forms</p>
                </div>
                <div>
                    <span className="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-500 to-red-500 group-hover:from-yellow-600 group-hover:to-red-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800">
                        <Redirect_btn classname="px-5 py-2.5 transition-all ease-in duration-75 bg-gray-800 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" value="Create New Form" redirect="createspace" />
                    </span>
                </div>
            </div>

            {/* Space card */}
            <div className="ml-10 mr-10 mt-12">
                <Space_card />
            </div>
        </div>

    )
}

