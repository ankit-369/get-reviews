import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { Widget_Demo } from './widget_demo';
import { useState } from 'react';

hljs.registerLanguage('typescript', typescript);

interface widgetprop {
    classname: string
}

export function Widget({ classname }: widgetprop) {
    const [Mode, setMode] = useState('dark');

    const toggleMode = () => {
        setMode(prevMode => (prevMode === 'white' ? 'dark' : 'white'));
    };

    const dark_widget_code = `// Dark 
        <div className="relative p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 shadow-lg rounded-3xl border border-gray-600 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="absolute bottom-0 left-0 w-full h-32 text-gray-700 opacity-20 transform -rotate-6"
                    fill="currentColor"
                    viewBox="0 0 200 200"
                >
                    <circle cx="50%" cy="50%" r="50%" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-500 mb-4 overflow-hidden bg-gray-800 flex items-center justify-center">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <span className="text-5xl font-bold text-gray-400">
                            {name.charAt(0).toUpperCase()}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-100 mb-2">
                    {name}
                </h3>
                <p className="text-gray-400 text-base italic mb-4">
                    {new Date(createdAt * 1000).toLocaleDateString()}
                </p>

                <p className="text-gray-300 text-lg italic border-t-4 border-gray-500 pt-4">
                    "{review}"
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {images.length !== 0 ? (
                        images.map((image: string | undefined, index: React.Key | null | undefined) => (
                            <div key={index} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
                                <img
                                    src={image}
                                    alt={\`Review Image \${index + 1}\`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-sm">No images available</p>
                    )}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                    <div className="flex space-x-1 mb-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <svg
                                key={index}
                                className={\`w-6 h-6 md:w-8 md:h-8 \${index < star ? "text-yellow-500" : "text-gray-500"} transition-transform duration-200 hover:scale-110\`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.874a1 1 0 00.95.69h4.104c.969 0 1.372 1.24.588 1.81l-3.321 2.413a1 1 0 00-.364 1.118l1.257 3.874c.3.921-.755 1.688-1.54 1.118l-3.32-2.413a1 1 0 00-1.175 0l-3.32 2.413c-.784.57-1.838-.197-1.539-1.118l1.257-3.874a1 1 0 00-.364-1.118L2.704 9.3c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.257-3.874z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>`;

    const white_widget_code = ` //  White 
        <div className="relative p-6 bg-gradient-to-br from-white via-gray-100 to-gray-200 shadow-lg rounded-3xl border border-gray-300 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
                <svg
                    className="absolute bottom-0 left-0 w-full h-32 text-gray-200 opacity-30 transform -rotate-6"
                    fill="currentColor"
                    viewBox="0 0 200 200"
                >
                    <circle cx="50%" cy="50%" r="50%" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-400 mb-4 overflow-hidden bg-white flex items-center justify-center shadow-lg">
                    {photo ? (
                        <img
                            src={photo}
                            alt={name}
                            className="w-full h-full object-cover rounded-full"
                        />
                    ) : (
                        <span className="text-5xl font-bold text-blue-500">
                            {name.charAt(0).toUpperCase()}
                        </span>
                    )}
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                    {name}
                </h3>
                <p className="text-gray-600 text-base italic mb-4">
                    {new Date(createdAt * 1000).toLocaleDateString()}
                </p>

                <p className="text-gray-800 text-lg italic border-t-4 border-blue-400 pt-4">
                    "{review}"
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {images.length !== 0 ? (
                        images.map((image: string | undefined, index: React.Key | null | undefined) => (
                            <div key={index} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg border border-gray-300 shadow-md">
                                <img
                                    src={image}
                                    alt={\`Review Image \${index + 1}\`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-sm">No images available</p>
                    )}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center mt-4">
                    <div className="flex space-x-1 mb-2">
                        {Array.from({ length: 5 }, (_, index) => (
                            <svg
                                key={index}
                                className={\`w-6 h-6 md:w-8 md:h-8 \${index < star ? "text-yellow-500" : "text-gray-400"} transition-transform duration-200 hover:scale-110\`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.874a1 1 0 00.95.69h4.104c.969 0 1.372 1.24.588 1.81l-3.321 2.413a1 1 0 00-.364 1.118l1.257 3.874c.3.921-.755 1.688-1.54 1.118l-3.32-2.413a1 1 0 00-1.175 0l-3.32 2.413c-.784.57-1.838-.197-1.539-1.118l1.257-3.874a1 1 0 00-.364-1.118L2.704 9.3c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.257-3.874z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>`;
    const MainFunction_code = `export default function Review() {
  const [reviews, setReviews] = useState<any[]>([]); // Use any[] type for state

  useEffect(() => {
    async function getReviews() {
      const reviewData = await fetchReviews();
      setReviews(reviewData);
    }

    getReviews();
  }, []);

  console.log(reviews);
  const duplicatedReviews = [...reviews, ...reviews]; // Duplicate reviews for continuous effect

  return (
    <>
      <div className="relative p-6">
        <style jsx>{\`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .slider-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .slider {
          display: flex;
          flex-direction: row;
          animation: slide 10s linear infinite;
        }

        .slider-wrapper:hover .slider {
          animation-play-state: paused; /* Pause the animation on hover */
        }
          
        .slider-item {
          flex: 0 0 auto;
          width: calc(100% / 2 - 1rem); /* Two items per row, adjust spacing */
          box-sizing: border-box;
          margin-right: 1rem;
        }

        @media (min-width: 768px) {
          .slider-item {
            width: calc(100% / 3 - 1rem); /* Three items per row, adjust spacing */
          }
        }

        @media (max-width: 640px) {
          .slider-item {
            width: calc(100%/2 - 1rem); /* One item per row, adjust spacing */
          }
        }
      \`}</style>

        <div className="slider-wrapper">
          <div className="slider">
            {duplicatedReviews.map((review, index) => (
              <div key={index} className="slider-item">
                <ReviewComponent {...review} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}`
const temp_code = `const ReviewComponent = ({
                    name,review,
                    images,photo,
                    star,createdAt
                    }: any) => {
                    return (${Mode === 'dark' ? dark_widget_code : white_widget_code});
                    };`
    const widget = hljs.highlight(temp_code, { language: 'typescript' }).value;

    const MainFunction = hljs.highlight(MainFunction_code, { language: 'typescript' }).value;

    // copy widget_code 
    const [widget_copied, set_widget_Copied] = useState(false);

  const copylink = () => {
    navigator.clipboard.writeText(temp_code);
    set_widget_Copied(true);
    setTimeout(() => set_widget_Copied(false), 2000);
  }
  // copy main_function
  const [mainfun__copied, set_mainfun_Copied] = useState(false);

  const copy_mainfun = () => {
    navigator.clipboard.writeText(MainFunction_code);
    set_mainfun_Copied(true);
    setTimeout(() => set_mainfun_Copied(false), 2000);
  }
    return (
        <div className={classname} >

            {/* Widget Demo */}
            <div className="grid place-items-center bg-gray-100 dark:bg-gray-900">
                <button
                    onClick={toggleMode}
                    className={`px-4 py-2 rounded-full transition-colors duration-300 ${Mode
                        ? 'bg-gray-700 text-gray-100 hover:bg-gray-600'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                        }`}
                >
                    {Mode === 'white' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
            <Widget_Demo theme={Mode} />

            {/* widgetdemo end */}
            <div className=" ">
                <div className="mb-2 flex justify-between items-center">
                    <p className="font-medium dark:text-white">Main function :</p>
                </div>
                <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 " style={{ backgroundColor: '#282C34' }}>
                    <div className="overflow-x-auto whitespace-pre-wrap " style={{ height: '45rem' }}>
                        <pre className="hljs">
                            <code dangerouslySetInnerHTML={{ __html: MainFunction }} />
                        </pre>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button onClick={copy_mainfun} data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
                            <span id="default-message" className={`inline-flex items-center ${mainfun__copied ? 'hidden' : ''}`}>
                                <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                                <span className="text-xs font-semibold">Copy code</span>
                            </span>
                            <span id="success-message" className={`inline-flex items-center ${mainfun__copied ? '' : 'hidden'}`}>
                                <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Secound */}

            <div className=" mt-4">
                <div className="mb-2 flex justify-between items-center">
                    <p className="font-medium dark:text-white">Testimonial design :</p>
                </div>
                <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 " style={{ backgroundColor: '#282C34' }}>
                    <div className="overflow-x-auto whitespace-pre-wrap " style={{ height: '45rem' }}>
                        <pre className="hljs">
                            <code dangerouslySetInnerHTML={{ __html: widget }} />
                        </pre>
                    </div>
                    <div className="absolute top-2 right-2">
                        <button onClick={copylink} data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
                            <span id="default-message" className={`inline-flex items-center ${widget_copied ? 'hidden' : ''}`}>
                                <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                </svg>
                                <span className="text-xs font-semibold">Copy code</span>
                            </span>
                            <span id="success-message" className={`inline-flex items-center ${widget_copied ? '' : 'hidden'}`}>
                                <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                                <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

