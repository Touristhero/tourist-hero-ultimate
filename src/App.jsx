import React from 'react'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import CuratedTours from './components/CuratedTours'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Package from './components/Package'
import TaxiServices from './components/TaxiServices'
import ImageGallery from './components/Gallery/ImageGallery'
const App = () => {
  return (


    <div className='' >
      {/* <Navbar/> */}
      <HeroSection/>
      <HeroSection2/>
      <CuratedTours/>
      <Package/>
      <TaxiServices/>
      <ImageGallery/>
     </div>

  )
}

export default App
