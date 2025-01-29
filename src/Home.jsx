import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './components/HeroSection'
import FoodCategories from './components/FoodCategories'
import SimpleRecipe from './components/SimpleRecipe'
import ChefView from './components/ChefView'
import InstaPage from './components/InstaPage'
import DeliciousRecipe from './components/DeliciousRecipe'
import Subscribebox from './components/SubscribeBox'
import Footer from './shared/Footer'

function Home() {
  return (
    <div className='my-10'>
        <Navbar />
        <HeroSection />
        <FoodCategories />
        <SimpleRecipe />
        <ChefView />
        <InstaPage />
        <DeliciousRecipe />
        <Subscribebox />
        <Footer />
    </div>
  )
}

export default Home