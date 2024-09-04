import Image from 'next/image'; // Import next/image at the top

interface param {
    theme: string
}

export function Widget_Demo({ theme }: param) {
    const reviews = [
        {
            "name": "Alice Johnson",
            "review": "Great service! Highly recommend to everyone.",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=A",
            "star": 5,
            "createdAt": 1692854400
        },
        {
            "name": "Bob Smith",
            "review": "The product quality is amazing, exceeded my expectations.",
            "images": [
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=B",
            "star": 4,
            "createdAt": 1692940800
        },
        {
            "name": "Charlie Brown",
            "review": "Fast shipping and excellent customer service.",
            "images": [],
            "photo": "https://via.placeholder.com/150?text=C",
            "star": 4,
            "createdAt": 1693027200
        },
        {
            "name": "Dana White",
            "review": "Not what I was expecting, but still okay.",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=D",
            "star": 3,
            "createdAt": 1693113600
        },
        {
            "name": "Eve Davis",
            "review": "Fantastic experience from start to finish!",
            "images": [
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=E",
            "star": 5,
            "createdAt": 1693200000
        },
        {
            "name": "Frank Wright",
            "review": "Good value for money, but could improve on delivery speed.",
            "images": [],
            "photo": "https://via.placeholder.com/150?text=F",
            "star": 3,
            "createdAt": 1693286400
        },
        {
            "name": "Grace Lee",
            "review": "The support team was very helpful and responsive.",
            "images": [
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=G",
            "star": 4,
            "createdAt": 1693372800
        },
        {
            "name": "Henry Adams",
            "review": "An overall satisfactory experience with minor issues.",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=H",
            "star": 3,
            "createdAt": 1693459200
        },
        {
            "name": "Ivy Clark",
            "review": "Absolutely loved it! Will definitely buy again.",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ],
            "photo": "https://via.placeholder.com/150?text=I",
            "star": 5,
            "createdAt": 1693545600
        }
    ]
    const duplicatedReviews = [...reviews, ...reviews]; // Duplicate reviews for continuous effect

    return (
        <>
            <div className="relative p-6">
                <style jsx>{`
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
          `}</style>

                <div className="slider-wrapper">
                    <div className="slider">
                        {duplicatedReviews.map((review, index) => (
                            <div key={index} className="slider-item">
                                {theme === 'white' ? <White_ReviewComponent {...review} />
                                    : <Dark_ReviewComponent {...review} />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}


const Dark_ReviewComponent = ({
    name,
    review,
    images,
    photo,
    star,
    createdAt,
}: any) => {
    return (
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
                        <Image
                            className="w-full h-full object-cover rounded-full"
                            src={photo}
                            alt={name}
                            width={0}
                            height={0}
                            layout="responsive"
                        
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
                    &quot;{review}&quot;
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {images.length !== 0 ? (
                        images.map((image: string | undefined, index: React.Key | null | undefined) => (
                            <div key={index} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg border border-gray-600 shadow-lg">
                                <Image
                                    src={image ? image : ""}              // @ts-ignore
                                    alt={`Review Image ${index + 1}`}
                                    width={0}
                                    height={0}
                                    layout='responsive'
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
                                className={`w-6 h-6 md:w-8 md:h-8 ${index < star ? "text-yellow-500" : "text-gray-500"} transition-transform duration-200 hover:scale-110`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.874a1 1 0 00.95.69h4.104c.969 0 1.372 1.24.588 1.81l-3.321 2.413a1 1 0 00-.364 1.118l1.257 3.874c.3.921-.755 1.688-1.54 1.118l-3.32-2.413a1 1 0 00-1.175 0l-3.32 2.413c-.784.57-1.838-.197-1.539-1.118l1.257-3.874a1 1 0 00-.364-1.118L2.704 9.3c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.257-3.874z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

const White_ReviewComponent = ({
    name,
    review,
    images,
    photo,
    star,
    createdAt,
}: any) => {
    return (
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
                    &quot{review}&quot
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {images.length !== 0 ? (
                        images.map((image: string | undefined, index: React.Key | null | undefined) => (
                            <div key={index} className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg border border-gray-300 shadow-md">
                                <img
                                    src={image}              // @ts-ignore
                                    alt={`Review Image ${index + 1}`}
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
                                className={`w-6 h-6 md:w-8 md:h-8 ${index < star ? "text-yellow-500" : "text-gray-400"} transition-transform duration-200 hover:scale-110`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.257 3.874a1 1 0 00.95.69h4.104c.969 0 1.372 1.24.588 1.81l-3.321 2.413a1 1 0 00-.364 1.118l1.257 3.874c.3.921-.755 1.688-1.54 1.118l-3.32-2.413a1 1 0 00-1.175 0l-3.32 2.413c-.784.57-1.838-.197-1.539-1.118l1.257-3.874a1 1 0 00-.364-1.118L2.704 9.3c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.257-3.874z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};