import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 font-semibold">
          Loading
        </div>
      </div>
    </div>
  );
};

export default Loader;
