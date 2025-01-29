import React from 'react'
import { Button, Card, CardContent, Badge, Avatar } from "@mui/material";
import { AccessTime, RestaurantMenu } from "@mui/icons-material";

export default function () {
    return (
        <div className='mt-[20px] md:mt-10 flex justify-between items-center'>
            <img className='hidden xl:inline' src='/assets/side.png'></img>
            <div className=' xl:py-12 flex flex-col-reverse md:flex-row justify-between items-center sm:gap-2 md:gap-0'>
                <div className="h-auto md:h-[420px] xl:h-auto md:px-20 bg-[url('/assets/herobg.png')]">
                    <div>
                        <div className='flex justify-between  pt-4 xl:pt-10'>
                            <img className='h-auto object-contain' src="/assets/hotrecipe.png" alt="hot recipe" />
                            <img className='h-17 md:h-24  mr-1 xl:h-auto md:relative md:left-[150px]' src='/assets/Badge.png' alt='badge' />
                        </div>
                        <h1 className='text-center font-semibold text-[30px] lg:text-[35px] xl:text-[60px]'>Spicy delicious <span className="hidden lg:inline"> <br /> </span>chicken wings</h1>
                        <p className='text-center text-[#00000099] text-[12px] xl:text-[16px] md:w-[430px] mb-5 xl:mb-[30px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <div className="flex items-center justify-center gap-10 md:gap-0 md:space-x-4">
                            <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-lg">
                                <img src="/assets/Timer.png" alt="" />
                                <span className='text-[14px] text-[#00000099]'>30 Minutes</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-lg">
                                <img src="/assets/ForkKnife.png" alt="" />
                                <span className='text-[14px] text-[#00000099]'>Chicken</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-normal items-center gap-[100px] mt-8 xl:mt-[70px]">
                        <div className='flex gap-2 items-center'>
                            <img className='w-12 h-12 md:w-auto md:h-auto' src="/assets/profile.png" alt="profile" />
                            <div>
                                <h1 className='font-semibold text-[14px] md:text-[16px]'>John Smith</h1>
                                <p className='text-[12px] w-full md:text-[14px] text-[#00000099]'>15 March 2022</p>
                            </div>
                        </div>
                        <button className='flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-2'>
                            <span className='text-[12px] md:text-[14px]'>View Recipe</span>
                            <img src='/assets/play.png'></img>
                        </button>
                    </div>
                </div>
                <div className=' grid grid-flow-col'>
                    <img className='sm:w-screen xl:w-[100%] h-[420px] xl:h-auto' src='/assets/herofood.png' alt='main food'></img>
                </div>
            </div>
            <img  className='hidden xl:inline' src='/assets/side2.png'></img>
        </div>
    )
}
