import Image from 'next/image';
import { ChangeEvent, FormEvent } from 'react';

export interface SpaceFormData {
    id?:number;
    spaceName: string;
    title: string;
    description: string;
    question1: string;
    question2: string;
    question3: string;
    theme: string;
    image?:string;
    logo: string;
    collectiontype: string;
    // imageUrl?:string;
}
interface EditSpaceFormProps {
    formData: SpaceFormData;
    setFormData: React.Dispatch<React.SetStateAction<SpaceFormData>>;
    submitForm: (e: FormEvent) => void;
    handleLogoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value:string;
}
const EditSpaceForm: React.FC<EditSpaceFormProps> = ({
    formData,
    setFormData,
    submitForm,
    handleLogoChange,
    value
}) => {
    console.log(JSON.stringify(formData))
    return <>
    <h2 className="text-2xl  text-slate-800	 font-bold mb-6">Edit Space</h2>
                        <form onSubmit={submitForm} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Space name *</label>
                                <input
                                    type="text"
                                    name="spaceName"
                                    value={formData.spaceName}
                                    onChange={(e) => setFormData({ ...formData, spaceName: e.target.value })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    readOnly={value === "Update Form"}
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
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">{value}</button>
                            </div>
                        </form>
    </>
}

export default EditSpaceForm;
