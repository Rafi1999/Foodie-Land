import React from 'react'

function Navbar() {
    return (
        <>
        <div className='mx-20'>
            <div className='flex justify-between'>
                <a className='lobster-regular font-medium text-2xl' href="/">FoodieLand</a>
                <div className='flex space-x-[60px] text-[15px]'>
                    <a href="/">Home</a>
                    <a href="/">Recipes</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <a href="/about">About us</a>
                </div>
                <div className='flex space-x-[60px] text-[15px]'>
                    <a href="/">
                        <img src="/assets/fb.png" alt="facebook" />
                    </a>
                    <a href="/">
                        <img src="/assets/twitter.png" alt="facebook" />
                    </a><a href="/">
                        <img src="/assets/insta.png" alt="facebook" />
                    </a>
                </div>
            </div>
        </div>
        <div className='border-b-2 mt-10 text-[#0000001A]'></div>
        </>
    )
}

export default Navbar