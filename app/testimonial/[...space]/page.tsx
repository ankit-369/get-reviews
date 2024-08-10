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
    const [showform, setshowform] = useState(false);
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
            ) : (


               
                <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex flex-col items-center justify-center">
                    {spacedata ? (
                        <div key={spacedata.id} className="container flex flex-col md:flex-row gap-6 items-center justify-center">
                            {/* Preview Section */}
                            <div className="w-full md:w-1/2 p-6 bg-gray-900 text-white rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105">
                                <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Share Your Feedback</h2>
                                <div className="space-y-4 text-center mt-6">

                                    <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
                                        <Image
                                            src={spacedata.image}
                                            alt="Logo"
                                            fill
                                            sizes="(max-width: 600px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-blue-300">{spacedata.title}</h3>
                                        <p className="text-gray-400 mt-2">{spacedata.description}</p>
                                    </div>
                                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                        {(spacedata.question1 || spacedata.question2 || spacedata.question3) && (
                                            <>
                                                <h4 className="text-lg font-semibold mb-4 text-blue-400">QUESTIONS</h4>
                                                <ul className="list-disc list-inside space-y-2">
                                                    {spacedata.question1 && <li>{spacedata.question1}</li>}
                                                    {spacedata.question2 && <li>{spacedata.question2}</li>}
                                                    {spacedata.question3 && <li>{spacedata.question3}</li>}
                                                </ul>
                                            </>
                                        )}
                                        <div className="mt-6 flex justify-center space-x-4">
                                            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition-colors">Record a video</button> */}
                                            <button onClick={openModal} className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors">Send in text</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <GalaxySpinner />
                    )}
                </div>


            )}

        </>
    )
}
