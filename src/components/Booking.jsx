import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
import photo from '../assets/images/WebsiteImages/goldenTempleNight.jpeg'
import Review from './Review/Review'
import ImageGallery from './Gallery/ImageGallery'
import AboutUs from './AboutUs'
import Footer from './Footer'
const Booking = () => {
  return (
    <div>
        <Navbar2/>
     <div className=' booking-container flex mt-20 px-16 py-10'>

     <div className=''>
      <h1 className='w-[100%] booking-heading  leading-[4rem] text-5xl font-semibold   text-slate-500 font-SignikaNegative '>Book Today and Enjoy an <span className='booking-heading text-5xl font-bold text-orange-600  font-SignikaNegative' > Incredible  Experience </span></h1> 
      <form className='mt-5 '>
      
      <div className='flex booking-child '>
          
      <input placeholder='Your First Name' required className='border-2 w-[40%] border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' type="text" />
        <input placeholder='Your Last Name' required className='input-child border-2 w-[40%] ml-3 border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' type="text" />
      </div>
      <input placeholder='Your Email Address'  required className='border-2 w-[82%] mt-5  border-gray-300 rounded outline-none 
       focus:border-orange-200  focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' type="email" />

       <h1 className='mt-5 text-slate-600 '>Pick the Perfect Tour for You</h1>
       <select required className='border-2 w-[81%] px-2 py-1 rounded focus:shadow-lg focus:shadow-orange-100 ' name="Tours" id="">
        <option  value="" disabled selected> Choose Below </option>
        <option className='hover:bg-orange-400'  value="Amrtisar One Day Tour">Amrtisar One Day Package (Most Popular) </option>
        <option   value="Amrtisar One Day Tour">Amrtisar Two Day Package </option>
        <option   value="Amrtisar Three Day Package ">Amrtisar Three Day Package </option>
        <option   value="Amrtisar Four Day Package (Including Dharamshala)">Amrtisar Four Day Package (Including Dharamshala) </option>
        <option   value="Golden Temple and Jallianwala Bagh Tour">Golden Temple and Jallianwala Bagh Tour </option>
        <option   value="Wagah Border Tour">Wagah Border Tour</option>
        <option   value="Food Tour">Food Tour</option>
        <option   value="Village Tour">Village Tour</option>
        <option value="Night Ceremony">Night Ceremony</option>

       </select>
       <h1 className='mt-5 text-slate-600 '>Select the dates</h1>
        <div className='flex booking-child '>
       <input required className='border-2 w-[40%] border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' type="date" />
         
         <select name="Number Of Person" className='input-child border-2 w-[40%] ml-3 px-3 py-2 rounded ' id="">
          <option value="NumberOfPerson" selected disabled>Number of person</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="morethat10">More than 10</option>

         </select>
       </div>
       <select required  name="transportation" className='border-2 w-[82%] mt-5 px-3 py-2 rounded '  id="">
        <option value="Choose Transportation" selected disabled> Choose Transportation</option>
        <option value="">Swift Dzire</option>
        <option value="">Toyoto Etios</option>
        <option value="">Innova Crysta</option>
        <option value="">Tempo Traveller 12 seater</option>
        <option value="">Tempo Traveller 17 seater</option>
        <option value="">Without Any Transportation</option>

      </select>
      <button className='w-[82%] bg-[#e38e3d] mt-10 text-lg py-2 font-OpenSans text-white rounded'>Submit </button>
      </form>
      </div>
      
      <img className='w-[50%] rounded-lg object-cover ' src={photo} alt="" />
     </div>
      <Review/>
      <ImageGallery/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Booking