import React from 'react';
import forkKinfe from '/assets/ForkKnife.png';
import timer from '/assets/Timer.png';
export const RecipeCard2 = ({ recipe }) => {
    const { title, type, loved, image } = recipe;


    return (
        <div className="relative w-[290px] h-[315px] mb-8">
            <div className="overflow-hidden rounded-[30px_0_0_0]">
                <div
                    className="absolute inset-0 z-0 rounded-3xl"

                />

                <div className="relative z-10">
                    {/* Image Container with Heart Icon */}
                    <div className="relative">
                        {/* Heart Icon */}
                        <div className="absolute top-7 right-3 z-20">
                            <div className="bg-white p-2 rounded-full">
                                {loved ? (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="#FF5C5C"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                ) : (
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        stroke="#000000"
                                        strokeWidth="2"
                                    >
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                )}
                            </div>
                        </div>

                        <div className="w-full rounded-t-[30px] overflow-hidden bg-transparent">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-[250px] object-contain"
                            />
                        </div>
                    </div>

                    <div className=" font-medium">
                        <h3 className=" text-[18px] font-semibold mb-4 text-black">
                            {title}
                        </h3>

                        <div className="flex items-center gap-6 text-gray-600">
                            <div className="flex items-center gap-2">
                                <img src={timer} alt="" />
                                <span>30 Minutes</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <img src={forkKinfe} alt="" />
                                <span>{type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};