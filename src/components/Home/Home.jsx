import React from 'react'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import HeroSection2 from '../HeroSection2'
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import TaxiServices from '../TaxiServices'
import ImageGallery from '../Gallery/ImageGallery'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HeroSection2/>
      <CuratedTours/>
      <Package/>
      <TaxiServices/>
      <ImageGallery/>
      <Review/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home
