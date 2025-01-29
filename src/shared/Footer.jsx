import React from 'react';
import Facebook from "/assets/fb.png";
import Twitter from "/assets/twitter.png";
import Instagram from "/assets/insta.png";
const Footer = () => {
    return (
        <footer className="mx-20  mt-[160px] ">
            <div className="container mx-auto px-4">
                <div className="flex pb-8 border-b-2 border-gray-200 justify-between gap-8 items-center">
                    {/* Logo and text */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold italic">Foodieland.</h2>
                        <p className="text-gray-500 text-[16px]">
                            Lorem ipsum dolor sit amet, consectetuipisicing elit.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex justify-center space-x-8 text-[16px]">
                        <a href="/recipes" className=" hover:text-gray-900">Recipes</a>
                        <a href="/blog" className=" hover:text-gray-900">Blog</a>
                        <a href="/contact" className=" hover:text-gray-900">Contact</a>
                        <a href="/about" className=" hover:text-gray-900">About us</a>
                    </nav>


                </div>

                {/* Copyright */}
            <div className='flex justify-between'>
            <div className="w-[100%] mt-10 text-center text-gray-500 text-[18px]">
                    © 2024 <span className="text-[#FF7967] abeezee-regular">SpaceZee</span>
                </div>
                {/* Social Icons */}
                <div className="mt-10 flex justify-end space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <img src={Facebook} alt="" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;