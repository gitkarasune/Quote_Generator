import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const FetchError = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        <span className='text-red-700 text-xl font-bold flex justify-center items-center mb-2'>
          <FaExclamationTriangle className='mr-2 text-2xl'/> Oops!
        </span> 
        Failed to fetch quote
      </h3>
      <p className="text-gray-600 mb-6">There was an error retrieving the quote. Make sure your connected to internet and try again.</p>
      <button
        onClick={onRetry}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
      >
        Try Again
      </button>
    </div>
  );
};

export default FetchError;
