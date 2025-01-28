import React from 'react'

function ChefView() {
  return (
    <div className='mx-20 mt-[140px]'>
        <div className='flex justify-center gap-[46px] h-[590px]'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-[45px] font-semibold'>Everyone can be a <br />chef in their own kitchen</h1>
                <p className='text-[#00000099] text-[16px] mt-2'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br /> ad minim </p>
                <button className='text-white text-[16px]  bg-[black] rounded-2xl px-4 py-4 mt-12 w-[200px]'>Learn More</button>
            </div>
            <img src="/assets/chef.png" alt="" />
        </div>
    </div>
  )
}

export default ChefView