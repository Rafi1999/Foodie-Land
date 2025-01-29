import React from 'react';
import leftSalad from '/assets/vegcut.png';  // Image 3
import rightSalad from '/assets/ricebowl.png'; // Image 2

function Subscribebox() {
  return (
    <div className='mx-0 sm:mx-6 md:mx-20 mt-10 md:mt-[160px] bg-[#E7F9FD] rounded-[50px] h-auto md:h-[442px] relative overflow-hidden p-6 md:p-0'>

      {/* Left salad image (hidden on extra small screens) */}
      <div className='absolute left-0 bottom-0 hidden sm:block'>
        <img src={leftSalad} alt="salad ingredients" className='w-[180px] sm:w-[250px] md:w-[300px] object-contain' />
      </div>

      {/* Right salad image (hidden on extra small screens) */}
      <div className='absolute right-0 bottom-0 hidden sm:block'>
        <img src={rightSalad} alt="salad bowl" className='w-[220px] sm:w-[300px] md:w-[400px] object-contain' />
      </div>

      {/* Content container */}
      <div className='flex flex-col items-center pt-6 sm:pt-[64px] px-4 relative z-10'>
        <h1 className='text-[25px] sm:text-[30px] md:text-[37px] xl:text-[45px] font-semibold text-center mb-4 sm:mb-6'>
          Deliciousness to your inbox
        </h1>
        <p className='text-[12px]  sm:text-[16px] text-gray-700 md:text-[#00000099] text-center md:max-w-[700px] mb-8 sm:mb-12'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqut enim ad minim.
        </p>

        {/* Subscribe form */}
        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-[480px] bg-white rounded-xl p-2'>
          <input 
            type="email" 
            placeholder="Your email address..." 
            className='flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-[14px] sm:text-[16px] outline-none'
          />
          <button className='bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[14px] sm:text-[16px]'>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribebox;
