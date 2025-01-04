import React from 'react'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import CuratedTours from './components/CuratedTours'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (


    <div className='' >
      <HeroSection/>
      <HeroSection2/>
      <CuratedTours/>
     </div>

  )
}

export default App
