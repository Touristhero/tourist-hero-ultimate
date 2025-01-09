import React from 'react'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import CuratedTours from './components/CuratedTours'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Package from './components/Package'
import TaxiServices from './components/TaxiServices'
import ImageGallery from './components/Gallery/ImageGallery'
import Review from './components/Review/Review'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import AboutUs1 from './components/AboutUsMain/AboutUs1'
import Home from './components/Home/Home'
import Booking from './components/Booking'
import GoldenTemple from './components/TourCard-Details/GoldenTemple'
import WagahBorder from './components/TourCard-Details/WagahBorder'
import FoodTour from './components/TourCard-Details/FoodTour'
import VillageTour from './components/TourCard-Details/VillageTour'
import NightCeremony from './components/TourCard-Details/NightCeremony'
import HeritageWalk from './components/TourCard-Details/HeritageWalk'
import HireTaxiServices from './components/TaxiServices/HireTaxiServices'
import Tours from './components/CuratedTour/Tours'
import AmritsarDay1 from './components/Itenery-Details/AmritsarDay1'
import AmritsarDay1Details from './components/Package-Tour-Detail/AmritsarDay1Details'
import AmritsarDay2 from './components/Itenery-Details/AmritsarDay2'
import AmritsarDay2Details from './components/Package-Tour-Detail/AmritsarDay2Details'
import AmritsarDay3Details from './components/Package-Tour-Detail/AmritsarDay3Details'
import DharamshalDay4 from './components/Itenery-Details/DharamshalDay4'
import DharamshalaDay4Details from './components/Package-Tour-Detail/DharamshalaDay4Details'
import Gallery from './components/Gallery/Gallery'
import ContactUs from './components/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (


    <div className='' >
      <Navbar/>

      <ScrollToTop/>
      <Routes>
        
        <Route path='/' element={<Home/>} />  
        <Route path='/AboutUs' element={<AboutUs1/>} />  
        <Route path='/CuratedTours' element={<Tours/>} />  
        <Route path='/HireTaxiServices' element={<HireTaxiServices/>} />  
        <Route path='/Gallery' element={<Gallery/>} />  
        <Route path='/Review' element={<Review/>} />  
        <Route path='/ContactUs' element={<ContactUs/>} />  
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/GoldenTemple' element={<GoldenTemple/>}/>
        <Route path='/WagahBorder' element={<WagahBorder/>}/>
        <Route path='/FoodTour' element={<FoodTour/>}/>
        <Route path='/VillageTour' element={<VillageTour/>}/>
        <Route path='/NightCeremony' element={<NightCeremony/>}/>
        <Route path='/HeritageWalk' element={<HeritageWalk/>}/>
        <Route path='/AmritsarDay1Details' element={<AmritsarDay1Details/>}/>
        <Route path='/AmritsarDay2Details' element={<AmritsarDay2Details/>}/>
        <Route path='/AmritsarDay3Details' element={<AmritsarDay3Details/>}/>
        <Route path='/DharamshalaDay4Details' element={<DharamshalaDay4Details/>}/>

        
       
      </Routes>
      {/* <Home/> */}
      {/* <Booking/> */}
      {/* <GoldenTemple/> */}
      {/* <WagahBorder/> */}
      {/* <FoodTour/> */}
      {/* <VillageTour/> */}
      {/* <NightCeremony/> */}
      {/* <HeritageWalk/> */}
      {/* <AboutUs1/> */}
      {/* <HireTaxiServices/> */}
      {/* <Package/> */}
      {/* <Tours/> */}
       {/* <AmritsarDay1Details/> */}
       {/* <AmritsarDay2Details/> */}
       {/* <AmritsarDay3Details/> */}
       {/* <DharamshalaDay4Details/> */}
       {/* <Gallery/> */}
       {/* <Booking/> */}
      {/* <ContactUs/> */}
     </div>

  )
}

export default App
