import React from 'react'
import photo1 from '../assets/images/WebsiteImages/wagah-border2.jpg'
import photo2 from '../assets/images/WebsiteImages/guestcrowd.jpg'
import photo3 from '../assets/images/WebsiteImages/FoodTour.jpg'
// import photo4 from '../assets/images/WebsiteImages/villagetour.jpeg'
import photo4 from '../assets/images/WebsiteImages/villagetour.jpeg'
import photo5 from '../assets/images/WebsiteImages/night-goldentemple.jpg'
import photo6 from '../assets/images/WebsiteImages/guestonly.jpg'
import { MdDateRange } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiThumbUpFill } from "react-icons/ri";
import TourCard from './TourCard';

const CuratedTours = () => {
  return (
    <>
    <h1 className='ml-14 mt-10 text-4xl font-semibold text-slate-800'> Top-Rated Tours in Amritsar</h1>

     <div className='container1 flex items-center justify-center  '>
        
    <div className=' px-10 py-10'>
     <div className='w-[320px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className='w-full rounded-tl-lg rounded-tr-lg' src={photo2} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Amritsar's Full Day Tour</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
        </div>

        <div className='flex'>
            <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
           <MdOutlineLocationOn />
            <h1>3 Places</h1>
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>
     
    <div className=' px-5 py-10'>
     <div className='w-[320px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className='w-full rounded-tl-lg rounded-tr-lg' src={photo1} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalf />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Wagah Border</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>


    <div className=' px-10 py-10'>
     <div className='w-[320px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className='w-full rounded-tl-lg rounded-tr-lg' src={photo3} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalf />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Food Tour</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
        </div>

        <div className='flex'>
            <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
           <MdOutlineLocationOn />
            <h1>10 Places</h1>
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>
    </div>

    <div className='container1 flex items-center justify-center  '>
        
    <div className=' px-10 py-10'>
     <div className='w-[320px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className='w-full rounded-tl-lg rounded-tr-lg' src={photo4} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Village Tour</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
        </div>

        <div className='flex'>
            <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
           <MdOutlineLocationOn />
            <h1>3 Places</h1>
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>
     
    <div className=' px-5 py-10'>
     <div className='w-[300px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className='w-full rounded-tl-lg rounded-tr-lg' src={photo5} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalf />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Night Ceremony</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>


    <div className=' px-10 py-10'>
     <div className='w-[320px]  border-2 border-grey-300 shadow-lg border-1 flex-col rounded-xl'> 
        <img className=' rounded-tl-lg rounded-tr-lg' src={photo6} alt="" />
         <div className='starts flex text-orange-500 px-4 mt-4'>
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStarHalf />
         </div>
        <h2 className='text-[18px]  px-4 mt-2    font-semibold '>Heritage Walk</h2>

        <div className='flex'>
         <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>   
        <MdDateRange />
        <h1>Half Day</h1>   
        </div>

        <div className='flex'>
            <div className='flex items-center gap-1 text-[15px] ml-4 mt-4'>
           <MdOutlineLocationOn />
            <h1>10 Places</h1>
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
            <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2  bg-[#e38e3d] text-white'>Learn More</button>
        <button className='mt-10 mb-2 ml-6 rounded-3xl px-4 py-2 bg-[#e38e3d] text-white'>Book Now </button>
        </div>
     </div>
    </div>
    </div>
    </>
  )
}

export default CuratedTours
