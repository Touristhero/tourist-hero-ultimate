import React from 'react'
import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/WebsiteImages/wagah-border2.jpg'
import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const WagahBorder = () => {
  return (
   <>
  
     <div className='px-10 temple-container ' >
      <div className='flex flex-col items-center temple-child'>
       <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Wagah Border </h1>
        <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
      </div>
      <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>Border tour With a Stopover at the Lal Mata Mandir: Dedicated to female saint Lal Devi, this temple is regarded as a miniature of the popular Vaishno Devi temple in Jammu because of its similar structure.
The Wagah border closing 'lowering of the flags' ceremony or the Beating Retreat ceremony is a daily military practice that the security forces of India (Border Security Force) and Pakistan (Pakistan Rangers) have jointly followed since 1959. This ceremony takes place every evening before sunset at the Wagah border, which as part of the Grand Trunk Road was the only road link between these two countries before the opening of the Aman Setu in Kashmir in 1999. The ceremony starts with a blustering parade by the soldiers from both the sides, and ends up in the perfectly coordinated lowering of the two nations' flags. It is called the beating retreat border ceremony on the international level. Awesomely choreographed like a Bollywood Event, an awesome experience mixed with fake aggressive gestures but true passion from the crowds.
The time of the ceremony changes as per the sunset time.
 
</p>
     <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > Lal Mata Mandir temple, dedicated to the female saint Lal Devi, is considered a miniature version of the Vaishno Devi temple in Jammu due to its similar structure.

</p>
     
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Wagah Border Ceremony: The "lowering of the flags" ceremony, is a daily military practice performed by the Border Security Force (India) and the Pakistan Rangers since 1959. </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Historical Road Wagah border was the only road link between India and Pakistan before the Aman Setu in Kashmir was opened in 1999.  </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >  Attari railway station ,last railway station on the Indian side before the India-Pakistan border at Wagah  </p>
   
      
  <div>
    
  </div>
  <Link to="/Booking" >
  <div className='flex items-center justify-center'> <button className='py-2 bg-[#e38e3d] text-white  px-4 mt-10 w-[30%] rounded-3xl'>Book Now</button></div></Link>
    </div>
         
       
     <Package/>
     <CuratedTours/> 
     <GuestReview/>
     <AboutUs/>
     <Footer/>
   </>
  )
}

export default WagahBorder
