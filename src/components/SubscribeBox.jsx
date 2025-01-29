import React from 'react'
import leftSalad from '/assets/vegcut.png'  // Image 3
import rightSalad from '/assets/ricebowl.png' // Image 2

function Subscribebox() {
  return (
    <div className='mx-20 mt-[160px] bg-[#E7F9FD] rounded-[50px] h-[442px] relative overflow-hidden'>
      {/* Left salad image */}
      <div className='absolute left-0 bottom-0'>
        <img src={leftSalad} alt="salad ingredients" className='w-[300px] object-contain' />
      </div>

      {/* Right salad image */}
      <div className='absolute right-0 bottom-0'>
        <img src={rightSalad} alt="salad bowl" className='w-[400px] object-contain' />
      </div>

      {/* Content container */}
      <div className='flex flex-col items-center pt-[64px] px-4 relative z-10'>
        <h1 className='text-[45px] font-semibold text-center mb-6'>
          Deliciousness to your inbox
        </h1>
        <p className='text-[16px] text-[#00000099] text-center max-w-[700px] mb-12'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqut enim ad minim
        </p>

        {/* Subscribe form with a white box around the button */}
        <div className='flex gap-4 w-full max-w-[480px] bg-white rounded-xl p-2'>
          <input 
            type="email" 
            placeholder="Your email address..." 
            className='flex-1 px-6 py-4 rounded-xl text-[16px] outline-none'
          />
          <button className='bg-black text-white px-8 py-4 rounded-xl text-[16px]'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribebox
