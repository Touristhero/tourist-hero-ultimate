import React from 'react'
import photo from '../../assets/images/WebsiteImages/guestcrowd.jpg'
import AmritsarDay2 from '../Itenery-Details/AmritsarDay2'
import AmritsarDay3 from '../Itenery-Details/AmritsarDay3'
import DharamshalDay4 from '../Itenery-Details/DharamshalDay4'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import AmritsarDay1 from '../Itenery-Details/AmritsarDay1'
import Navbar2 from '../Navbar2'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const AmritsarDay3Details = () => {
  return (
    <div>
   
   <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Curated Tour </h1>
    
     <div className=' package-container1 flex justify-center  gap-20 mt-20  px-8'>
         
         
                 <div className='relative package-child1 flex justify-center rounded-lg w-[60%] '>
                     <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                     ml-10 mt-20 text-white z-10'>AMRITSAR DAY 3</h1>
                     {/* <ul className='absolute package-ul right-10 top-32 z-10  rounded-lg px-4 py-3' >
                         <li className=' text-2xl font-semibold text-orange-700 bg-white px-3 rounded-lg  py-2 font-SignikaNegative mr-  ' >Most Popular</li>
                         <li className='text-white text-xl font-SignikaNegative '> Golden Temple</li>
                         <li className='text-white text-xl font-SignikaNegative '> Jallianwala Bagh</li>
                         <li className='text-white text-xl font-SignikaNegative '> Wagah Border</li>
                         <li className='text-white text-xl font-SignikaNegative '> Night Ceremony</li>
                         
                     </ul> */}
                 <img className='w-[100%] h-[20rem] object-cover rounded-lg' src={photo} alt="" />
               <div class="absolute w-[100%] h-[20rem] inset-0 bg-black bg-opacity-60 rounded-lg"></div>
         
                </div>
            
                <div className='w-[30%] package-child2'>
                    <h2 className=' most-popular-head lg:text-[3.5rem] text-orange-600 font-SignikaNegative md:text-[3.4rem] font-bold'>Other Places </h2>
                    <div className=''>
                        <h1 className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600' >Food Tour </h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Heritage Walk</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Village Tour</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Golden Temple Night Ceremony </h1>
                    </div>
                </div>


         
           
          
        </div>

        <div className=' package-container2 mt-12 p px-8  '>
            <h1 className='text-[2.5rem] special-h1 font-SignikaNegative font-semibold text-slate-600'>Amrtisar Local Sightseeing Tour Day 3</h1>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Food Tour </h2>
            <p className='leading-9 text-lg text-slate-600'>Amritsar is world famous for its amazing food restaurants. We will take you on an 7-kilometer leisure walk through both old and new areas of Amritsar, stopping to taste Punjabi culinary delights along the way. You will have the opportunity to try 18-20 popular dishes from 10 famous shops across the city. Don't worry though; all of the dishes are shared so that you can make it through all eighteen! 
The tour starts around 10:30 a.m. 
All the food we are sampling is vegetarian and some restaurants have been serving customers for over 100 years.  This is also a unique opportunity to visit parts of the old city and places you would be unlikely to find on your own.
</p>
            </div>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Heritage Walk </h2>
            <p className='leading-9 text-lg text-slate-600'> The Heritage walk is a guided tour deep inside the narrow lanes and by lanes of the 438 year old city of Amritsar, founded by fourth sikh Guru Ram Dass Ji in 1574 AD. While walking through the winding alleys one is able to see Katras, Akharas, Bungas, Havelis and Hatties. The walk takes one back in time, where one can witness traditional trade and crafts being practiced in the same place and in the same manner as has been done for centuries. The town planning and architecture of the age will amaze you, especially the intricately carved wooden facades. This walk is an opportunity to expore more intimately the heart of the city and to feel part of the magnificent heritage of the Holy City of the Sikh Gurus of long ago.
</p>
            </div>
     

            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Village Tour</h2>
            <p className='leading-9 text-lg text-slate-600'>  We have partnered with local village farmers to give visitors a taste of traditional ways of life and culture. Visitors will have the opportunity to do things like milk a cow, ride on a traditional bull cart, see common farming practices, visit the local primary school and observe a village embroidery workshop- just to name a few! To really experience what it’s like to live in Punjab you need to visit one of our villages. Visiting a local family, they will serve traditional snacks and chai before having a guided tour of the farm. Learn how to milk a cow before having a ride around the village on a bull cart. Play the Punjabi game kabaddi, take a bhangra dance lesson and try the traditional Punjabi vegetarian food. Learn how to tie a Turban and have the chance to wear Punjabi clothes. This is a fantastic opportunity to get inside the home of a local family, in the village and away from the hustle and bustle of Amritsar city.
</p>
            </div>

            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Golden Temple Night Ceremony (Optional)</h2>
            <p className='leading-9 text-lg text-slate-600'>The Palki Sahib Ceremony is a significant event in Sikh tradition, particularly at the Golden Temple (Harmandir Sahib) in Amritsar, Punjab. This ceremony involves the ceremonial procession of the Guru Granth Sahib, the central religious scripture of Sikhism, from the Akal Takht to the main sanctum of the Golden Temple. The Palki Sahib ceremony is carried out with great reverence and devotion, symbolizing the respect and veneration of the Guru Granth Sahib.

The ceremony begins in the early hours of the morning or evening, depending on the time of day for the procession. The Guru Granth Sahib, placed on a beautifully decorated Palki (palanquin), is carried by a group of Sikh devotees who march in a coordinated manner, chanting prayers and hymns.

The Palki Sahib is an elaborate wooden structure adorned with fine decorations, often gold-plated, that is lifted with care and precision by the devotees. The procession is marked by prayers and hymns, with the Harmandir Sahib reverberating with the melodious recitations of Gurbani (Sikh hymns). This ceremony is an expression of devotion and respect towards the Guru, fostering a sense of community and spiritual unity.</p>
            </div>
            <Link to="/Booking" >
            <div className='flex items-center justify-center'> <button className='py-2 bg-[#e38e3d] text-white  px-4 mt-10 w-[40%] rounded-3xl'>Book Now</button></div></Link>
             
            <h1 className='text-[2.5rem] mt-20 font-SignikaNegative font-semibold text-slate-600'>Other Packages</h1>
            <div className='flex package-container  gap-10 justify-center  ' >
                <AmritsarDay1/>
                <AmritsarDay2/>
           
            
            </div>
            <div className='flex justify-center  ' >
               <DharamshalDay4/>
               
            </div>
           
        </div>

        <CuratedTours/>
       <GuestReview/>
        <AboutUs/>
        <Footer/>
</div>
  )
}

export default AmritsarDay3Details
