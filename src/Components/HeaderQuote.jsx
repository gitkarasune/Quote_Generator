import React from "react";

const HeaderQuote = ({ fetchQuote }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-lg z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
          QuoteGenius
        </h1>
        <button
          onClick={fetchQuote}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
        >
          Inspire Me!
        </button>
      </div>
    </header>
  );
};

export default HeaderQuote;
