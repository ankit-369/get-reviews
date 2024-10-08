import { add_like } from "@/actions/handle_like";
import { Review } from "@/actions/testimoniala";
import { useState } from "react";
import { ToastSuccess } from "./toster";
import Image from 'next/image'; // Import next/image at the top

interface ReviewCardProps {
    review: Review[];
    classname: string
}
interface AddLikeResponse {
    message: string;
    error?: any// Ensure this matches the expected response structure
    heart: {
        id: number;
        heart: string;
    };
}



export const Review_card: React.FC<ReviewCardProps> = ({ review, classname }) => {
    const [reviews, setReviews] = useState<Review[]>(review);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handle_like = async (testimoniala_id: number, heart: string) => {

        // const [heart_color , set_heart_color]=useState()
        try {

            const response = await add_like(testimoniala_id, heart) as AddLikeResponse;

            // const { id: updatedTestimonialId, heart: updatedHeart } = response;
            const updatedTestimonialId = response.heart.id;
            const updatedHeart = response.heart.heart;
            console.log(updatedHeart + "      " + updatedTestimonialId);

            // if (updatedHeart) {
            // Update the reviews state with the new heart value for the specific review
            setReviews(reviews.map((rev) =>
                rev.id === updatedTestimonialId ? { ...rev, heart: updatedHeart } : rev
            ));
            // }
            setToastMessage(response.message);
            setShowToast(true);

            // Hide the toast after a few seconds
            setTimeout(() => {
                setShowToast(false);
            }, 3000);

            console.log(response);
            // alert(response);
        } catch (e) {
            console.log("Error updating like status:", e);

        }

    }


    return (
       
<div className={classname}>
  {showToast && <ToastSuccess message={toastMessage} onClose={() => setShowToast(false)} />}

  {reviews.map((data) => (
    <div
      key={data.id}
      className="mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mb-6 border border-gray-700 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center rounded-full text-sm font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 shadow-md">
            Review
          </span>
          <button
            onClick={() => handle_like(data.id, data.heart)}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              fill={data.heart === "true" ? "#FACC15" : "#B0BEC5"}
              className="transition-colors duration-200"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${
                              // @ts-ignore
                index < data.star ? 'text-yellow-400' : 'text-gray-400'
              }`}
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.569 1.688 11.431 1.688 11.951 2.927l1.417 3.252c.211.482.66.82 1.188.9l3.584.52c1.32.191 1.84 1.802.888 2.719l-2.593 2.53c-.37.361-.538.88-.452 1.387l.61 3.558c.22 1.28-1.13 2.26-2.287 1.65l-3.207-1.684a1.007 1.007 0 00-.941 0l-3.207 1.684c-1.156.61-2.507-.37-2.287-1.65l.61-3.558c.086-.507-.082-1.026-.452-1.387l-2.593-2.53c-.952-.917-.432-2.528.888-2.719l3.584-.52c.528-.08.977-.418 1.188-.9l1.417-3.252z" />
            </svg>
          ))}
        </div>

        <p className="text-white mb-4 text-lg font-medium">{data.review}</p>

        {data.images?.length ? (
          <div className="flex mb-4 space-x-2 overflow-x-auto py-2">
            {data.images.map((image, index) => (
              <img
                key={index}
                className="max-w-sm max-h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                src={image || 'https://via.placeholder.com/500x300'}
                alt={`Review image ${index}`}
              />
    //         <div key={index} className="relative  object-cover max-w-sm max-h-48 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    //     <Image
    //       src={image || 'https://via.placeholder.com/500x300'}
    //       alt={`Review image ${index}`}
    //       width={384} // Adjust width according to your design
    //       height={200} // Adjust height according to your design
    //       className="rounded-lg object-cover"
    //     />
    //   </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mb-4 text-sm italic">No images available</p>
        )}

        <div className="flex items-center mb-4">
          <Image
            className="w-16 h-16 rounded-full mr-3 object-cover border-2 border-gray-600 shadow-lg"
            src={data.photo || '/user/default.png'}
            alt="User photo"
            width={64}
            height={64}
          />
          <div>
            <h5 className="text-white text-base font-semibold">{data.name}</h5>
            <p className="text-gray-400 text-xs">User</p>
          </div>
        </div>

        <div className="text-gray-400 text-sm">
          <p className="font-semibold">Email:</p>
          <p>{data.email}</p>
        </div>

        <div className="text-gray-400 text-sm mt-2">
          <p className="font-semibold">Submitted At:</p>
          <p>{new Date(Number(data.createdAt) * 1000).toLocaleString()}</p>
        </div>
      </div>
    </div>
  ))}
</div>

       
    )
}