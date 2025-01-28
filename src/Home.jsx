import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FoodCategories from './components/FoodCategories'
import SimpleRecipe from './components/SimpleRecipe'
import ChefView from './components/ChefView'
import InstaPage from './components/InstaPage'

function Home() {
  return (
    <div className='my-10'>
        <Navbar />
        <HeroSection />
        <FoodCategories />
        <SimpleRecipe />
        <ChefView />
        <InstaPage />
    </div>
  )
}

export default Home