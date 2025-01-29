import React from 'react';
import Facebook from "/assets/fb.png";
import Twitter from "/assets/twitter.png";
import Instagram from "/assets/insta.png";

const Footer = () => {
    return (
        <footer className=" sm:px-7 lg:px-20 mt-20 lg:mt-[160px]">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row pb-8 border-b-2 border-gray-200 gap-8 md:justify-between md:items-center">
                    {/* Logo and text */}
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-2xl font-bold italic">Foodieland.</h2>
                        <p className="text-gray-500 md:text[12px] xl:text-[16px] lg:max-w-[300px] whitespace-nowrap md:whitespace-normal">
                            Lorem ipsum dolor sit amet, consectetuipisicing.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:space-x-8 text-[16px]">
                        <a href="/recipes" className="hover:text-gray-900">Recipes</a>
                        <a href="/blog" className="hover:text-gray-900">Blog</a>
                        <a href="/contact" className="hover:text-gray-900">Contact</a>
                        <a href="/about" className="hover:text-gray-900">About us</a>
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center py-6 md:py-10">
                    {/* Copyright */}
                    <div className="md:w-[100%] mt-6 md:mt-0 text-center  text-gray-500 text-[16px] md:text-[18px]">
                        © 2024 <span className="text-[#FF7967] abeezee-regular">SpaceZee</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <img src={Twitter} alt="Twitter" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;