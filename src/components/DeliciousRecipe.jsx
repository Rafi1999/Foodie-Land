import React from 'react'
import superfood from "/assets/superfood.png";
import cheeseburger from "/assets/cheeseburger.png";
import healthyrice from "/assets/healthyrice.png";
import taco from "/assets/taco.png";
import soup from "/assets/soup.png";
import chickensalad from "/assets/chickensalad.png";
import wraps from "/assets/wraps.png";
import sandwich from "/assets/sandwich.png";
import { RecipeCard2 } from '../shared/RecipeCard2';

function DeliciousRecipe() {
    const deliciousRecipes = [
        {
            id: 1,
            title : 'Mixed Tropical Fruit Salad with Superfood Boosts ',
            type: 'Healthy',
            loved: true,
            image : superfood
        },
        {
            id: 2,
            title : 'Big and Juicy Wagyu Beef Cheeseburger',
            type: 'Western',
            loved: false,
            image : cheeseburger
        },
        {
            id: 3,
            title : 'Healthy Japanese Fried Rice with Asparagus',
            type: 'Healthy',
            loved: true,
            image : healthyrice
        },
        {
            id: 4,
            title : 'Cauliflower Walnut Vegetarian Taco Meat',
            type: 'Eastern',
            loved: false,
            image : taco
        },
        {
            id: 5,
            title : 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
            type: 'Healthy',
            loved: true,
            image : chickensalad
        },
        {
            id: 6,
            title : 'Barbeque Spicy Sandwiches with Chips ',
            type: 'Snack',
            loved: false,
            image : sandwich
        },
        {
            id: 7,
            title : 'Firecracker with Lettuce Wraps- Spicy',
            type: 'Seafood',
            loved: false,
            image : wraps
        },
        {
            id: 8,
            title : 'Chicken Ramen Soup with Mushroom',
            type: 'Japanese',
            loved: true,
            image : soup
        },
    ]
    return (
        <div className='mt-[160px] mx-20'>
            <div className='flex justify-between'>
                <h1 className='text-center text-[45px] font-semibold'>Try this delicious recipe <br /> to make your day</h1>
                <p className='text-[#00000099] text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='mt-20 gap-10 grid grid-cols-4'>
                {deliciousRecipes.map(recipe => (
                     <RecipeCard2 key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default DeliciousRecipe