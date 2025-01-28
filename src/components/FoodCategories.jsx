import React from 'react'

function FoodCategories() {
    return (
        <div className='mt-[160px] mx-20'>
            <div className='flex justify-between'>
                <h1 className='text-[45px] font-semibold'>Categories</h1>
                <button className='text-[#000000] text-[16px] bg-[#E7FAFE] rounded-xl px-4 py-1'>View All Categories</button >
            </div>
            <div className='mt-20 flex justify-around'>
                <img src="/assets/breakfast.png" alt="" />
                <img src="/assets/vegan.png" alt="" />
                <img src="/assets/meat.png" alt="" />
                <img src="/assets/dessert.png" alt="" />
                <img src="/assets/lunch.png" alt="" />
                <img src="/assets/chocolate.png" alt="" />
            </div>
        </div>

    )
}

export default FoodCategories