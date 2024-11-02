import React from 'react'

const HeaderPulse = () => {
  return (
    <div className='bg-blue-500 rounded-full h-14 w-14 grid place-content-center animate-ping'>
        <div className='bg-teal-400 w-7 h-7 grid place-content-center rounded-full '>
            <div className='bg-blue-500 w-3 h-3 grid place-content-center rounded-full animate-pulse '></div>
        </div>
    </div>
  )
}

export default HeaderPulse