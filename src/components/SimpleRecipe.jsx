import React from 'react'
import burger from "/assets/burger.png";
import salmon from "/assets/salmon.png";
import pancake from "/assets/pancake.png";
import salad from "/assets/salad.png";
import meatball from "/assets/meatball.png";
import ads from "/assets/Ads.png";
import pancakefruity from "/assets/pancakefruity.png";
import ricechicken from "/assets/ricechicken.png";
import pasta from "/assets/pasta.png";
import { RecipeCard1 } from '../shared/RecipeCard1';
function SimpleRecipe() {
    const simpleRecipes = [
        {
            id: 1,
            title: 'Big and Juicy Wagyu Burger',
            type: 'Snack',
            loved: true,
            image: burger
        },
        {
            id: 2,
            title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
            type: 'Fish',
            loved: false,
            image: salmon
        },
        {
            id: 3,
            title: 'Strawberry Oatmeal Pancake with Honey Syrup',
            type: 'Breakfast',
            loved: false,
            image: pancake
        },
        {
            id: 4,
            title: 'Fresh and Healthy Mixed Mayonnaise Salad',
            type: 'Healthy',
            loved: true,
            image: salad
        },
        {
            id: 5,
            title: 'Chicken Meatballs with Cream Cheese',
            type: 'Meat',
            loved: false,
            image: meatball
        },
        {
            id: 6,
            image: ads
        },
        {
            id: 7,
            title: 'Fruity Pancake with Orange and Blueberry',
            type: 'Sweet',
            loved: true,
            image: pancakefruity
        },
        {
            id: 8,
            title: 'The Best Easy One Pot Chicken and Rice',
            type: 'Snack',
            loved: false,
            image: ricechicken
        },
        {
            id: 9,
            title: 'The Creamiest Creamy Chicken and Bacon Pasta',
            type: 'Noodles',
            loved: false,
            image: pasta
        },
    ]
    return (
        <div className='mt-[160px]'>
            <h1 className='text-center text-[45px] font-semibold'>Simple and tasty recipes</h1>
            <p className='text-[#00000099] text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </p>
            <div className='mt-20 grid grid-cols-3 mx-20'>
                {simpleRecipes.map(recipe => (
                     <RecipeCard1 key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}

export default SimpleRecipe