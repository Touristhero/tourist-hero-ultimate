import React from 'react'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/guest-photo-20.jpg'
import AmritsarDay2 from '../Itenery-Details/AmritsarDay2'
import AmritsarDay3 from '../Itenery-Details/AmritsarDay3'
import DharamshalDay4 from '../Itenery-Details/DharamshalDay4'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const AmritsarDay1Details = () => {
  return (
    <div>
       
       <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Curated Tour </h1>
        
         <div className=' package-container1 flex justify-center  gap-20 mt-20  px-8'>
             
             
                     <div className='relative package-child1 flex justify-center rounded-lg w-[60%] '>
                         <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                         ml-10 mt-20 text-white z-10'>AMRITSAR DAY 1</h1>
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
                        <h2 className=' most-popular-head lg:text-[3.5rem] text-orange-600 font-SignikaNegative md:text-[3.4rem] font-bold'>Most Popular </h2>
                        <div className=''>
                            <h1 className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600' >Golden Temple </h1>
                            <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Jallianwala Bagh</h1>
                            <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Wagah Border</h1>
                            <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Night Ceremony</h1>
                        </div>
                    </div>


             
               
              
            </div>

            <div className=' package-container2 mt-12 p px-8  '>
                <h1 className='text-[2.5rem] special-h1 font-SignikaNegative font-semibold text-slate-600'>Amrtisar Local Sightseeing Tour Day 1</h1>
                <div className='px-10 package-container3 py-2'>
                <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Golden temple</h2>
                <p className='leading-9 text-lg text-slate-600'>Harimandir Sahib or Darbar Sahib, or the Golden Temple, is the holiest temple for Sikhs. Nearly 100,000 people visit the temple each day, and numbers nearly double during festivals/weekends.


The temple has four entrances and no doors, which signifies that people from all walks of life, from all religions and from all backgrounds are welcome in the temple.


Sikh religion started by group of people who believed in humanity and no differences among human beings. To prove this point, they built community kitchens where they cooked together and sat on the ground to eat together.


As it is the basic part of the religion, there is a community kitchen in every Sikh temple in the world. The kitchen is one of the most efficient operations you will see during your time in India!


It is a delight to watch the dedicated and hardworking volunteers cook food in gigantic pots, serve visitors, direct traffic, and clean the dishes in an assembly style setup up.


The Sikhs consider the Holy Book (aka. Shri Guru Granth Sahib) as a human and put it to bed every night (time depends upon season) and waking it up early every morning.


It is awesome time to see the temple filled with religious sentiments during these ceremonies. 
</p>
                </div>
                <div className='px-10 package-container3 py-2'>
                <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Jallian Wala Bagh Memorial</h2>
                <p className='leading-9 text-lg text-slate-600'>The Jallianwala Bagh massacre, also known as the Amritsar massacre, was a seminal event in the British rule of India.


On 13 April 1919, a crowd of non-violent protesters, along with Baishakhi pilgrims, gathered in the Jallianwala Bagh garden in Amritsar, Punjab to protest against the arrest of two leaders despite a curfew which had been recently declared.


On the orders of Brigadier-General Reginald Dyer, the army fired on the crowd for ten minutes, directing their bullets largely towards the few open gates through which people were trying to run out.


The figures released by the British government were 370 dead and 1200 wounded. Other sources place the number of dead at well over 1000. You can see the walls with bullet marks, the well where people jumped in a futile attempt to save themselves from bullets, and two museums trying to depict the history.

</p>
                </div>
                <div className='px-10 package-container3 py-2'>
                <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'> Shopping </h2>
                <p className='leading-9 text-lg text-slate-600'> Shopping in Amritsar is one of the interests for tourists coming to the holy city. The state of Punjab has a fairly rich tradition of handicrafts and handlooms. No matter where you look, you will find a wide variety of bright colour dresses. Most famous shopping items are: </p>
                <ul className='leading-9 text-lg text-slate-600 mt-4'>
                    <li>• <span className='font-semibold'>Patiala Salwar </span>	:It is female loose trousers which have folds of cloth stitched together that meet at the bottom.</li>
                    <li>• <span  className='font-semibold'>Phulkari</span>: It literally means flower work, this is the embroidery technique from this region. You can buy dresses/shawls with this embroidery.</li>
                    <li>
                    •	<span  className='font-semibold'>Punjabi Jutti</span>:Its made of leather and extensive embroidery, Jutti is the traditional footwear of this region.  
                    </li>
                </ul>
                </div>

                <div className='px-10 package-container3 py-2'>
                <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Wagah Border</h2>
                <p className='leading-9 text-lg text-slate-600'>The Wagah border closing 'lowering of the flags' ceremony or the Beating Retreat ceremony is a daily military practice that the security forces of India (Border Security Force) and Pakistan (Pakistan Rangers) have jointly followed since 1959.


This ceremony takes place every evening before sunset at the Wagah border, which as part of the Grand Trunk Road was the only road link between these two countries before the opening of the Aman Setu in Kashmir in 1999.


The ceremony starts with a blustering parade by the soldiers from both the sides, and ends up in the perfectly coordinated lowering of the two nations' flags.


It is called the beating retreat border ceremony on the international level. Awesomely choreographed like a Bollywood Event, an awesome experience mixed with fake aggressive gestures but true passion from the crowds.


The time of the ceremony changes as per the sunset time. 
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
                    <AmritsarDay2/>
                    <AmritsarDay3/>
                
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

export default AmritsarDay1Details
