import Image from 'next/image'; // Import next/image at the top

interface TestimonialFormData {
    spaceName: string;
    title: string;
    description: string;
    question1: string;
    question2: string;
    question3: string;
    theme: string;
    logo: string;
    collectiontype: string;
}
interface PriviewProps {
    formData: TestimonialFormData;
}
type FormData = {
    logo?: string;
    title?: string;
    description?: string;
    question1?: string;
    question2?: string;
    question3?: string;
};
export default function Priview({ formData }: PriviewProps) {

    return <>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Live preview - Testimonial page</h2>
        <div className="space-y-4 text-center mt-6">
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
                {/* <img
                                    src={formData.logo || '/user/default.png'}
                                    alt="Logo"
                                    style={{
                                        objectFit: 'cover',  // Ensures the image covers the container without stretching
                                        width: '100%',        // Makes sure the image takes up the full width of the container
                                        height: '100%'        // Makes sure the image takes up the full height of the container
                                    }}
                                /> */}
                <Image
                    src={formData.logo || '/user/default.png'}
                    alt="Logo"
                    layout="fill"             // Allows the image to fill the container dimensions
                    objectFit="cover"         // Ensures the image covers the container without stretching
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
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-500 transition-colors">Send in text</button>
                </div>
            </div>
        </div>
    </>
}