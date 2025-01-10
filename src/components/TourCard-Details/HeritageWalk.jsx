import React from 'react'

import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/WebsiteImages/guestonly.jpg'
import photo2 from '../../assets/images/WebsiteImages/goldenTemple.jpg'
import photo6 from '../../assets/images/WebsiteImages/wagah-border2.jpg'
import photo3 from '../../assets/images/Gallery/galleryPhoto5.jpg'
import photo4 from '../../assets/images/WebsiteImages/Tractor-with-on-it.jpg'
import photo5 from '../../assets/images/WebsiteImages/goldenTempleNight.jpeg'

import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const HeritageWalk = () => {
  return (
  <>
    <>
          <>
   
     <div className='px-10 temple-container ' >
      <div className='flex flex-col items-center temple-child'>
       <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Amritsar Heritage Walk</h1>
        <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
      </div>
      <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>
      The Heritage walk is a guided tour deep inside the narrow lanes and by lanes of the 438 year old city of Amritsar, founded by fourth sikh Guru Ram Dass Ji in 1574 AD. While walking through the winding alleys one is able to see Katras, Akharas, Bungas, Havelis and Hatties. The walk takes one back in time, where one can witness traditional trade and crafts being practiced in the same place and in the same manner as has been done for centuries. The town planning and architecture of the age will amaze you, especially the intricately carved wooden facades. This walk is an opportunity to expore more intimately the heart of the city and to feel part of the magnificent heritage of the Holy City of the Sikh Gurus of long ago.
</p>
     <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > The Heritage Walk explores the 438-year-old city of Amritsar, founded by the fourth Sikh Guru, Ram Dass Ji, in 1574 AD.

</p>
     
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Participants can marvel at traditional structures like Katras, Akharas, Bungas, Havelis, and Hatties, with intricately carved wooden facades showcasing the city's architectural heritage. </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >The walk offers a chance to witness traditional trade and crafts, practiced in the same locations and manner for centuries, providing a glimpse into Amritsar's rich cultural past.
</p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' > The guided tour takes visitors through the narrow lanes and alleys of Amritsar, allowing them to intimately explore the heart of the city and connect with its magnificent heritage.
</p>
   
      
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
   </>
  </>
  )
}

export default HeritageWalk
