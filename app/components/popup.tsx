// components/TestimonialModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { UserSpace } from '../testimonial/[...space]/page';
import axios from 'axios';

interface TestimonialModalProps {
  data: UserSpace | null;
  isOpen: boolean;
  onClose: () => void;
  slug:string
}

type Errors = {
  testimonial?: string;
  name?: string;
  email?: string;
  permission?: string;
  general?: string; // Add this line to include the 'general' property
};
const TestimonialModal: React.FC<TestimonialModalProps> = ({ slug , data, isOpen, onClose }) => {
  const [spaceid, setspaceid] = useState<number>(data ? data.id : 0);
  const [rating, setRating] = useState<number>(5);
  const [testimonial, setTestimonial] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [permission, setPermission] = useState<boolean>(false);
  const [images, setImages] = useState<FileList | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (e.target.files && e.target.files.length > 0) {
    //   setImage(e.target.files[0]);
    // }
    const files = e.target.files;
    if (files) {
      setImages(files);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setPhoto(e.target.files[0]);
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    // Handle form submission
   
    e.preventDefault();

    const newErrors: Errors = {};

    // Validate each field
    if (!testimonial) newErrors.testimonial = 'Testimonial is required.';
    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!permission) newErrors.permission = 'You must agree to the permissions.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowAlert(true); // Show alert
      setTimeout(() => setShowAlert(false), 3000); // Hide alert after 2 seconds
      return;
    }

    // Clear errors if validation passes
    setErrors({});
    setShowAlert(false);

    const form = new FormData();
    form.append('spaceid', spaceid.toString());
    form.append('name', name);
    form.append('email', email);
    form.append('rating', rating.toString());
    form.append('testimonial', testimonial);
    form.append('permission', permission.toString());
    if (images) {
      for (let i = 0; i < images.length; i++) {
        form.append('images', images[i]);
      }
    }

    if (photo) {
      form.append('photo', photo);
    }


    try {
      const response = await axios.post('/api/submit', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully:', response.data);
      if (response.data.message === 'Form submitted successfully') {

        setShowSuccessMessage(true);
        setTimeout(() => {
          window.location.href = `/testimonial/${slug}`; // Redirect to a success page

        }, 3000)

      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }

  };






  // console.log("inside popup " + JSON.stringify(data));
  if (!isOpen) return null;

  // console.log(errors);

  return (

    <div className="h-auto inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">

      {ShowSuccessMessage ?
        <div id="popup-modal" tabIndex={-1} className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-70 z-50">
          <div className="relative p-6 max-w-lg w-full bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Thank You for Your Review!</h3>
              <p className="text-lg text-gray-700">We appreciate your feedback and will use it to improve our services. 😊</p>
            </div>
          </div>
        </div>


        :




        // <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-8 relative border border-gray-200">
        //   <button
        //     className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-colors"
        //     onClick={onClose}
        //   >
        //     ×
        //   </button>
        //   <h2 className="text-2xl font-semibold mb-6 text-center text-blue-500">Share Your Testimonial</h2>
        //   <div className="flex items-center justify-center mb-6">
        //     <img className='rounded-full border-4 border-blue-300 shadow-lg'
        //       src={data?.imageUrl || '/user/default.png'}
        //       alt="Logo"
        //       style={{ width: '120px', height: '120px', objectFit: 'cover' }}

        //     />
        //   </div>
        //   <div className="mb-6">
        //     {(data?.question1 || data?.question2 || data?.question3) && (
        //       <>
        //         <h3 className="text-lg font-medium mb-2 text-blue-400">Questions</h3>
        //         <ul className="list-disc pl-6 space-y-1 text-gray-700">
        //           {data?.question1 && <li>{data?.question1}</li>}
        //           {data?.question2 && <li>{data?.question2}</li>}
        //           {data?.question3 && <li>{data?.question3}</li>}
        //         </ul>
        //       </>
        //     )}
        //   </div>
        //   <div className="flex items-center justify-center mb-6 space-x-2">
        //     {[...Array(5)].map((_, index) => (
        //       <button
        //         key={index}
        //         className={`text-3xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-500 transition-colors`}
        //         onClick={() => setRating(index + 1)}
        //       >
        //         <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        //           <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        //         </svg>
        //       </button>
        //     ))}
        //   </div>
        //   <textarea
        //     className="w-full border border-gray-300 rounded-lg p-4 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        //     placeholder="Write your testimonial here..."
        //     value={testimonial}
        //     onChange={(e) => setTestimonial(e.target.value)}
        //   />
        //   <div className="mb-6">
        //     <label className="block mb-2 text-gray-700">Attach Image(s)</label>
        //     <input type="file" onChange={handleImageChange} multiple className="border border-gray-300 rounded-lg p-2 bg-gray-50" />
        //   </div>
        //   {images && (
        //     <div className="flex flex-wrap gap-4 mb-6">
        //       {Array.from(images).map((file, index) => (
        //         <div key={index} className="relative">
        //           <img src={URL.createObjectURL(file)} alt={`Image ${index}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
        //           <button
        //             className="absolute top-1 right-1 text-red-600 hover:text-red-800"
        //             onClick={() => setImages(null)}
        //           >
        //             ×
        //           </button>
        //         </div>
        //       ))}
        //     </div>
        //   )}
        //   <div className="mb-6">
        //     <label className="block mb-2 text-gray-700">Your Name *</label>
        //     <input
        //       type="text"
        //       className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        //       value={name}
        //       onChange={(e) => setName(e.target.value)}
        //     />
        //   </div>
        //   <div className="mb-6">
        //     <label className="block mb-2 text-gray-700">Your Email *</label>
        //     <input
        //       type="email"
        //       className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //     />
        //   </div>
        //   <div className="mb-6">
        //     <label className="block mb-2 text-gray-700">Upload Your Photo</label>
        //     <input type="file" onChange={handlePhotoChange} className="border border-gray-300 rounded-lg p-2 bg-gray-50" />
        //   </div>
        //   {photo && (
        //     <div className="relative mb-6">
        //       <Image
        //         src={URL.createObjectURL(photo)}
        //         alt="Uploaded Photo"
        //         width={120}
        //         height={120}
        //         className="rounded-lg shadow-md"
        //       />
        //       <button
        //         className="absolute top-0 right-0 text-red-600 hover:text-red-800"
        //         onClick={() => setPhoto(null)}
        //       >
        //         ×
        //       </button>
        //     </div>
        //   )}
        //   <div className="mb-6">
        //     <label className="inline-flex items-center text-gray-700">
        //       <input
        //         type="checkbox"
        //         className="form-checkbox"
        //         checked={permission}
        //         onChange={() => setPermission(!permission)}
        //       />
        //       <span className="ml-2">I give permission to use this testimonial across social channels and other marketing efforts</span>
        //     </label>
        //   </div>
        //   {showAlert && (
        //     <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        //       <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //         <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        //       </svg>
        //       <div>
        //         <span className="font-medium">Ensure that these requirements are met:</span>
        //         <ul className="mt-1.5 list-disc list-inside">
        //           {errors.testimonial && <li>{errors.testimonial}</li>}
        //           {errors.name && <li>{errors.name}</li>}
        //           {errors.email && <li>{errors.email}</li>}
        //           {errors.permission && <li>{errors.permission}</li>}
        //         </ul>
        //       </div>
        //     </div>
        //   )}
        //   <div className="flex justify-end gap-4">
        //     <button className="bg-gray-300 text-gray-700 rounded-lg px-6 py-3 hover:bg-gray-400 transition-colors" onClick={onClose}>
        //       Cancel
        //     </button>
        //     <button
        //       className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors"
        //       onClick={handleSubmit}
        //     >
        //       Send
        //     </button>
        //   </div>

        // </div>

        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 p-10 relative border border-blue-200">
  <button
    className="absolute top-3 right-3 text-blue-500 hover:text-blue-700 transition-colors transform hover:scale-110"
    onClick={onClose}
  >
    ×
  </button>
  <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Share Your Testimonial</h2>
  <div className="flex items-center justify-center mb-8">
    <img className="rounded-full border-4 border-blue-400 shadow-lg transform hover:scale-110 transition-transform"
      src={data?.imageUrl || '/user/default.png'}
      alt="Logo"
      style={{ width: '130px', height: '130px', objectFit: 'cover' }}
    />
  </div>
  <div className="mb-8">
    {(data?.question1 || data?.question2 || data?.question3) && (
      <>
        <h3 className="text-xl font-medium mb-4 text-blue-500">Questions</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          {data?.question1 && <li>{data?.question1}</li>}
          {data?.question2 && <li>{data?.question2}</li>}
          {data?.question3 && <li>{data?.question3}</li>}
        </ul>
      </>
    )}
  </div>
  <div className="flex items-center justify-center mb-8 space-x-3">
    {[...Array(5)].map((_, index) => (
      <button
        key={index}
        className={`text-3xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-500 transition-colors transform hover:scale-110`}
        onClick={() => setRating(index + 1)}
      >
        <svg className="w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
    ))}
  </div>
  <textarea
    className="w-full border border-gray-300 rounded-lg p-4 mb-8 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow"
    placeholder="Write your testimonial here..."
    value={testimonial}
    onChange={(e) => setTestimonial(e.target.value)}
  />
  <div className="mb-8">
    <label className="block mb-3 text-blue-600">Attach Image(s)</label>
    <input type="file" onChange={handleImageChange} multiple className="border border-gray-300 rounded-lg p-3 bg-gray-100" />
  </div>
  {images && (
    <div className="flex flex-wrap gap-4 mb-8">
      {Array.from(images).map((file, index) => (
        <div key={index} className="relative">
          <img src={URL.createObjectURL(file)} alt={`Image ${index}`} className="w-24 h-24 object-cover rounded-lg shadow-md" />
          <button
            className="absolute top-1 right-1 text-red-600 hover:text-red-800 transform hover:scale-110"
            onClick={() => setImages(null)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )}
  <div className="mb-8">
    <label className="block mb-3 text-blue-600">Your Name *</label>
    <input
      type="text"
      className="w-full border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-8">
    <label className="block mb-3 text-blue-600">Your Email *</label>
    <input
      type="email"
      className="w-full border border-gray-300 rounded-lg p-3 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-shadow"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-8">
    <label className="block mb-3 text-blue-600">Upload Your Photo</label>
    <input type="file" onChange={handlePhotoChange} className="border border-gray-300 rounded-lg p-3 bg-gray-100" />
  </div>
  {photo && (
    <div className="relative mb-8">
      <Image
        src={URL.createObjectURL(photo)}
        alt="Uploaded Photo"
        width={120}
        height={120}
        className="rounded-lg shadow-md"
      />
      <button
        className="absolute top-0 right-0 text-red-600 hover:text-red-800 transform hover:scale-110"
        onClick={() => setPhoto(null)}
      >
        ×
      </button>
    </div>
  )}
  <div className="mb-8">
    <label className="inline-flex items-center text-blue-600">
      <input
        type="checkbox"
        className="form-checkbox border border-blue-400"
        checked={permission}
        onChange={() => setPermission(!permission)}
      />
      <span className="ml-2">I give permission to use this testimonial across social channels and other marketing efforts</span>
    </label>
  </div>
  {showAlert && (
    <div className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div>
        <span className="font-medium">Ensure that these requirements are met:</span>
        <ul className="mt-1.5 list-disc list-inside">
          {errors.testimonial && <li>{errors.testimonial}</li>}
          {errors.name && <li>{errors.name}</li>}
          {errors.email && <li>{errors.email}</li>}
          {errors.permission && <li>{errors.permission}</li>}
        </ul>
      </div>
    </div>
  )}
  <div className="flex justify-end gap-4">
    <button className="bg-gray-300 text-gray-700 rounded-lg px-6 py-3 hover:bg-gray-400 transition-colors transform hover:scale-105" onClick={onClose}>
      Cancel
    </button>
    <button
      className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition-colors transform hover:scale-105"
      onClick={handleSubmit}
    >
      Send
    </button>
  </div>
</div>


      }
    </div>

  );
};

export default TestimonialModal;
