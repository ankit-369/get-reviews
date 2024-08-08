// components/TestimonialModal.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { UserSpace } from '../testimonial/[...space]/page';
import axios from 'axios';

interface TestimonialModalProps {
    data: UserSpace | null;
  isOpen: boolean;
  onClose: () => void;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({data ,isOpen, onClose }) => {
    const [spaceid, setspaceid] = useState<number>(data ? data.id : 0);
    const [rating, setRating] = useState<number>(5);
  const [testimonial, setTestimonial] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [images, setImages] = useState<FileList | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [permission, setPermission] = useState<boolean>(false);

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

  const handleSubmit = async (e : React.FormEvent) => {
    // Handle form submission
    console.log({
      rating,
      testimonial,
      name,
      email,
      images,
      photo,
      permission
    });

    const form = new FormData();
    form.append('spaceid',spaceid.toString());
    form.append('name',name);
    form.append('email',email);
    form.append('rating',rating.toString());
    form.append('testimonial',testimonial);
    form.append('permission',permission.toString());
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
      } catch (error) {
        console.error('Error submitting form:', error);
      }

  };






console.log("inside popup "+ JSON.stringify(data));
  if (!isOpen) return null;

  return (
    <div className="h-auto inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-xl font-semibold mb-4">Write text testimonial to</h2>
        <div className="flex items-center mb-4">
          <Image src={data?.image || '/public/user/default.png'} alt="Avatar" width={100} height={10} className="rounded-full" />
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium">Questions</h3>
          <ul className="list-disc pl-5">
            <li>{data?.question1}</li>
            <li>{data?.question2}</li>
            <li>{data?.question3}</li>
          </ul>
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              onClick={() => setRating(index + 1)}
            >
              {/* ★ */}
              <svg className="w-8 h-8 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
            </button>
          ))}
        </div>
        <textarea
          className="w-full border rounded-lg p-2 mb-4"
          placeholder="Write your testimonial here..."
          value={testimonial}
          onChange={(e) => setTestimonial(e.target.value)}
        />
        <div className="mb-4">
          <label className="block mb-1">Attach Image(s)</label>
          <input type="file" onChange={handleImageChange} multiple/>
        </div>
        {images && (
        <div>
          {Array.from(images).map((file, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(file)} alt={`Image ${index}`} width={100} height={100} />
              <button onClick={() => setImages(null)}>Remove</button>
            </div>
          ))}
        </div>
      )}
        <div className="mb-4">
          <label className="block mb-1">Your Name *</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Your Email *</label>
          <input
            type="email"
            className="w-full border rounded-lg p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Upload Your Photo</label>
          <input type="file" onChange={handlePhotoChange} />
        </div>
        {photo && (
          <div className="relative mb-4">
            <Image
              src={URL.createObjectURL(photo)}
              alt="Uploaded Photo"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <button
              className="absolute top-0 right-0 text-gray-600 hover:text-gray-900"
              onClick={() => setPhoto(null)}
            >
              ×
            </button>
          </div>
        )}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={permission}
              onChange={() => setPermission(!permission)}
            />
            <span className="ml-2">I give permission to use this testimonial across social channels and other marketing efforts</span>
          </label>
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 mr-2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
