import React from 'react'
import photo from '../../assets/images/WebsiteImages/guest-photo-20.jpg'
import { Link } from 'react-router-dom'
import AmritsarDay1Details from '../Package-Tour-Detail/AmritsarDay1Details'

const AmritsarDay1 = () => {
  return (
    <div className=' package-container  gap-10 mt-10 '>
     
         <Link to="/AmritsarDay1Details" >
             <div className='relative rounded-lg '>
                 <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                 ml-10 mt-6 text-white z-10'>AMRITSAR DAY 1</h1>
                 <ul className='absolute package-ul right-10 top-32 z-10  rounded-lg px-4 py-3' >
                     <li className=' text-2xl font-semibold text-orange-700 bg-white px-3 rounded-lg  py-2 font-SignikaNegative   ' >Most Popular</li>
                     <li className='text-white text-xl font-SignikaNegative '> Golden Temple</li>
                     <li className='text-white text-xl font-SignikaNegative '> Jallianwala Bagh</li>
                     <li className='text-white text-xl font-SignikaNegative '> Wagah Border</li>
                     <li className='text-white text-xl font-SignikaNegative '> Night Ceremony</li>
                     
                 </ul>
             <img className='w-[650px] h-[350px] object-cover rounded-lg' src={photo} alt="" />
           <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
     
            </div>
             </Link>
     
       
      
    </div>
  )
}

export default AmritsarDay1
