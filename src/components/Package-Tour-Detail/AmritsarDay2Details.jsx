import React from 'react'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/guestcrowd.jpg'
import AmritsarDay2 from '../Itenery-Details/AmritsarDay2'
import AmritsarDay3 from '../Itenery-Details/AmritsarDay3'
import DharamshalDay4 from '../Itenery-Details/DharamshalDay4'
import CuratedTours from '../CuratedTours'
import Review from '../Review/Review'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import AmritsarDay1 from '../Itenery-Details/AmritsarDay1'
import GuestReview from '../Review/GuestReview'
import Booking from '../Booking'
import { Link } from 'react-router-dom'
const AmritsarDay2Details = () => {
  return (
    <div>
  
   <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Curated Tour </h1>
    
     <div className=' package-container1 flex justify-center  gap-20 mt-20  px-8'>
         
         
                 <div className='relative package-child1 flex justify-center rounded-lg w-[60%] '>
                     <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                     ml-10 mt-20 text-white z-10'>AMRITSAR DAY 2</h1>
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
                        <h1 className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600' >Durgiana Temple </h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Ram Tirath</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Partition Museum</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Gobindgarh Fort</h1>
                    </div>
                </div>


         
           
          
        </div>

        <div className=' package-container2 mt-12 p px-8  '>
            <h1 className='text-[2.5rem] special-h1 font-SignikaNegative font-semibold text-slate-600'>Amrtisar Local Sightseeing Tour Day 2</h1>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Durgiana Temple</h2>
            <p className='leading-9 text-lg text-slate-600'>The Durgiana Temple, also known as the Lakshmi Narayan Temple, is a prominent Hindu temple located in Amritsar, Punjab. Resembling the architecture of the famous Golden Temple, it is dedicated primarily to Goddess Durga and is a significant pilgrimage site for devotees. Built in the early 20th century by Harsai Mal Kapoor, the temple showcases a blend of traditional Hindu and modern architectural styles, with a central shrine surrounded by a sacred water tank. The temple complex also houses shrines dedicated to Lord Vishnu and Goddess Lakshmi. Its silver doors and marble interiors are notable features, enhancing its spiritual ambiance. The temple is especially vibrant during the festivals of Navratri and Dussehra, attracting thousands of devotees. Its serene environment and religious significance make it a must-visit destination in Amritsar.</p>
            </div>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Ram Tirath</h2>
            <p className='leading-9 text-lg text-slate-600'> Ram Tirath, located about 11 kilometers from Amritsar, is an ancient pilgrimage site associated with the Ramayana. It is believed to be the ashram of Sage Valmiki, the author of the epic. According to legend, Sita took refuge here after being exiled from Ayodhya and gave birth to her twin sons, Luv and Kush. The site holds immense religious significance for Hindus.

The complex includes a sacred tank, which devotees believe has holy water that can absolve sins. A unique feature of Ram Tirath is the four-footed hut or 'takhats', said to be the spot where Sita lived. The site also hosts a week-long fair every year during November, attracting thousands of pilgrims. The Valmiki temple and the statues of Luv and Kush with their mother Sita are prominent attractions. Ram Tirath is not only a place of worship but also a symbol of rich cultural and mythological heritage.</p>
            </div>
          

            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Partition Museum</h2>
            <p className='leading-9 text-lg text-slate-600'>The Partition Museum in Amritsar is a poignant tribute to the tragic events of the Partition of India in 1947. Located near the Town Hall, it is the world's first museum dedicated to the Partition, showcasing the personal stories, artifacts, and photographs of the millions affected by the division of India and Pakistan.

The museum's exhibits chronicle the pain, resilience, and hope of the people who faced displacement, violence, and loss. Through interactive displays, audio-visual recordings, and personal belongings donated by survivors, visitors gain a deeper understanding of the human cost of the Partition. The Gallery of Hope, which concludes the museum tour, emphasizes peace and reconciliation.

Established in 2017 by the Arts and Cultural Heritage Trust (TAACHT), the museum serves as a reminder of this significant historical event. Its mission is to educate future generations about the impact of the Partition while promoting harmony and understanding.
</p>
            </div>

            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Gobindgarh Fort</h2>
            <p className='leading-9 text-lg text-slate-600'>Gobindgarh Fort, located in the heart of Amritsar, is a historic and cultural landmark that dates back to the 18th century. Initially built by Gujjar Singh Bhangi, a local chieftain, the fort was later enhanced by Maharaja Ranjit Singh, who fortified it with massive walls and iron gates to protect the city from invasions. The fort played a crucial role during the Sikh Empire and later under British rule.

Spread over 43 acres, Gobindgarh Fort now serves as a vibrant cultural hub. It houses several attractions, including the Toshakhana, which once stored the famous Koh-i-Noor diamond, and various museums that display the rich history of Punjab and the fort itself. Visitors can enjoy live performances like Bhangra and Gatka, and witness a 7D show, "Sher-e-Punjab," depicting the life of Maharaja Ranjit Singh.

The fort also features a well-maintained bazaar, where traditional Punjabi cuisine and crafts are available. A light and sound show in the evening further enhances the visitor experience. Gobindgarh Fort stands as a testament to Punjab's rich heritage, offering a blend of history, culture, and entertainment.</p>
            </div>
            <Link to="/Booking" >
            <div className='flex items-center justify-center'> <button className='py-2 bg-[#e38e3d] text-white  px-4 mt-10 w-[40%] rounded-3xl'>Book Now</button></div></Link>
             
            <h1 className='text-[2.5rem] mt-20 font-SignikaNegative font-semibold text-slate-600'>Other Packages</h1>
            <div className='flex package-container  gap-10 justify-center  ' >
                <AmritsarDay1/>
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

export default AmritsarDay2Details
