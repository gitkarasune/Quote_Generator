import React from "react";

const Button = ({ fetchQuote, error, isLoading }) => {
  return (
    <button
      onClick={fetchQuote}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[20px] transition duration-300 ease-in-out transform hover:scale-105"
    >
      { isLoading ? (
        ('Generating...')
      ) : error ? (
        ('Generate')
      ) : (
        ('Generate Quote')
      )}
      
    </button>
  );
};

export default Button;
