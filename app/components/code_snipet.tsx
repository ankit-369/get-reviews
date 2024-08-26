import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import { Key, useState } from 'react';

hljs.registerLanguage('typescript', typescript);

type IntegrateProps = {
  classname?: string;
  slug: string
};
const reviews = [
  {
    title: 'Comfortable and minimal, just how I like it!',
    description: 'This style relies more on neutral colors with little to no embellishment on furniture. Lighter fabrics, such as silk and cotton, are popular, as are lighter colors in wood and metal.',
    images: ['https://via.placeholder.com/100', 'https://via.placeholder.com/100'],
    author: 'James Schofield',
    date: '23 June 2021',
    rating: 4,
    authorImage: 'https://via.placeholder.com/50'
  }
];



export function Integrate({ classname, slug }: IntegrateProps) {
  const code = `async function fetchReviews(): Promise<any[]> {
    try {
        const res = await axios.post("http://localhost:3000/api/reviews", {
            name: "${slug}"
        });
        return res.data.review_data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        return []; // Return an empty array or handle the error as needed
    }
}
    `;
  const highlightedCode: string = hljs.highlight(code, { language: 'typescript' }).value;
  const [copied, setCopied] = useState(false);

  const copylink = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const usecode = `const [reviews, setReviews] = useState<any[]>([]);

          useEffect(() => {
              async function getReviews() {
                  const reviewData = await fetchReviews();
                  setReviews(reviewData);
              }

              getReviews();
          }, []);`;

  const setreviewsCode: string = hljs.highlight(usecode, { language: 'typescript' }).value;
  const [copiedusecode, setcopiedusecode] = useState(false);

  const copyusecode = () => {
    navigator.clipboard.writeText(usecode);
    setcopiedusecode(true);
    setTimeout(() => setcopiedusecode(false), 2000);
  }

  return (
    <div className={classname}>
      <div className="">
        <div className="mb-2 flex justify-between items-center">
          <p className="font-medium text-gray-900 dark:text-white">Fatch reviews :</p>
        </div>
        <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4" style={{ backgroundColor: '#282C34' }}>
          <div className="">
            <pre className='whitespace-pre-wrap hljs'>
              <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            </pre>
          </div>

          <div className="absolute top-2 right-2">
            <button onClick={copylink} data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
              <span id="default-message" className={`inline-flex items-center ${copied ? 'hidden' : ''}`}>
                <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
                <span className="text-xs font-semibold">Copy code</span>
              </span>
              <span id="success-message" className={`inline-flex items-center ${copied ? '' : 'hidden'}`}>
                <svg className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>
              </span>
            </button>
          </div>
        </div>

        {/* Secound   */}

        <div className="mt-4">
          <div className="mb-2 flex justify-between items-center">
            <p className="font-medium text-gray-900 dark:text-white">Set reviews :</p>
          </div>
          <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4" style={{ backgroundColor: '#282C34' }}>
            <div className="hljs">
              <pre>
                <code dangerouslySetInnerHTML={{ __html: setreviewsCode }} />
              </pre>
            </div>

            <div className="absolute top-2 right-2">
              <button onClick={copyusecode} data-copy-to-clipboard-target="code-block" data-copy-to-clipboard-content-type="innerHTML" data-copy-to-clipboard-html-entities="true" className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
                <span id="default-message" className={`inline-flex items-center ${copiedusecode ? 'hidden' : ''}`}>
                  <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                  </svg>
                  <span className="text-xs font-semibold">Copy code</span>
                </span>
                <span id="success-message" className={`inline-flex items-center ${copiedusecode ? '' : 'hidden'}`}>
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

      {/* <div className="p-6">
      {reviews.map((review, index) => (
        <ReviewComponent key={index} {...review} />
      ))}
    </div> */}

    </div>

  );
}


const ReviewComponent = ({ title, description, images, author, date, rating, authorImage }: any) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex space-x-4">
        {images.map((image: string | undefined, index: Key | null | undefined) => (
          <img key={index} src={image} alt={`Review Image ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <img src={authorImage} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-gray-800 font-semibold">{author}</p>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
        <div className="ml-auto flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-10 h-10 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.874a1 1 0 00.95.69h4.104c.969 0 1.372 1.24.588 1.81l-3.321 2.413a1 1 0 00-.364 1.118l1.257 3.874c.3.921-.755 1.688-1.54 1.118l-3.32-2.413a1 1 0 00-1.175 0l-3.32 2.413c-.784.57-1.838-.197-1.539-1.118l1.257-3.874a1 1 0 00-.364-1.118L2.704 9.3c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.257-3.874z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};