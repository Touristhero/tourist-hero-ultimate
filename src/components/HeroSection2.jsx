import React from 'react'
import video from '../assets/images/WebsiteImages/video.mp4'

const HeroSection2 = () => {
  return (
    < >
  
    <h1 className='text-6xl font-semibold mt-20 text-center text-orange-600 '>Discover the Sacred City </h1>
    <h3 className='text-xl mt-3 text-center text-orange-600 font-semibold' >WITH TOURIST HERO</h3>

    <div className='flex py-10 px-20 hero-section-2 '>
        <div> 
            {/* <img className='w-1/2 rounded-xl' src={photo} alt="" /> */}
           <video src={video} loop autoPlay muted className='w-[800px] video '></video>
        </div>
       <div className='w-1/2 px-10       text-2xl'>
       {/* <h1 className='text-6xl font-semibold '>Discover the Sacred City</h1> */}
       <p className='text-[1.1rem] text-slate-600  mt-7  '>
       Amritsar, the heart of Punjab, is a city steeped in spirituality, history, and culture. The iconic Golden Temple, the soul of Sikhism, radiates peace and equality, while Jallianwala Bagh serves as a poignant reminder of India’s freedom struggle. Visitors can experience patriotic fervor at the Wagah Border or explore history at the Partition Museum. The Durgiana Temple and Gobindgarh Fort add to its charm, while Hall Bazaar offers authentic shopping delights. Renowned for its culinary treasures like Amritsari kulcha and lassi, Amritsar welcomes visitors with warmth and vibrant traditions, leaving a lasting impression on all who visit.
        </p></div>
    
    </div>
    </>
  )
}

export default HeroSection2
