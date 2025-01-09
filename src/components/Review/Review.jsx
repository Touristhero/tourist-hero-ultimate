import React from 'react'
import Photo1 from '../../assets/images/ReviewImages/reviewPhoto1.jpg'
import Photo2 from '../../assets/images/ReviewImages/reviewPhoto2a.jpg'
import Photo3 from '../../assets/images/ReviewImages/reviewPhoto3.jpg'
import Photo4 from '../../assets/images/ReviewImages/reviewPhoto4.jpg'



import { FaStar } from "react-icons/fa";
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import ImageGallery from '../Gallery/ImageGallery'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
const Review = () => {
  return (
<>
<div>
<h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Guest Reviews </h1>


      <div className='review-container flex   px-20 mt-10 py-10 gap-6 '>
        <img className= 'w-[30%]  object-cover rounded-lg '  src={Photo1} alt="" />
        <div className=' review-child md:px-5 sm:px-0 py-10  px-9'>
           <h1 className=' text-3xl  font-SignikaNegative font-bold text-zinc-600 '>ErrinBeTrippin </h1>
        <div className='flex mb-10 ml-1 text-lg'>
        <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
        </div> 
            
            <h2 className='mb-5 text-lg  leading-8  text-zinc-600 font-SignikaNegative font-bold'>Gopi is THE BEST! He arrives on time and is very professional and FUN!</h2>
           <p className='text-[1.1rem] font-SignikaNegative   leading-8 max-w-xl text-zinc-600'> <span className='text-2xl'>&ldquo;</span> He took us on a food tour to some family owned places in Amritsar and and even added some places to our tour that he knew our group would enjoy based on the time he spent with us. I definitely recommend Tourist Hero! 10 Stars! <span className='text-2xl '> &rdquo; </span></p>
        </div>
      </div>

      <div className='review-container flex flex-row-reverse  px-20 mt-5 py-5 gap-5 '>
        <img className= 'w-[30%]  object-cover rounded-lg '  src={Photo2} alt="" />
        <div className=' review-child md:px-5 sm:px-0 py-10  px-9'>
           <h1 className=' text-3xl  font-SignikaNegative font-bold text-zinc-600 '>
           Stef A </h1>
        <div className='flex mb-10 ml-1 text-lg'>
        <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
        </div> 
            
            <h2 className='mb-5 text-lg  leading-8  text-zinc-600 font-SignikaNegative font-bold'>5 stars for Gopi!!</h2>
           <p className='text-[1.1rem] font-SignikaNegative   leading-8 max-w-xl text-zinc-600'> <span className='text-2xl'>&ldquo;</span> Gopi gave my group some of the BEST memories we had in India. His food tour brought us to some of the best local spots that we would have never found on our own, as well as to the home of a local so we could learn to cook an authentic Indian meal. We also did a tour of the golden temple, and went behind the scenes of the community kitchen. Gopi is so well informed and was able to answer any question we had. Not only that, but he is HILARIOUS and gave us a great time. Thanks again, Gopi!! <span className='text-2xl '> &rdquo; </span></p>
        </div>
      </div>

        
      <div className='review-container flex   px-20 mt-10 py-10 gap-6 '>
        <img className= 'w-[30%]  object-cover rounded-lg '  src={Photo3} alt="" />
        <div className=' review-child md:px-5 sm:px-0 py-10  px-9'>
           <h1 className=' text-3xl  font-SignikaNegative font-bold text-zinc-600 '>Emma S</h1>
        <div className='flex mb-10 ml-1 text-lg'>
        <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
        </div> 
            
            <h2 className='mb-5 text-lg  leading-8  text-zinc-600 font-SignikaNegative font-bold'>Best excursion ever!!</h2>
           <p className='text-[1.1rem] font-SignikaNegative   leading-8 max-w-xl text-zinc-600'> <span className='text-2xl'>&ldquo;</span> Gopi was amazing! He knew of all the family owned local spots in Amritsar, told us all about the history of the Golden Temple during the tour, and we even got to cook in a lovely town home. Gopi is a hilarious and fun individual, he will not let you down! <span className='text-2xl '> &rdquo; </span></p>
        </div>
      </div>


      
      <div className='review-container flex flex-row-reverse  px-20 mt-5 py-5 gap-5 '>
        <img className= 'w-[35%]  object-cover rounded-lg '  src={Photo4} alt="" />
        <div className=' review-child md:px-5 sm:px-0 py-10  px-9'>
           <h1 className=' text-3xl  font-SignikaNegative font-bold text-zinc-600 '>Cassie winner </h1>
        <div className='flex mb-10 ml-1 text-lg'>
        <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
           <FaStar className='text-orange-400' />
        </div> 
            
            <h2 className='mb-5 text-lg  leading-8  text-zinc-600 font-SignikaNegative font-bold'>Entertaining and educational!</h2>
           <p className='text-[1.1rem] font-SignikaNegative   leading-8 max-w-xl text-zinc-600'> <span className='text-2xl'>&ldquo;</span>Gobi took us around town and showed us all the best food and history of Amritsar! He kept us safe and taught us a lot. I highly l recommend! He’s a great photographer too! By the end of the day, it was as if I was traveling with a long time friend. <span className='text-2xl '> &rdquo; </span></p>
        </div>
      </div>

      <div className='flex justify-center mt-10'>
       <a target='blank' href="https://www.tripadvisor.in/Attraction_Review-g303884-d13551736-Reviews-Tourist_Hero_Amritsar-Amritsar_Amritsar_District_Punjab.html"> <button className='bg-[#e38e3d] px-5 py-2  rounded-3xl text-white'>Read More</button></a>
      </div>
    </div>

    <CuratedTours/>
    <Package/>
    <ImageGallery/>
    <AboutUs/>
    <Footer/>
</>
  )
}

export default Review
