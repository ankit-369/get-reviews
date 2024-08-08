"use client"
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import GalaxySpinner from "@/app/components/spinner";
import TestimonialForm from "@/app/components/popup";
import TestimonialModal from "@/app/components/popup";

export interface UserSpace {
    id: number;
    userId: number;
    spaceName: string;
    title: string;
    description: string;
    image: string;
    question1: string;
    question2: string;
    question3: string;
    theme: string;
    collectionType: string;
}

export default function HOME() {
    const pathname = usePathname();

    const [spacedata, setspacedata] = useState<UserSpace | null>(null)
    const [ showform , setshowform] = useState(false);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const saperate = pathname.split("/").filter(Boolean);
    const slug = saperate[saperate.length - 1];

    useEffect(() => {

        async function getdata() {
            const response = await axios.post("/api/testimonial", { data: slug })
            setspacedata(response.data.frontenddata);
        }
        getdata()

        console.log(spacedata)
    }, [slug])


    

    return (

        <>
        {isModalOpen ? (
                <TestimonialModal data={spacedata} isOpen={isModalOpen} onClose={closeModal} />
): (

        

        <div className="p-6 bg-gray-800 min-h-screen flex flex-col items-center">
            {spacedata ? (

                <div key={spacedata.id} className="container mx-auto flex flex-col md:flex-row gap-6">
                    {/* Preview Section */}
                    <div className="w-full md:w-1/2 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Give Us Your Review</h2>
                        <div className="space-y-4 text-center mt-10">

                            <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden">
                                <Image
                                    src={spacedata.image}
                                    alt="Logo"
                                    // layout="fill"
                                    fill
                                    sizes="(max-width: 600px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{spacedata.title}</h3>
                                <p className="text-gray-400">{spacedata.description}</p>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg">
                                <h4 className="text-lg font-semibold mb-2">QUESTIONS</h4>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>{spacedata.question1}</li>
                                    <li>{spacedata.question2}</li>
                                    <li>{spacedata.question3}</li>
                                </ul>
                                <div className="mt-4 flex justify-center space-x-2">
                                    {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Record a video</button> */}
                                    <button onClick={openModal} className="px-4 py-2 bg-gray-600 text-white rounded-lg">Send in text</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <GalaxySpinner />
            )}
            {/* <p>{data.title}</p> */}

        </div>
)}

        </>
    )
}
