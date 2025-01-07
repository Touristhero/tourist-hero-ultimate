import React from 'react'
// import photo4 from '../assets/images/WebsiteImages/villagetour.jpeg'
import photo4 from '../assets/images/WebsiteImages/villagetour1.jpg'
import photo5 from '../assets/images/WebsiteImages/goldenTempleNight1.jpg'
import photo6 from '../assets/images/WebsiteImages/guestonly.jpg'
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiThumbUpFill } from "react-icons/ri";
import TourCard from './Tours/TourCard2';
import TourCard2 from './Tours/TourCard'
import TourCard3 from './Tours/TourCard3'
import TourCard4 from './Tours/TourCard4';
import TourCard5 from './Tours/TourCard5';
import TourCard6 from './Tours/TourCard6';


const CuratedTours = () => {
  return (
    <>
    <h1 className=' tour-heading tour-heading ml-20 mt-20 text-3xl text-slate-600 font-semibold font-sans'> Top-Rated Tours in Amritsar</h1>
    <div className=' main-container flex items-center justify-center ml-18'>
       <div className='  card-container grid grid-cols-3 gap-14 mt-10'>
       <TourCard2/>
        <TourCard/>
        <TourCard3/>
         
       </div>
       </div>
       <div className=' main-container flex items-center justify-center ml-18 '>
       <div className='  card-container grid grid-cols-3 gap-14 mt-14'>
       <TourCard4/>
        <TourCard5/>
        <TourCard6/>
         
       </div>
       </div>
   
    </>
  )
}

export default CuratedTours
