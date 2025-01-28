import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FoodCategories from './components/FoodCategories'
import SimpleRecipe from './components/SimpleRecipe'
import ChefView from './components/ChefView'

function Home() {
  return (
    <div className='my-10'>
        <Navbar />
        <HeroSection />
        <FoodCategories />
        <SimpleRecipe />
        <ChefView />
    </div>
  )
}

export default Home