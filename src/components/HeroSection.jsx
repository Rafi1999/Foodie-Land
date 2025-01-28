import React from 'react'
import { Button, Card, CardContent, Badge, Avatar } from "@mui/material";
import { AccessTime, RestaurantMenu } from "@mui/icons-material";

export default function () {
    return (
        <div className='mt-10 flex justify-between items-center'>
            <img src='/assets/side.png'></img>
            <div className=' py-12 flex justify-between'>
                <div className="px-20 bg-[url('/assets/herobg.png')] ">
                    <div>
                        <div className='flex pt-10'>
                            <img className='object-contain' src="/assets/hotrecipe.png" alt="hot recipe" />
                            <img className='relative left-[190px]' src='/assets/Badge.png' alt='badge' />
                        </div>
                        <h1 className='font-semibold text-[60px]'>Spicy delicious <br />chicken wings</h1>
                        <p className='text-[#00000099] text-[16px] w-[430px] mb-[30px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded-lg">
                                <img src="/assets/Timer.png" alt="" />
                                <span className='text-[14px] text-[#00000099]'>30 Minutes</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-200 px-3 py-1.5 rounded-lg">
                                <img src="/assets/ForkKnife.png" alt="" />
                                <span className='text-[14px] text-[#00000099]'>Chicken</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[100px] mt-[70px]">
                        <div className='flex gap-2'>
                            <img src="/assets/profile.png" alt="profile" />
                            <div>
                                <h1 className='font-semibold text-[16px]'>John Smith</h1>
                                <p className='text-[14px] text-[#00000099]'>15 March 2022</p>
                            </div>
                        </div>
                        <button className='flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-2'>
                            <span className='text-[14px]'>View Recipe</span>
                            <img src='/assets/play.png'></img>
                        </button>
                    </div>
                </div>
                <div className='grid grid-flow-col'>
                    <img src='/assets/herofood.png' alt='main food'></img>
                </div>
            </div>
            <img src='/assets/side2.png'></img>
        </div>
    )
}
