import React from 'react'
import photo1 from '../assets/images/WebsiteImages/aman-pickup.jpg'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs/ContactUs'

const TaxiServices = () => {
  return (
    <div>
      <h1 className='tour-heading  ml-[5.3rem] mt-24 text-3xl  text-slate-700 font-semibold font-sans'>Taxi Services</h1>

      <div className='p-14 taxi-container flex items-center justify-center  '>
        <img className='w-[35%]  rounded-lg' src={photo1} alt="" />
        <div className='flex flex-col items-center  '>
        <p className=' w-[80%] text-[1.2rem] leading-[2] font-light font-SignikaNegative text-lg text-slate-600 '>Tourist Hero offers exceptional tour experiences and reliable taxi services in Amritsar and beyond. Our extensive taxi services include a wide range of vehicles such as comfortable Sedans, spacious SUVs, and convenient Tempo Travellers, catering to all travel needs. Our services extend to nearby destinations like Dharamshala, Dalhousie, and other beautiful places in Himachal Pradesh. Whether you're planning a serene getaway or an adventurous trip, Tourist Hero guarantees a hassle-free journey with our professional drivers and well-maintained vehicles.</p>
        <Link to='/ContactUs'> <button className='bg-[#e38e3d]  w-full px-7 py-2  mt-8  rounded-3xl text-white'>Get Quote</button> </Link>
        </div>
      </div>
    </div>
  )
}

export default TaxiServices
