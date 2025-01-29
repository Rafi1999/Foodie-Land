import React, { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className='px-4 md:px-8 lg:px-20'>
                <div className='relative flex justify-between items-center py-4'>
                    {/* Logo */}
                    <a className='lobster-regular font-medium text-2xl' href="/">FoodieLand</a>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden z-20'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex space-x-[60px] text-[15px]'>
                        <a href="/">Home</a>
                        <a href="/">Recipes</a>
                        <a href="/">Blog</a>
                        <a href="/">Contact</a>
                        <a href="/about">About us</a>
                    </div>

                    {/* Desktop Social Icons */}
                    <div className='hidden lg:flex space-x-[60px] text-[15px]'>
                        <a href="/">
                            <img src="/assets/fb.png" alt="facebook" />
                        </a>
                        <a href="/">
                            <img src="/assets/twitter.png" alt="twitter" />
                        </a>
                        <a href="/">
                            <img src="/assets/insta.png" alt="instagram" />
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden fixed inset-0 bg-white z-10 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className='flex flex-col h-full pt-20'>  {/* Changed from justify-center to pt-20 */}
                            {/* Mobile Navigation Links */}
                            <div className='flex flex-col items-center space-y-6 text-lg'>
                                <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                                <a href="/" onClick={() => setIsMenuOpen(false)}>Recipes</a>
                                <a href="/" onClick={() => setIsMenuOpen(false)}>Blog</a>
                                <a href="/" onClick={() => setIsMenuOpen(false)}>Contact</a>
                                <a href="/about" onClick={() => setIsMenuOpen(false)}>About us</a>
                            </div>

                            {/* Mobile Social Icons */}
                            <div className='flex justify-center space-x-8 mt-8'>
                                <a href="/">
                                    <img src="/assets/fb.png" alt="facebook" />
                                </a>
                                <a href="/">
                                    <img src="/assets/twitter.png" alt="twitter" />
                                </a>
                                <a href="/">
                                    <img src="/assets/insta.png" alt="instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-2 mt-5 text-[#0000001A]'></div>
        </>
    );
}

export default Navbar;