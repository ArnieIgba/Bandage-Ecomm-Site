import React from 'react'
import BestServ from '../Components/BestServ/BestServ'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import Feature from '../Components/Feature/Feature'
import FeatAd from '../Components/FeatAd/FeatAd'
import Response from '../Components/Response/Response'
import Resolution from '../Components/Resolution/Resolution'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <Feature />
        <BestServ />
        <FeatAd />
        <Response />
        <Resolution />
        <Footer />

    </div>
  )
}

export default Home