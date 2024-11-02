import React, { useEffect, useState } from "react";
import HeaderPulse from "./HeaderPulse";

const HeaderQuote = ({ fetchQuote }) => {

  const [ skicky, setSkicky ] = useState(false);

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSkicky(true) : setSkicky(false);
    })
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-100 bg-opacity-90  z-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
          <HeaderPulse/>
        </h1>
        <button
          onClick={fetchQuote}
          className={`bg-blue-400 text-white font-bold py-3 px-6 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 ${skicky? 'customBlockBtn' : '' } `}
        >
          Create New
        </button>
      </div>
    </header>
  );
};

export default HeaderQuote;
