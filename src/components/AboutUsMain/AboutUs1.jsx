import React from 'react'
import Navbar from '../Navbar'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/gopiwithguest.jpg'
import photo2 from '../../assets/images/AboutImage/photo2.jpeg'
import photo3 from '../../assets/images/AboutImage/AmanAbout.jpg'
import photo4 from '../../assets/images/AboutImage/JassiPaaji.jpg'
import AboutUs from '../AboutUs'
import Review from '../Review/Review'
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import Footer from '../Footer'



const AboutUs1 = () => {
  return (
   <>

        <div className=''>
       <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>About Us </h1>
        <div className='flex about-us-main justify-start items-center lg:gap-14 md:gap-8 px-20 md:px-10 py-10 '>
            <div>
            <img className='lg:w-[90%]  md:w-[100%] object-cover rounded-lg' src={photo2} alt="" />
            <h1 className='text-center mt-2 text-slate-600 text-xl'> Massa Singh, Founder Tourist Hero.</h1>
            </div>
            <p className='lg:w-[70%] lg:text-[1rem] mt-4 md:w-[60%] leading-8 text-slate-700 font-OpenSans'>Tourist Hero provides family-run city tours and cultural experiences that offer guests an authentic glimpse into the heart of Amritsar. Continuing the legacy of Massa Singh, who began his journey in tourism back in 1968, these tours have consistently been insightful, enjoyable, and welcoming. If you're eager to immerse yourself in local culture and explore Amritsar's renowned temples and attractions with a knowledgeable guide, Tourist Hero is here to make your visit memorable. We look forward to welcoming you warmly as a guest and, soon enough, as a friend in the beautiful city of Amritsar.</p>
        </div>
    </div> 
    <div className=''>
     
        <div className='flex flex-row-reverse about-us-main justify-start items-center lg:gap-14 md:gap-8 px-20 md:px-10 py-10 '>
            <div className=''>
            <img className='lg:w-[90%]  md:w-[100%] object-cover rounded-lg' src={photo3} alt="" />
            <h1 className='text-center mt-2 text-slate-600 text-xl'> Aman Singh, Tour Manager  Tourist Hero.</h1>
            </div>
            <p className='lg:w-[70%] lg:text-[1rem] mt-4 md:w-[60%] leading-8 text-slate-700 font-OpenSans'>Aman is a skilled tour manager known for his exceptional organizational abilities and attention to detail. He handles all aspects of travel, including transportation, hotel bookings, flight arrangements, and customized itineraries, ensuring a smooth and enjoyable experience for his clients. With a deep understanding of the tourism industry, Aman tailors each trip to meet the unique preferences of travelers, offering personalized service and expert guidance. His dedication and friendly approach make him a trusted partner for anyone looking to explore new destinations with ease and comfort.</p>
        </div>
    </div> 
    <div className='flex  about-us-main justify-start  items-center lg:gap-2 md:gap-2 px-20 md:px-10 py-10 '>
            <div className='flex flex-col '>
            <img className='lg:w-[80%]    md:w-[80%] object-cover rounded-lg' src={photo} alt="" />
            <h1 className='mt-2 founder-head text-slate-600 ml-20 text-center mr-40 text-xl'> Aman Singh, Tour Manager  Tourist Hero.</h1>
            </div>
            <p className='lg:w-[160%] lg:text-[1rem] mt-4 md:w-[100%] leading-8 text-slate-700 font-OpenSans'>Gurnoop Singh, at Tourist Hero, carries on the legacy of his father, Massa Singh, who began his journey in tourism in 1968. As part of this family-run business, Gurnoop offers city tours and cultural experiences that provide visitors with an authentic taste of Amritsar. His insightful, enjoyable, and friendly approach ensures guests experience the city's rich culture, famous temples, and attractions in a memorable way. With Gurnoop as your guide, Tourist Hero promises to make your visit to Amritsar not only informative but also warm and welcoming, leaving you with lasting memories of this vibrant city.</p>
        </div>
  
        <div className='flex flex-row-reverse about-us-main justify-center items-center lg:gap-14 md:gap-8 px-20 md:px-10 py-10 '>
            <div className=''>
            <img className='lg:w-[80%]  md:w-[100%] object-cover rounded-lg ' src={photo4} alt="" />
            <h1 className='text-center mt-2 text-slate-600 text-xl'> Jaswinder Singh, Senior Guide  Tourist Hero.</h1>
            </div>
            <p className='lg:w-[100%] lg:text-[1rem] mt-4 md:w-[60%] leading-8 text-slate-700 font-OpenSans'>Jaswinder Singh is a senior guide at Tourist Hero with over 20 years of experience in the field. Known for his deep knowledge and engaging storytelling, Jaswinder captivates visitors with rich historical insights and fascinating tales. His passion for history and friendly demeanor make every tour enjoyable and memorable. With a unique ability to blend fun and education, Jaswinder ensures that tourists not only learn but also have a delightful experience. His long-standing dedication to guiding has earned him a reputation as a trusted and beloved figure among both tourists and his colleagues at Tourist Hero.</p>
        </div>
   
    


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

    

        <AboutUs/>
     <Review/>
     <CuratedTours/>
     <Package/>
     <Footer/> 
   </>
  )
}

export default AboutUs1
