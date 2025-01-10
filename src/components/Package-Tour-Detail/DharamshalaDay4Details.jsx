import React from 'react'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/Dharamshala-India.jpg'
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
const DharamshalaDay4Details = () => {
  return (
    <div>

   <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Curated Tour </h1>
    
     <div className=' package-container1 flex justify-center  gap-20 mt-20  px-8'>
         
         
                 <div className='relative package-child1 flex justify-center rounded-lg w-[60%] '>
                     <h1 className='absolute package-day-head p-5 text-7xl font-SignikaNegative font-semibold
                     ml-10 mt-20 text-white z-10'>DHARAM SHALA DAY 4</h1>
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
                        <h1 className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600' >Dalai Lama Temple </h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Church of St. John</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Naddi View Point</h1>
                        <h1  className='lg:text-[1.9rem] md:text-[1.5rem] font-bold font-SignikaNegative text-slate-600'    >Bhagsu Nag Waterfall</h1>
                    </div>
                </div>


         
           
          
        </div>

        <div className=' package-container2 mt-12 p px-8  '>
            <h1 className='text-[2.5rem] special-h1 font-SignikaNegative font-semibold text-slate-600'>Dharamshala Local Sightseeing Tour Day 4</h1>
            <span className='text-slate-600 text-[1rem]'>On Day 4 of your Amritsar trip, you can head to Dharamshala for sightseeing, which is about 200 kilometers away and takes roughly 4-5 hours to reach. After exploring key attractions like the Dalai Lama Temple, Bhagsu Nag Waterfall, and Naddi View Point, you can return to Amritsar on the same day. However, if you prefer to explore Dharamshala at a more relaxed pace, you might consider extending your stay for a day or two.</span>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Dalai Lama </h2>
            <p className='leading-9 text-lg text-slate-600'> The Dalai Lama Temple, also known as Tsuglagkhang Complex, is a significant spiritual and cultural site located in McLeod Ganj, near Dharamshala in Himachal Pradesh, India. This temple complex serves as the official residence of His Holiness the 14th Dalai Lama and is a central place for Tibetan Buddhism.

Established in the 1960s after the Dalai Lama fled to India following the Chinese invasion of Tibet, the temple complex includes several important structures such as the Tibetan Museum, Namgyal Monastery, Kalachakra Temple, and the Dalai Lama's residence. The main prayer hall houses statues of Buddha, Avalokiteshvara, and Guru Rinpoche. The complex is a hub for religious discourse and meditation, attracting Buddhist scholars, practitioners, and tourists from around the world.

Visitors can participate in daily prayer sessions, attend teachings by the Dalai Lama when he is in residence, and engage in silent meditation. The temple also hosts numerous festivals and rituals throughout the year, reflecting the vibrant Tibetan culture. Surrounded by the scenic beauty of the Dhauladhar range, the Dalai Lama Temple offers a serene and spiritual retreat, making it a must-visit for those seeking peace and enlightenment. </p>
            </div>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Church of St. Johnh</h2>
            <p className='leading-9 text-lg text-slate-600'>

            St. John in the Wilderness Church is a historic Anglican church located in McLeod Ganj, near Dharamshala, Himachal Pradesh. Built in 1852, this serene church is nestled amidst dense deodar forests, offering a tranquil retreat for visitors and worshippers alike. It is dedicated to John the Baptist and is renowned for its stunning neo-Gothic architecture.

One of the church's most notable features is its exquisite Belgian stained-glass windows, which were donated by Lady Elgin, the wife of Lord Elgin, the Viceroy of India. Lord Elgin himself was buried here in 1863, and his memorial can be found within the church grounds, making it a site of historical significance.

Despite being damaged in the 1905 Kangra earthquake, St. John in the Wilderness Church retains much of its original charm and continues to serve as a place of worship. The church's peaceful ambiance, coupled with its rich history and beautiful surroundings, makes it a popular destination for tourists and history enthusiasts visiting Dharamshala.
</p>
            </div>
            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'> Naddi View Point </h2>
            <p className='leading-9 text-lg text-slate-600'> Naddi View Point is a picturesque destination located near Dharamshala, in the quaint village of Naddi. Situated at an altitude of approximately 2000 meters, it offers breathtaking panoramic views of the Dhauladhar mountain range. This serene viewpoint is a perfect spot for nature lovers and trekkers who seek solace away from the bustling city life.

Naddi View Point is particularly famous for its stunning sunrise and sunset vistas, where the snow-capped peaks glow with hues of gold and pink, creating a mesmerizing landscape. On clear days, visitors can also catch glimpses of the Kangra Valley below and the winding River Beas in the distance.

The viewpoint is easily accessible by road, making it a convenient excursion for those staying in Dharamshala or McLeod Ganj. Several trekking trails originate from this point, offering adventurous paths through dense forests and quaint villages. Naddi View Point's tranquil environment and breathtaking scenery make it a must-visit destination for anyone exploring the Dharamshala region. </p>
       
            </div>

            <div className='px-10 package-container3 py-2'>
            <h2 className='mt-7  text-[1.8rem] font-SignikaNegative font-semibold text-orange-600'>Bhagsu Nag Waterfall</h2>
            <p className='leading-9 text-lg text-slate-600'>

            Bhagsu Nag Waterfall is a stunning natural attraction located near McLeod Ganj, about 2 kilometers from the Bhagsunath Temple in Dharamshala, Himachal Pradesh. Nestled amidst lush greenery, this waterfall is a popular destination for tourists and nature enthusiasts.

The waterfall cascades down from a height of about 20 meters, creating a beautiful and serene ambiance. The sound of the water gushing over the rocks, combined with the surrounding picturesque landscape, offers a refreshing escape from the hustle and bustle of daily life. During the monsoon season, the waterfall becomes even more majestic, with an increased flow of water enhancing its beauty.

Bhagsu Nag Waterfall is also a favorite spot for trekkers, as the trail leading to the falls offers stunning views of the Dhauladhar mountain range. Many visitors enjoy taking a dip in the cool, pristine waters or simply relaxing by the side of the falls. Nearby, several cafes and small eateries serve refreshments, allowing visitors to enjoy the scenic beauty while sipping on hot tea or coffee.

The waterfall's proximity to the Bhagsunath Temple adds a spiritual element to the visit, making Bhagsu Nag Waterfall a must-visit for those exploring the Dharamshala region
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
               <AmritsarDay3/>
               
            </div>
           
        </div>

        <CuratedTours/>
        <GuestReview/>
        <AboutUs/>
        <Footer/>
</div>
  )
}

export default DharamshalaDay4Details
