import React from 'react'
import photo3 from '../../assets/images/WebsiteImages/Tractor-with-on-it.jpg'

const AmritsarDay3 = () => {
  return (
    <div className='package-container flex gap-10 mt-10 justify-center'>
       <a href=""> <div className='relative rounded-lg'>
                  <h1 className='absolute p-5 package-day-head text-7xl font-SignikaNegative font-semibold
                  ml-10 mt-6 text-white z-10'>AMRITSAR DAY 3</h1>
                  <ul className='absolute right-10 top-40 z-10  rounded-lg px-4 py-3' >
                      <li className='text-white text-xl font-SignikaNegative '> Local Village Tour</li>
                      <li className='text-white text-xl font-SignikaNegative '> Amritsar Food Tour</li>
                      <li className='text-white text-xl font-SignikaNegative '> Heritage Walk</li>
                     
                      
                  </ul>
              <img className='w-[650px] h-[350px] object-cover rounded-lg' src={photo3} alt="" />
            <div class="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      
             </div></a>
    </div>
  )
}

export default AmritsarDay3
