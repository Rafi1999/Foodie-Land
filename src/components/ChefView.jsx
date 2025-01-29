import React from 'react';

function ChefView() {
  return (
    <div className='mx-5 md:mx-10 lg:mx-20 mt-[80px] md:mt-16 xl:mt-[80px]'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[46px] h-auto md:h-[590px]'>
        <div className='flex flex-col justify-center text-center md:text-left'>
          <h1 className='text-[28px] md:text-[30px] lg:text-[35px] xl:text[45px] font-semibold'>
            Everyone can be a <br className='hidden xl:block' />chef in their own kitchen
          </h1>
          <p className='text-[#00000099] text-[13px] md:text-[13px] lg:text-[14px] xl:text[16px] mt-2'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br className='hidden md:block' />
            eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br className='hidden md:block' />
            ad minim
          </p>
          <button className='text-white text-[14px] md:text-[15px] lg:text-[16px] bg-black rounded-2xl px-4 py-3 md:py-4 mt-8 md:mt-12 w-[180px] md:w-[180px] lg:w-[200px] mx-auto md:mx-0'>
            Learn More
          </button>
        </div>
        <img src="/assets/chef.png" alt="Chef" className='w-auto lg:w-[50%] xl:w-auto' />
      </div>
    </div>
  )
}

export default ChefView;
