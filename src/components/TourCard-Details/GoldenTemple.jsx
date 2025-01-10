import React from 'react'
import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/WebsiteImages/goldenTemple.jpg'



import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const GoldenTemple = () => {
  return (
   < >
    
     <div className='px-10 temple-container ' >
      <div className='flex flex-col items-center temple-child'>
       <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Golden Temple</h1>
        <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
      </div>
      <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>Harimandir  Sahib or Darbar Sahib, or the Golden Temple, is the holiest temple for Sikhs. Nearly 100,000 people visit the temple each day, and numbers nearly double during festivals/weekends. 

The temple has four entrances and no doors, which signifies that people from all walks of life, from all religions and from all backgrounds are welcome in the temple. Sikh religion started by group of people who believed in humanity and no differences among human beings. To prove this point, they built community kitchens where they cooked together and sat on the ground to eat together. As it is the basic part of the religion, there is a community kitchen in every Sikh temple in the world. The kitchen is one of the most efficient operations you will see during your time in India! It is a delight to watch the dedicated and hardworking volunteers cook food in gigantic pots, serve visitors, direct traffic and clean the dishes in an assembly style setup up. 

The Sikhs consider the Holy book (aka. Shri Guru Granth Sahib) as a human and put it to bed every night (time depends upon season) and waking it up early every morning. It is awesome time to see the temple filled with religious sentiments during these ceremonies. 

Best time to visit: Morning or night ceremony, sunrise, sunset, and late in the evening when the temple is illuminated. 

Our guide will walk with you through the beautiful Golden Temple while explaining its history and providing interesting facts. Upon arrival, you will have the option of trying langar (a free meal offered by the temple). You will also have the privilege of touring the biggest community kitchen in the world! 
</p>
     <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > World's Largest Community Kitchen (Serves around 50000 to 60000 meals on day basis for free). </p>
     
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >The Akal Takht, meaning "Throne of the Timeless One" established in 1606 by the sixth Sikh Guru, Guru Hargobind Ji. </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >The Baba Buddha Ji Beri Tree, an ancient ber tree (Indian jujube, Ziziphus mauritiana).  </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >  The Ramgarhia Bunga, established in the late 18th century by Jassa Singh Ramgarhia.  </p>
   
      
  <div>
    
  </div>

  <Link to="/Booking" ><div className='flex items-center justify-center'>  <button className='py-2 bg-[#e38e3d] text-white  px-4 mt-10 w-[30%] rounded-3xl'>Book Now </button> </div> </Link>
    </div>


 
     <Package/>
     <CuratedTours/>
     <GuestReview/>
     <AboutUs/>
     <Footer/>
   </>
  )
}

export default GoldenTemple
