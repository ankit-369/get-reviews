"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from "next/navigation";


const EditSpace: React.FC = () => {
    const router = useRouter()
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errors, seterror] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        spaceName: '',
        title: '',
        description: '',
        question1: '',
        question2: '',
        question3: '',
        theme: 'dark',
        logo: '',
        collectiontype: 'text'
    });
    const [file, setFile] = useState<File | null>(null);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);

            const reader = new FileReader();
            reader.onload = (event: any) => {
                setFormData({ ...formData, logo: event.target.result });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const submitform = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('spaceName', formData.spaceName);
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('question1', formData.question1);
        formDataToSend.append('question2', formData.question2);
        formDataToSend.append('question3', formData.question3);
        formDataToSend.append('theme', formData.theme);
        formDataToSend.append('collectiontype', formData.collectiontype);

        if (file) {
            formDataToSend.append('logo', file);
        }

        try {
            const response = await axios.post('/api/user/createspace', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.message === 'Space created successfully') {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    router.push('/user/dashboard')
                }, 3000)

            }
            console.log(response.data);

        } catch (error: any) {
            console.error('Error submitting form:', error);

            if (error.response && error.response.data && error.response.data.message) {
                seterror(error.response.data.message);
            } else {
                seterror("An unexpected error occurred");
            }
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                seterror(null);
            }, 2000)


        }
    };

    console.log(errors);
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            {/* {showSuccessMessage && (
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Space created successfully!</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Your space has been created.</p>
                </div>
            )} */}

            {showSuccessMessage ?

                <div id="popup-modal" tabIndex={-1} className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="p-4 md:p-5 text-center">

                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                </svg>


                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{errors ? errors : "Boom! Your testimonial form is all set and ready to rock 'n' roll! "}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className="container mx-auto flex flex-col md:flex-row gap-6">
                    {/* Preview Section */}
                    
                    <div className="w-full md:w-1/2 p-6 bg-gray-900 text-white rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Live preview - Testimonial page</h2>
    <div className="space-y-4 text-center mt-6">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
        <img
          src={formData.logo || '/user/default.png'}
          alt="Logo"
          style={{
            objectFit: 'cover',  // Ensures the image covers the container without stretching
            width: '100%',        // Makes sure the image takes up the full width of the container
            height: '100%'        // Makes sure the image takes up the full height of the container
          }}
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-blue-300">{formData.title || "Your title goes here"}</h3>
        <p className="text-gray-400 mt-2">{formData.description || "Add description for user"}</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        
            <h4 className="text-lg font-semibold mb-4 text-blue-400">QUESTIONS</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>{formData.question1 || "Who are you / what are you working on?"}</li>
              <li>{formData.question2 || "How has [our product / service] helped you?"}</li>
              <li>{formData.question3 || "What is the best thing about [our product / service]?"}</li>
            </ul>
          
        <div className="mt-6 flex justify-center space-x-4">
          <button  className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors">Send in text</button>
        </div>
      </div>
    </div>
  </div>
                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-6 text-slate-800 bg-white rounded-lg shadow-lg">
                        <h2 className="text-2xl  text-slate-800	 font-bold mb-6">Edit Space</h2>
                        <form onSubmit={submitform} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Space name *</label>
                                <input
                                    type="text"
                                    name="spaceName"
                                    value={formData.spaceName}
                                    onChange={(e) => setFormData({ ...formData, spaceName: e.target.value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Update the logo</label>
                                <div className="flex items-center space-x-4 mt-1">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={formData.logo ? formData.logo : "/user/default.png"}
                                            alt="Logo"
                                            // layout="fill"
                                            fill
                                            sizes="(max-width: 600px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}

                                        />
                                    </div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        className="hidden"
                                        id="logoUpload"
                                    />
                                    <label
                                        htmlFor="logoUpload"
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md cursor-pointer"
                                    >
                                        Change
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Header title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title && formData.title}
                                    placeholder={formData.title ? formData.title : "Add your title"}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your custom message *</label>
                                <textarea
                                    name="description"
                                    value={formData.description && formData.description}
                                    placeholder={formData.description ? formData.description : "Add description for user"}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Note!!</span> Questions will only appear in the form if you write them.
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Questions</label>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="question1"
                                        value={formData.question1 && formData.question1}
                                        placeholder={formData.question1 ? formData.question1 : "Who are you / what are you working on?"}
                                        onChange={(e) => setFormData({ ...formData, question1: e.target.value })}
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="question2"
                                        value={formData.question2 && formData.question2}
                                        placeholder={formData.question2 ? formData.question2 : "How has [our product / service] helped you?"}
                                        onChange={(e) => setFormData({ ...formData, question2: e.target.value })}
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <input
                                        type="text"
                                        name="question3"
                                        value={formData.question3 && formData.question3}
                                        placeholder={formData.question3 ? formData.question3 : "What is the best thing about [our product / service]?"}
                                        onChange={(e) => setFormData({ ...formData, question3: e.target.value })}
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            {/* <div>
                                <label className="inline-flex items-center me-5 cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer" checked />
                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                    <span className="ms-3 text-sm font-medium text-gray-900 ">dark</span>
                                </label>
                            </div> */}
                            <div className="flex items-center justify-between">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Create Form</button>
                            </div>
                        </form>
                    </div>
                </div>

            }
        </div>
    );
};

export default EditSpace;
