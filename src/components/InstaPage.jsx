import React from 'react'
import post1 from "/assets/post1.png";
import post2 from "/assets/post2.png";
import post3 from "/assets/post3.png";
import post4 from "/assets/post4.png";

function InstaPage() {
    const instaposts = [
        {
            id: 1,
            image: post1
        },
        {
            id: 2,
            image: post2
        },
        {
            id: 3,
            image: post3
        },
        {
            id: 4,
            image: post4
        },
    ]
    
    return (
        <div className='mt-[70px] md:mt-24 xl:mt-[160px] pb-8' style={{
            background: 'linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)'
          }}>
            <h1 className='text-center md:text-[45px] text-[27px] font-semibold'>Check out @foodieland on Instagram</h1>
            <p className='text-[#00000099] text-center md:text-[16px] text-[12px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
            <div className='mt-20 grid gap-3 justify-center md:justify-normal md:grid-cols-4 mx-20'>
                {instaposts.map(recipe => (
                    <div key={recipe.id}>
                        <img src={recipe.image} alt="" />
                    </div>
                ))}
            </div>
            <div className='flex justify-center md:mt-12 mt-8'>
                <button className='flex items-center gap-2 text-white text-[14px] md:text-[16px] bg-[black] rounded-lg md:rounded-2xl px-4 py-3 md:px-7 md:py-5 justify-center'>
                    <span>Visit Our Instagram</span>
                    <img src="/assets/instawhite.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default InstaPage