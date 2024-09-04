"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  const handleReset = () => {
    reset();
    router.push('/');
  };

  return (
    
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-4">An unexpected error occurred.</p>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
