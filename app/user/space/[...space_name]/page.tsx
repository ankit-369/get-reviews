"use client";
import { Get_testimonials, GetTestimonialsResponse, Review } from "@/actions/testimoniala";
import { Integrate } from "@/app/components/code_snipet";
import Navbar from "@/app/components/navbar";
import { Redirect_btn } from "@/app/components/redirect_btn";
import { Review_card } from "@/app/components/review_card";
import GalaxySpinner from "@/app/components/spinner";
import { Widget } from "@/app/components/widget";
import Image from "next/image";
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

        if (response.message && response.message !== "no testimonial submitted yet") {
          setError(response.message);
        } else if (response.message === "no testimonial submitted yet") {

          setError(response.message);
          setspace_image(response.space_image || "");

        }
        else {
          console.log("Fetched reviews:", response); // Log the fetched data
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

      
      <div className="flex flex-col md:flex-row max-w-[100%] items-center p-6 bg-gray-900 shadow-lg rounded-lg">
        <div className="flex-shrink-0">
          <Image
            className="w-40 h-40 rounded-full border-4 border-gradient-to-r from-blue-400 to-blue-600 object-cover"
            src={space_image ? space_image : "/default-image.png"} // Default image if none provided
            alt="Space Avatar"
            width={160}
            height={160}
            // layout="responsive"
          />
        </div>

        <div className="ml-6 text-center md:text-start max-w-[50%] flex-grow">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-row">

              <h2 className="text-2xl font-bold text-white">{slug}</h2>
              <svg
                className="ml-3 w-6 h-6 text-blue-500"
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
          </div>
          <div className="flex below-900:flex-col  below-900:items-center after-900:flex-row">

            <p className="text-md text-gray-300 mt-2">
              Space public URL :
            </p>
            <a href={`http://localhost:3000/testimonial/${slug}`} className="ml-2 mt-2  text-blue-400 hover:underline">{`http://localhost:3000/user/space/${slug}`}</a>
          </div>
          <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-lg dark:bg-gray-800 dark:border-yellow-400 dark:text-yellow-300" role="alert">
            <span className="font-semibold">Note:</span> Refresh the page to see changes.
          </div>
        </div>

        <div className="flex flex-col items-end mt-4 md:mt-0 md:ml-auto space-y-4 pr-6">
          <div className="flex items-center">
            <span className="text-gray-300">Total reviews: <span className="font-semibold text-white">{reviews.length}</span></span>
          </div>

          <span>
            <Redirect_btn
              classname="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              value="Edit Space"
              redirect={`/user/editspace/${slug}`}
            />
          </span>
        </div>
      </div>

      <div className="p-4 flex below-900:flex-col after-900:flex-row min-h-screen dark:bg-gray-900 " >

        {/* sidebar */}
        <div id="logo-sidebar" className=" xl:ml-10 sticky	top-0 left-0 z-40 after-900:max-w-64 after-900:pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <div className="after-900:h-full overflow-hidden px-3 pb-4 overflow-y-auto dark:bg-gray-900">
            <ul className="flex justify-center items-center below-900:flex-row below-900:space-x-2 flex-col space-y-2 font-medium after-900:justify-normal after-900:items-start after-900:flex-wrap  after-900:space-x-0 after-900:space-y-2">
              <li>
                <button onClick={() => settab("dashboard")} className={`flex  md:ml-3 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'dashboard' ? 'bg-gray-700' : ''}`}>
                  <svg className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </button>
              </li>
              <li>
                <button onClick={() => settab("liked")} className={`flex ml-3 md:ml-4 w-full h-10 items-center p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'liked' ? 'bg-gray-700' : ''}`}>
                  <svg className="flex-shrink-0  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="ms-3">Liked</span>
                </button>
              </li>
              <li>
                <button onClick={() => settab("integrate")} className={`flex ml-4 w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'integrate' ? 'bg-gray-700' : ''}`}>
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="ms-3">Integrate</span>
                </button>
              </li>
              <li>
                <button onClick={() => settab("widget")} className={`flex ml-4 w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${tab === 'widget' ? 'bg-gray-700' : ''}`}>
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.92">
                    <path d="M6.6,121.92H47.51a6.56,6.56,0,0,0,2.83-.64,6.68,6.68,0,0,0,2.27-1.79,6.63,6.63,0,0,0,1.5-4.17V74.58A6.56,6.56,0,0,0,53.58,72,6.62,6.62,0,0,0,50,68.47,6.56,6.56,0,0,0,47.51,68H6.6a6.5,6.5,0,0,0-2.43.48,6.44,6.44,0,0,0-2.11,1.34A6.6,6.6,0,0,0,.55,72,6.3,6.3,0,0,0,0,74.58v40.74a6.54,6.54,0,0,0,.43,2.32,6.72,6.72,0,0,0,1.2,2l.26.27a6.88,6.88,0,0,0,2,1.39,6.71,6.71,0,0,0,2.73.6ZM59.3,28.44,86,1.77A6.19,6.19,0,0,1,88.22.34,6.24,6.24,0,0,1,90.87,0a6,6,0,0,1,3.69,1.74l26.55,26.55a6,6,0,0,1,1.33,2,6.13,6.13,0,0,1-1.33,6.58L94.45,63.58a6,6,0,0,1-1.9,1.27,5.92,5.92,0,0,1-2.24.5,6.11,6.11,0,0,1-2.41-.43,5.74,5.74,0,0,1-2.05-1.34L59.3,37a6.09,6.09,0,0,1-1.76-3.88V32.8a6.14,6.14,0,0,1,1.77-4.36ZM6.6,59.64H47.51a6.56,6.56,0,0,0,5.1-2.43,6.46,6.46,0,0,0,1.11-2,6.59,6.59,0,0,0,.39-2.21V12.31a6.61,6.61,0,0,0-.53-2.58A6.62,6.62,0,0,0,50,6.19a6.56,6.56,0,0,0-2.45-.48H6.6a6.5,6.5,0,0,0-2.43.48A6.44,6.44,0,0,0,2.06,7.53,6.6,6.6,0,0,0,.55,9.71,6.31,6.31,0,0,0,0,12.31V53.05a6.48,6.48,0,0,0,.43,2.31,6.6,6.6,0,0,0,1.2,2l.26.27a6.88,6.88,0,0,0,2,1.39,6.71,6.71,0,0,0,2.73.6Zm40.92-6.57H6.6l0,0V12.28c3.51,0,40.93,0,41,0,0,3.44,0,40.75,0,40.77Zm22.23,68.85h40.91a6.56,6.56,0,0,0,2.83-.64,6.68,6.68,0,0,0,2.27-1.79,6.63,6.63,0,0,0,1.5-4.17V74.58a6.56,6.56,0,0,0-.53-2.57,6.62,6.62,0,0,0-3.62-3.54,6.56,6.56,0,0,0-2.45-.48H69.75a6.75,6.75,0,0,0-4.54,1.82A6.6,6.6,0,0,0,63.7,72a6.3,6.3,0,0,0-.55,2.59v40.74a6.54,6.54,0,0,0,.43,2.32,6.72,6.72,0,0,0,1.2,2l.26.27a6.88,6.88,0,0,0,2,1.39,6.71,6.71,0,0,0,2.73.6Zm40.92-6.57H69.75l0,0,0-40.77c3.51,0,40.93,0,41,0,0,3.44,0,40.75,0,40.77Zm-63.15,0H6.6l0,0V74.56c3.51,0,40.93,0,41,0,0,3.44,0,40.75,0,40.77Z" />
                  </svg>
                  <span className="ms-3">widget</span>
                </button>
              </li>
            </ul>
          </div>
        </div>


        {/* sidebarend */}

        {tab === "integrate" && <Integrate classname="w-full  p-4" slug={slug} />}
        {tab === "widget" && <Widget classname="w-full md:w-[79%] xl:w-[82%] 2xl:w-[85%] p-4" />}

        {reviews.length === 0 && error !== "no testimonial submitted yet" ? (

          <>
            {(tab === "dashboard" || tab === "liked") && <GalaxySpinner />}
            {/* <GalaxySpinner /> */}
          </>

        ) : error === "no testimonial submitted yet" && tab !== "integrate" ? (
          <NoTestimonialsCard />
        ) : (

          <>
            {tab === "dashboard" && <Review_card classname="w-full  p-4" review={reviews} />}
            {tab === "liked" && <Review_card classname="w-full  p-4" review={likedReviews} />}

          </>


        )}


      </div>

    </>

  );
}

function NoTestimonialsCard() {
  return (
    <div className="flex justify-center w-full  pt-10">
      <div className=" p-8 w-full max-w-4xl shadow-lg rounded-lg text-center">
        <div className="flex justify-center items-center mb-4">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 122.88"
            width="100"
            height="100"
          >
            <defs>
              <style>
                {`
            .cls-1{fill:#fbd433;}
            .cls-1,.cls-2{fill-rule:evenodd;}
            .cls-2{fill:#141518;}
          `}
              </style>
            </defs>
            <title>smiley</title>
            <path className="cls-1" d="M45.54,2.11A61.42,61.42,0,1,1,2.11,77.34,61.42,61.42,0,0,1,45.54,2.11Z" />
            <path className="cls-2" d="M45.78,32.27c4.3,0,7.79,5,7.79,11.27s-3.49,11.27-7.79,11.27S38,49.77,38,43.54s3.48-11.27,7.78-11.27Z" />
            <path className="cls-2" d="M77.1,32.27c4.3,0,7.78,5,7.78,11.27S81.4,54.81,77.1,54.81s-7.79-5-7.79-11.27S72.8,32.27,77.1,32.27Z" />
            <path d="M28.8,70.82a39.65,39.65,0,0,0,8.83,8.41,42.72,42.72,0,0,0,25,7.53,40.44,40.44,0,0,0,24.12-8.12,35.75,35.75,0,0,0,7.49-7.87.22.22,0,0,1,.31,0L97,73.14a.21.21,0,0,1,0,.29A45.87,45.87,0,0,1,82.89,88.58,37.67,37.67,0,0,1,62.83,95a39,39,0,0,1-20.68-5.55A50.52,50.52,0,0,1,25.9,73.57a.23.23,0,0,1,0-.28l2.52-2.5a.22.22,0,0,1,.32,0l0,0Z" />
          </svg>

        </div>
        <h2 className="text-xl font-semibold text-white mt-4">
          No Testimonials Yet
        </h2>
        <p className="text-gray-400 mt-2">
          It looks like no one has submitted a testimonial yet. When they do, it
          will appear here.
        </p>
      </div>
    </div>
  );
}
