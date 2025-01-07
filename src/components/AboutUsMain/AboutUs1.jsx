import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/gopiwithguest.jpg'
import AboutUs from '../AboutUs'
import Review from '../Review/Review'
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import Footer from '../Footer'



const AboutUs1 = () => {
  return (
   <>
  <Navbar2/>
        <div className=''>
       <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>About Us </h1>
        <div className='flex about-us-main justify-start items-center lg:gap-14 md:gap-8 px-20 md:px-10 py-10 '>
            <img className='lg:w-[40%]  md:w-[60%] object-cover rounded-lg' src={photo} alt="" />
            <p className='lg:w-[90%] lg:text-[1rem]  md:w-[60%] leading-8 text-slate-700 font-OpenSans'>Tourist Hero offers family run city tours and cultural experiences that give our guests a taste of the real Amritsar. Following in the footsteps of his father, Massa Singh who started work in tourism 1968, Gurnoop Singh took over the family business in tourism in 2011. He has provided insightful, enjoyable and friendly tours ever since. If you are looking to experience the local culture and enjoy our world famous temples and attractions with a knowledgeable and informative guide, then Tourist Hero would love to serve you. Tourist Hero looks forward to warmly welcoming you as a guest (and soon to be friend) to the wonderful city of Amritsar!</p>
        </div>
    </div> 
    <AboutUs/>
    


       <div className='flex aboutus-container p-14 bg-slate-400 bg-opacity-20 m-4 rounded-lg'>
    <div className='p-5 aboutus-child '>
            <h1 className='mb-4 text-4xl font-semibold font-SignikaNegative text-zinc-500'>Our Mission </h1>
            <p className='text-zinc-700 w-[90%] leading-8 ' >Our mission at Tourist Hero is to deliver exceptional, cultural experiences that capture the true essence of Amritsar. Building on a legacy that dates back to 1968, we are dedicated to continuing the tradition of insightful and enjoyable tours initiated by Massa Singh and carried forward by Gurnoop Singh. We aim to provide our guests with a comprehensive understanding of Amritsar's historical landmarks, cultural practices, and vibrant local life. We are committed to offering tours that are not only informative but also deeply engaging and personalized. By leveraging our extensive knowledge and love for our city, we strive to ensure every guest feels a genuine connection to the places they visit and the stories they hear.</p>
        </div>
        <div className='p-5 aboutus-child '>
            <h1 className='mb-4 text-4xl font-semibold font-SignikaNegative text-zinc-500'>Our Vision</h1>
            <p className='text-zinc-700 w-[90%] leading-8 ' >At Tourist Hero, our vision is to become the premier provider of authentic and immersive cultural experiences in Amritsar, known for our deep-rooted passion and commitment to showcasing the city's rich heritage. We aim to bridge cultural gaps and foster a global appreciation for Amritsar's unique traditions, history, and hospitality. By creating unforgettable journeys for our guests, we aspire to leave a lasting impact that promotes cultural understanding and mutual respect. We envision a world where travel not only delights and entertains but also educates and enriches, fostering connections that transcend borders.</p>
        </div>
    </div> 

     <Review/>
     <CuratedTours/>
     <Package/>
     <Footer/> 
   </>
  )
}

export default AboutUs1
