import React from 'react'
import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/WebsiteImages/Tractor-with-on-it.jpg'


import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const VillageTour = () => {
  return (
    <>
  
  <div className='px-10 temple-container ' >
   <div className='flex flex-col items-center temple-child'>
    <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Village Tour </h1>
     <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
   </div>
   <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>We have partnered with local village farmers to give visitors a taste of traditional ways of life and culture. Visitors will have the opportunity to do things like milk a cow, ride on a traditional bull cart, see common farming practices, visit the local primary school and observe a village embroidery workshop- just to name a few! To really experience what it’s like to live in Punjab you need to visit one of our villages. Visiting a local family, they will serve traditional snacks and chai before having a guided tour of the farm. Learn how to milk a cow before having a ride around the village on a bull cart. Play the Punjabi game kabaddi, take a bhangra dance lesson and try the traditional Punjabi vegetarian food. Learn how to tie a Turban and have the chance to wear Punjabi clothes. This is a fantastic opportunity to get inside the home of a local family, in the village and away from the hustle and bustle of Amritsar city.

</p>
  <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
  <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > Visitors get the chance to engage in traditional village activities such as milking a cow, riding a bull cart, and observing common farming practices. </p>
  
  <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >Visitors will experience Punjabi culture through activities like playing kabaddi, taking a bhangra dance lesson, and tasting traditional Punjabi vegetarian food. </p>

  <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' > Guests will visit a local family’s home, where they will be served traditional snacks and chai before taking a guided tour of the farm. </p>

  <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' > Visitors can learn to tie a turban, try on Punjabi clothes, and immerse themselves in the local way of life, far from the hustle of Amritsar city.</p>

   
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

export default VillageTour
