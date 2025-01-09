import React from 'react'
import photo4 from '../../assets/images/WebsiteImages/Dharamshala-India.jpg'
import { Link } from 'react-router-dom'
import DharamshalaDay4Details from '../Package-Tour-Detail/DharamshalaDay4Details'

const DharamshalDay4 = () => {
  return (
    <div className='package-container flex gap-10 mt-10 justify-center'>
          
           <Link to='/DharamshalaDay4Details'>
           <div className='relative '>
            <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                  ml-10 mt-6 text-white z-10 '> DHARAM SHALA DAY 4</h1>
                <ul className='absolute right-8 top-48 z-10  rounded-lg px-4 py-3' >
                      <li className='text-white text-xl font-SignikaNegative '> Dalai Lama Temple</li>
                      <li className='text-white text-xl font-SignikaNegative '> Church of St. John</li>
                      <li className='text-white text-xl font-SignikaNegative '> Naddi View Point</li>
                      <li className='text-white text-xl font-SignikaNegative '> Bhagsu Nag Waterfall</li>
                      
                  </ul>
            <img className='w-[650px] h-[350px] opacity-90 object-cover rounded-lg bg-slate-400 ' src={photo4} alt="" />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
            </div>
      
           </Link>
      
    </div>
  )
}

export default DharamshalDay4
