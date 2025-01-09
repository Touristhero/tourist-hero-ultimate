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
import GuestReview from '../Review/GuestReview'

const Home = () => {
  return (
    <div>
   
      <HeroSection/>
      <HeroSection2/>
      <CuratedTours/>
      <Package/>
      <TaxiServices/>
      <ImageGallery/>
      <GuestReview/>
      <AboutUs/>
      <Footer/>
      
    </div>
  )
}

export default Home
