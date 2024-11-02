import React from 'react';

const Loader = () => {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className="w-24 h-24 animate-bounce">
        <div className="grid place-content-center">
          <div className='bg-red-300 w-14 h-14 rounded-full grid place-content-center '>
            <div className='bg-blue-200 w-8 h-8 rounded-full grid place-content-center animate-bounce'>
              <div className='bg-white h-2 w-2 rounded-full grid place-content-center'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
