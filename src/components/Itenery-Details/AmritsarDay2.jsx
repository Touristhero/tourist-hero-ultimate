import React from 'react'
import photo2 from '../../assets/images/WebsiteImages/guestcrowd.jpg'
import { Link } from 'react-router-dom'
import AmritsarDay2Details from '../Package-Tour-Detail/AmritsarDay2Details'


const AmritsarDay2 = () => {
  return (
    <div className='package-container flex gap-10 mt-10 justify-center   '>
           <Link to='/AmritsarDay2Details' >
            <div className='relative'>
            <div className='absolute z-10 '>
            <h1 className='package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                  ml-10 mt-6 text-white '>AMRITSAR DAY 2</h1>
            </div>
                <ul className='absolute right-10 top-48 z-10  rounded-lg px-4 py-3' >
                    
                      <li className='text-white text-xl font-SignikaNegative '> Durgiana Temple</li>
                      <li className='text-white text-xl font-SignikaNegative '>  Ram Tirath</li>
                      <li className='text-white text-xl font-SignikaNegative '> Partition Museum</li>
                      <li className='text-white text-xl font-SignikaNegative '> Gobindgarh Fort</li>
                      
                  </ul>
            <img className='w-[40rem] h-[350px] opacity-90 object-cover rounded-lg bg-slate-400 ' src={photo2} alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
            </div>
            </Link>
      
    </div>
  )
}

export default AmritsarDay2
