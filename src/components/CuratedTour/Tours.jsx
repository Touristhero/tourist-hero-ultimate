import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import Package from '../Package'
import CuratedTours from '../CuratedTours'
import ImageGallery from '../Gallery/ImageGallery'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'

const Tours = () => {
  return (
    <div>
        
           <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Curated Tour </h1>
          <Package/>
          <CuratedTours/>
          <ImageGallery/>
          <Review/>
          <AboutUs/>
          <Footer/>
    </div>
  )
}

export default Tours
