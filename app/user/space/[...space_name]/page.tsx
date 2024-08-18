"use client";
import { Get_testimonials, GetTestimonialsResponse, Review } from "@/actions/testimoniala";
import { Integrate } from "@/app/components/code_snipet";
import Navbar from "@/app/components/navbar";
import { Redirect_btn } from "@/app/components/redirect_btn";
import { Review_card } from "@/app/components/review_card";
import GalaxySpinner from "@/app/components/spinner";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";



export default function Space() {
  const pathname = usePathname();
  const path = pathname.split("/").filter(Boolean);
  const slug = path[path.length - 1];

  const [tab, settab] = useState<string>("dashboard");

  const [reviews, setReviews] = useState<Review[]>([]);
  const [likedReviews, setLikedReviews] = useState<Review[]>([]);

  const [space_image, setspace_image] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response: GetTestimonialsResponse = await Get_testimonials(slug);
        // const response = await axios.post<Data>('/api/user/spacedata', { data: slug });
        // console.log("API Response:", response); // Log the entire response object

        if (response.message) {
          // console.log("error msg: "+ response.message);
          setError(response.message);
        } else {
          // console.log("Fetched reviews:", response.review_data); // Log the fetched data
          setspace_image(response.space_image || "");
          const res = response.review_data || [];

          setReviews(res);
          setLikedReviews(res.filter((rev) => rev.heart === "true"));

        }

      } catch (error) {
        setError("An error occurred while fetching data");
      }
    }

    getData();
  }, [slug]);



  console.log("Updated reviews state:", reviews);
  console.log("Updated error state:", error);





  return (
    <>

      <div className="flex items-center p-4 bg-gray-800 shadow-md">
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 rounded-full border-2 border-blue-500 object-cover"
            src={space_image ? space_image : ""} // Replace with your image URL
            alt="Space Avatar"
          />
        </div>

        <div className="ml-4 flex-grow">
          <div className="flex items-center">
            <h2 className="text-xl font-semibold text-white">{slug}</h2>
            <svg
              className="ml-2 w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-9.464a1 1 0 10-1.414-1.414L9 10.586l-1.122-1.122a1 1 0 00-1.415 1.415l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400">
            Space public URL: <a href={"http://localhost:3000/testimonial/" + slug} className="text-blue-400 hover:underline">http://localhost:3000/user/space/{slug}</a>
          </p>
          <div className="mt-3 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <span className="font-medium">Note!</span> Refresh the page to see changes.
          </div>
        </div>
        <div className="flex flex-col items-end">
          {/* <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 8a4 4 0 11-7.9 1h-4.2a4 4 0 11-7.9-1 4 4 0 117.9-1h4.2A4 4 0 1117 8zM3 8a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="ml-2 text-gray-400">Video credits: <span className="text-white">2</span></span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5a4 4 0 00-4 4v4a4 4 0 004 4h10a4 4 0 004-4V9a4 4 0 00-4-4H5zm8 8H7a1 1 0 110-2h6a1 1 0 110 2zm1-4H6a1 1 0 010-2h8a1 1 0 010 2z" />
              </svg>
              <span className="ml-2 text-gray-400">Text credits: <span className="text-white">10</span></span>
            </div>
          </div> */}
          {/* <button className="mt-2 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700">
            Edit space
          </button> */}
          <span className="">
            <Redirect_btn classname="mt-2 bg-blue-600 text-white py-1 px-4 rounded-lg hover:bg-blue-700" value="Edit Space" redirect={`/user/editspace/${slug}`} />
          </span>
        </div>
      </div>
      {/*  */}
      <div className="p-4 min-h-screen flex dark:bg-gray-900">

        <aside id="logo-sidebar" className=" top-0 left-0 z-40 max-w-64  pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-900 dark:border-gray-700" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-900">
            <ul className="space-y-2 font-medium">
              <li>
                <button onClick={() => settab("dashboard")} className={` flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'dashboard' ? 'bg-gray-700' : ''}`}>
                  <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => settab("liked")} className={`flex w-full items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'liked' ? 'bg-gray-700' : ''}`}>
                  {/* <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg> */}
                  <svg className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="#9BA0A8"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="ml-2">Liked</span>
                  {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                </button>
              </li>
              <li>
                <button onClick={() => settab("integrate")} className={`flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'integrate' ? 'bg-gray-700' : ''}`}>
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 whitespace-nowrap">Integrate</span>
                  {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                </button>
              </li>


            </ul>
          </div>
        </aside>


        {reviews.length === 0 ? (

          <>
            <GalaxySpinner />
          </>

        ) : (
          <>
            {tab === "dashboard" && <Review_card classname="w-full  p-4" review={reviews} />}
            {tab === "liked" && <Review_card classname="w-full  p-4" review={likedReviews} />}
            {tab === "integrate" && <Integrate classname="w-full  p-4" slug={slug} />}

          </>


        )}


      </div>


    </>
  );
}
