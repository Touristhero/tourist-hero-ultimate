
import React from 'react'
import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/Gallery/galleryPhoto5.jpg'

import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'

const FoodTour = () => {
  return (
    <>
   
     <div className='px-10 temple-container ' >
      <div className='flex flex-col items-center temple-child'>
       <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Food Tour</h1>
        <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
      </div>
      <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>Amritsar is world famous for its amazing food restaurants. We will take you on an 7-kilometer leisure walk through both old and new areas of Amritsar, stopping to taste Punjabi culinary delights along the way. You will have the opportunity to try 18-20 popular dishes from 10 famous shops across the city. Don't worry though; all of the dishes are shared so that you can make it through all eighteen! 
The tour starts around 10:30 a.m. 
All the food we are sampling is vegetarian and some restaurants have been serving customers for over 100 years.  This is also a unique opportunity to visit parts of the old city and places you would be unlikely to find on your own.

</p>
     <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > Amritsar's Culinary  is renowned worldwide for its amazing food and restaurants, offering a rich Punjabi culinary experience. </p>
     
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Kesar Da Dhaba is one of the most famous and iconic eateries in Amritsar, established in 1916 </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Giani Tea Stall special masala chai and Punjabi snacks  </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >  The tour offers the chance to try 18-20 popular vegetarian dishes from 10 famous shops. </p>
   
      
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

export default FoodTour
