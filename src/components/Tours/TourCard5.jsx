import React from 'react'
import photo1 from '../../assets/images/WebsiteImages/goldenTempleNight1.jpg'
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiThumbUpFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Booking from '../Booking';
import NightCeremony from '../TourCard-Details/NightCeremony';

const TourCard5 = () => {
  return (
    <div className=''>
        <div className=' w-[310px]  '>
           <div className='  border-2 border-grey-300 shadow-lg border-1   rounded-xl'> 
              <img className='w-full h-[230px] rounded-tl-lg rounded-tr-lg' src={photo1} alt="" />
               <div className='starts flex text-orange-500 px-4 mt-4'>
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStarHalf />
               </div>
              <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Night Ceremony </h2>
      
              <div className='flex'>
               <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
              <MdDateRange />
              <h1>Evening</h1>   
              </div>
      
              <div className='flex'>
                  <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
                 <MdOutlineLocationOn />
                  <h1>2 Places</h1>
                  </div>
                </div>
      
                <div className='flex'>
                  <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
                  <RiThumbUpFill />
                  <h1>Top Rated</h1>
                  </div>
                </div>
              </div>
               
               <div className='flex'>
                  <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'><Link to='/NightCeremony'>Learn More</Link></button>
                  <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'><Link to="/Booking" >Book Now</Link></button>
              </div>
           </div>
          </div>
    </div>
  )
}

export default TourCard5
