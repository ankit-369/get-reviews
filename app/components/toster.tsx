export const ToastSuccess = ({ message, onClose }:any) => (
    <div id="toast-success" className="fixed top-8 left-1/2 transform -translate-x-1/2 flex items-center w-full max-w-md p-6 text-gray-700 bg-white rounded-xl shadow-lg dark:text-gray-300 dark:bg-gray-800 transition-all duration-300 ease-in-out" role="alert">
    <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 text-green-500 bg-green-100 rounded-full dark:bg-green-800 dark:text-green-200 mr-4">
        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
        <span className="sr-only">Success icon</span>
    </div>
    <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">Success</h3>
        <div className="text-base">{message}</div>
    </div>
    <button type="button" className="ml-4 bg-transparent text-gray-400 hover:text-gray-900 rounded-lg p-1.5 inline-flex items-center justify-center h-10 w-10 dark:text-gray-500 dark:hover:text-white transition-colors duration-200" onClick={onClose} aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
</div>
);