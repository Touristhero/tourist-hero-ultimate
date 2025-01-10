import React from 'react'

import Navbar2 from '../Navbar2'
import photo1 from '../../assets/images/WebsiteImages/goldenTempleNight.jpeg'


import Package from '../Package'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'

const NightCeremony = () => {
  return (
   <>
          <>
     
     <div className='px-10 temple-container ' >
      <div className='flex flex-col items-center temple-child'>
       <h1 className='mt-32 temple-head text-5xl font-SignikaNegative font-semibold text-slate-500 mb-5' >Night ceremony (Palki Sahib)</h1>
        <img src={photo1} className='w-[35%] object-cover rounded-lg  ' alt="" />
      </div>
      <p className='mt-10 text-[1.1rem] font-SignikaNegative px-5 py-3 bg-orange-200 bg-opacity-30 rounded-lg leading-9 text-slate-600'>
The Palki Sahib Ceremony is a significant event in Sikh tradition, particularly at the Golden Temple (Harmandir Sahib) in Amritsar, Punjab. This ceremony involves the ceremonial procession of the Guru Granth Sahib, the central religious scripture of Sikhism, from the Akal Takht to the main sanctum of the Golden Temple. The Palki Sahib ceremony is carried out with great reverence and devotion, symbolizing the respect and veneration of the Guru Granth Sahib.

The ceremony begins in the early hours of the morning or evening, depending on the time of day for the procession. The Guru Granth Sahib, placed on a beautifully decorated Palki (palanquin), is carried by a group of Sikh devotees who march in a coordinated manner, chanting prayers and hymns.

The Palki Sahib is an elaborate wooden structure adorned with fine decorations, often gold-plated, that is lifted with care and precision by the devotees. The procession is marked by prayers and hymns, with the Harmandir Sahib reverberating with the melodious recitations of Gurbani (Sikh hymns). This ceremony is an expression of devotion and respect towards the Guru, fostering a sense of community and spiritual unity.
</p>
     <h1 className='text-slate-600 text-[2rem] font-OpenSans px-4 mt-5'>Highlights </h1>
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-5  ' > The Palki Sahib Ceremony involves the ceremonial procession of the Guru Granth Sahib from the Akal Takht to the Golden Temple's main sanctum. </p>
     
     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' > Sikh devotees carry the Palki (palanquin), chanting prayers and hymns as part of the procession, demonstrating reverence and devotion. </p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >The Palki Sahib is a beautifully decorated, often gold-plated, wooden structure, symbolizing the high regard for the Guru Granth Sahib.

</p>

     <p className='text-slate-600 text-[1.1rem] rounded font-OpenSans px-4 py-2 mt-2  ' >  The ceremony fosters a sense of community and spiritual unity among the followers, emphasizing the collective devotion to the Sikh faith.






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
  )
}

export default NightCeremony
