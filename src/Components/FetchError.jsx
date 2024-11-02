import React from 'react';

const FetchError = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Oops! Failed to fetch quote</h3>
      <p className="text-gray-600 mb-4">There was an error retrieving the quote. Please try again.</p>
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
