import React from 'react'
import photo from '../assets/images/WebsiteImages/guest-photo-20.jpg'
import photo2 from '../assets/images/WebsiteImages/guestcrowd.jpg'
import photo3 from '../assets/images/WebsiteImages/Tractor-with-on-it.jpg'
import photo4 from '../assets/images/WebsiteImages/Dharamshala-India.jpg'
import AmritsarDay1 from './Itenery-Details/AmritsarDay1'
import AmritsarDay2 from './Itenery-Details/AmritsarDay2'
import AmritsarDay3 from './Itenery-Details/AmritsarDay3'
import DharamshalDay4 from './Itenery-Details/DharamshalDay4'
import { Link } from 'react-router-dom'
import AmritsarDay1Details from './Package-Tour-Detail/AmritsarDay1Details'
import AmritsarDay2Details from './Package-Tour-Detail/AmritsarDay2Details'
import AmritsarDay3Details from './Package-Tour-Detail/AmritsarDay3Details'
import DharamshalaDay4Details from './Package-Tour-Detail/DharamshalaDay4Details'



const Package = () => {
  return (
    <div className=' package p-10'>
      <h1 className='tour-heading  ml-[3.5rem] mt-20 text-3xl  text-slate-600 font-semibold font-sans'>Private Tour Package</h1>
      <div className=' package-container flex gap-10 mt-10 justify-center'>
        <Link to="/AmritsarDay1Details" >
        <div className='relative rounded-lg '>
            <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
            ml-10 mt-6 text-white z-10'>AMRITSAR DAY 1</h1>
            <ul className='absolute package-ul right-10 top-32 z-10  rounded-lg px-4 py-3' >
                <li className=' text-2xl font-semibold text-orange-700 bg-white px-3 rounded-lg  py-2 font-SignikaNegative mr-  ' >Most Popular</li>
                <li className='text-white text-xl font-SignikaNegative '> Golden Temple</li>
                <li className='text-white text-xl font-SignikaNegative '> Jallianwala Bagh</li>
                <li className='text-white text-xl font-SignikaNegative '> Wagah Border</li>
                <li className='text-white text-xl font-SignikaNegative '> Night Ceremony</li>
                
            </ul>
        <img className='w-[650px] h-[350px] object-cover rounded-lg' src={photo} alt="" />
      <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

       </div>
        </Link>


      <Link to="/AmritsarDay2Details">
      <div className='relative'>
      <div className='absolute z-10 '>
      <h1 className='package-day-head p-5 text-7xl font-SignikaNegative font-semibold
            ml-10 mt-6 text-white '>AMRITSAR DAY 2</h1>
      </div>
          <ul className='absolute right-10 top-40 z-10  rounded-lg px-4 py-3' >
                <li className='text-white text-xl font-SignikaNegative '> Durgiana Temple</li>
                <li className='text-white text-xl font-SignikaNegative '>  Ram Tirath</li>
                <li className='text-white text-xl font-SignikaNegative '> Partition Museum</li>
                <li className='text-white text-xl font-SignikaNegative '> Gobindgarh Fort</li>
                
            </ul>
      <img className='w-[40rem] h-[350px] opacity-90 object-cover rounded-lg bg-slate-400 ' src={photo2} alt="" />
      <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      </div>
      </Link>


      </div>


      <div className='flex package-container  gap-10 mt-10 justify-center'>
       <Link to="/AmritsarDay3Details"> <div className='relative rounded-lg'>
            <h1 className='absolute p-5 package-day-head text-7xl font-SignikaNegative font-semibold
            ml-10 mt-6 text-white z-10'>AMRITSAR DAY 3</h1>
            <ul className='absolute right-10 top-40 z-10  rounded-lg px-4 py-3' >
                <li className='text-white text-xl font-SignikaNegative '> Local Village Tour</li>
                <li className='text-white text-xl font-SignikaNegative '> Amritsar Food Tour</li>
                <li className='text-white text-xl font-SignikaNegative '> Heritage Walk</li>
               
                
            </ul>
        <img className='w-[650px] h-[350px] object-cover rounded-lg' src={photo3} alt="" />
      <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

       </div></Link>
     
     <Link to="/DharamshalaDay4Details">
     <div className='relative '>
      <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
            ml-10 mt-6 text-white z-10 '> DHARAM SHALA DAY 4</h1>
          <ul className='absolute right-8 top-40 z-10  rounded-lg px-4 py-3' >
                <li className='text-white text-xl font-SignikaNegative '> Dalai Lama Temple</li>
                <li className='text-white text-xl font-SignikaNegative '> Church of St. John</li>
                <li className='text-white text-xl font-SignikaNegative '> Naddi View Point</li>
                <li className='text-white text-xl font-SignikaNegative '> Bhagsu Nag Waterfall</li>
                
            </ul>
      <img className='w-[650px] h-[350px] opacity-90 object-cover rounded-lg bg-slate-400 ' src={photo4} alt="" />
      <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      </div>

     </Link>

   

      </div>
      
    </div>
  )
}

export default Package
