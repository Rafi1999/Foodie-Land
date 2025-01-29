import React from 'react'

function FoodCategories() {
    return (
        <div className='mt-[80px] xl:mt-[160px] mx-2 md:mx-20'>
            <div className='flex justify-between'>
                <h1 className='text-[30px] lg:text-[40px] xl:text-[45px] font-semibold'>Categories</h1>
                <button className='text-[#000000] font-medium text-[13px] md:text-[16px] bg-[#E7FAFE] rounded-xl px-3 md:px-4 py-1'>View All Categories</button >
            </div>
            <div className='mt-20 flex flex-col gap-12 md:gap-0 md:flex-row justify-center items-center md:justify-around'>
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit'  src="/assets/breakfast.png" alt="" />
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit' src="/assets/vegan.png" alt="" />
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit' src="/assets/meat.png" alt="" />
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit' src="/assets/dessert.png" alt="" />
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit' src="/assets/lunch.png" alt="" />
                <img className='w-[235px] h-[250px] md:w-fit md:h-fit' src="/assets/chocolate.png" alt="" />
            </div>
        </div>

    )
}

export default FoodCategories