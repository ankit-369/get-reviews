"use client"
import { Formdata } from "@/actions/edit_form";
import Priview from "@/app/components/priview";
import EditSpaceForm, { SpaceFormData } from "@/app/components/space_form";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Edit_space(){
    const router = useRouter()
    const [errors, seterror] = useState<string | null>(null);

    const route = usePathname();
    const saperate = route.split("/").filter(Boolean)
    const slug = saperate[saperate.length - 1];
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const [formdata , setformdata] = useState<SpaceFormData>({ id: 0,
        spaceName: "",
        title: "",
        description: "",
        question1: "",
        question2: "",
        question3: "",
        theme: "",
        image: "",
        logo: "",
        collectiontype: "",
        // imageUrl: ""
    });
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(()=>{
        async function getformdata(){
            const res = await Formdata(slug);
            console.log(JSON.stringify(res));
            if('msg' in res){
                setErrorMsg(res.msg ?? "An unknown error occurred.");
            }else{
                const requiredFormData: SpaceFormData = {
                    id: res.id || 0,
                    spaceName: res.spaceName || "",
                    title: res.title || "",
                    description: res.description || "",
                    question1: res.question1 || "",
                    question2: res.question2 || "",
                    question3: res.question3 || "",
                    theme: res.theme || "",
                    image: res.image || "",
                    logo: res.logo || "",
                    collectiontype: res.collectionType || "", 
                    // imageUrl: res.imageUrl || "",
                };

                setformdata(requiredFormData);  
                setShowSuccessMessage(false);
            }
        }
        getformdata()
    },[slug])

    

    const [file, setFile] = useState<File | null>(null);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);

            const reader = new FileReader();
            reader.onload = (event: any) => {
                setformdata({ ...formdata, logo: event.target.result });
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const submitform = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('spaceName', formdata.spaceName);
        formDataToSend.append('title', formdata.title);
        formDataToSend.append('description', formdata.description);
        formDataToSend.append('question1', formdata.question1);
        formDataToSend.append('question2', formdata.question2);
        formDataToSend.append('question3', formdata.question3);
        formDataToSend.append('theme', formdata.theme);
        formDataToSend.append('collectiontype', formdata.collectiontype);

        if (file) {
            formDataToSend.append('logo', file);
        }

        try {
            const response = await axios.post('/api/user/update_space', formDataToSend, {
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

    return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">

    {showSuccessMessage ?

        <div id="popup-modal" tabIndex={-1} className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <div className="p-4 md:p-5 text-center">

                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>


                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{errors ? errors : "Boom! Your testimonial form is Updated and ready to rock 'n' roll! "}</h3>
                    </div>
                </div>
            </div>
        </div>

        :
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
            {/* Preview Section */}

            <div className="w-full md:w-1/2 p-6 bg-gray-900 text-white rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">

                <Priview formData={formdata} />

            </div>
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-6 text-slate-800 bg-white rounded-lg shadow-lg">
                <EditSpaceForm
                    value='Update Form'
                    formData={formdata}
                    setFormData={setformdata}
                    submitForm={submitform}
                    handleLogoChange={handleLogoChange}
                />              
            </div>
        </div>

    }
</div>)
}