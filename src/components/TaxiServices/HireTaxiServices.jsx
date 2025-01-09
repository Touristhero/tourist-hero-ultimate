import React from 'react'
import TaxiServices from '../TaxiServices'
import photo1 from '../../assets/images/WebsiteImages/aman-pickup.jpg'
import photo2 from '../../assets/TaxiImages/innova-crysta.png'
import photo3 from '../../assets/TaxiImages/swift-dzire2.png'
import photo4 from '../../assets/TaxiImages/12-seater.png'
import photo5 from '../../assets/TaxiImages/17-seater.png'
import photo6 from '../../assets/TaxiImages/etios png.png'



import Navbar2 from '../Navbar2'
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import ImageGallery from '../Gallery/ImageGallery'
import Review from '../Review/Review'
import AboutUs1 from '../AboutUsMain/AboutUs1'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import ContactUs from '../ContactUs/ContactUs'


const HireTaxiServices = () => {
  return (
 <> 
       <div>
       <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Hire Taxi Services </h1>
   
       <div className='p-14 taxi-container flex items-center justify-center  '>
              <img className='w-[35%]  rounded-lg' src={photo1} alt="" />
              <div className='flex flex-col items-center  '>
              <p className=' w-[80%] text-[1.2rem] leading-[2] font-light font-SignikaNegative text-lg text-slate-600 '>Tourist Hero offers exceptional tour experiences and reliable taxi services in Amritsar and beyond. Our extensive taxi services include a wide range of vehicles such as comfortable Sedans, spacious SUVs, and convenient Tempo Travellers, catering to all travel needs. Our services extend to nearby destinations like Dharamshala, Dalhousie, and other beautiful places in Himachal Pradesh. Whether you're planning a serene getaway or an adventurous trip, Tourist Hero guarantees a hassle-free journey with our professional drivers and well-maintained vehicles.</p>
              <button className='bg-orange-400   w-[50%] px-7 py-2  mt-8  rounded-3xl text-white'>GET QUOTE</button>
              </div>
            </div>

            <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Our Fleets </h1>

            <div className=' fleet-container grid grid-cols-4 px-20 mt-10 gap-4'>
            <div className=' fleet-child px-2 py-3 bg-zinc-300 rounded-lg flex flex-col'>
                    <img className='w-[100%] ' src={photo2} alt="" />
                    <div className='flex items-center flex-col justify-center mt-5'>
                    <h1 className='text-slate-600 text-center  text-xl font-semibold'>Innova Crysta</h1>

                    <button className='mt-4 text-center bg-[#e38e3d] px-6 py-2 text-white rounded '><Link to="/ContactUs" >Get Quote</Link></button>
                    </div>
                </div>
                <div className=' fleet-child px-2 py-1 bg-zinc-300 rounded-lg flex flex-col'>
                    <img className='w-[84%] ml-6 ' src={photo3} alt="" />
                    <div className='flex items-center flex-col justify-center mt-6 '>
                    <h1 className='text-slate-600 text-center  text-xl font-semibold'>Swift Dzire</h1>

                    <button className='mt-4 text-center bg-[#e38e3d] px-6 py-2 text-white rounded '><Link to="/ContactUs" >Get Quote</Link></button>
                    </div>
                </div>
                <div className='fleet-child px-2 py-0 bg-zinc-300 rounded-lg flex flex-col'>
                    <img className='object-cover w-[93%] ml-4' src={photo6} alt="" />
                    <h1 className='text-slate-600 text-center text-xl font-semibold'>Toyoto Etios </h1>
                    <div className='flex items-center justify-center'>
                    <button className='mt-4 text-center bg-[#e38e3d] px-6 py-2 text-white rounded '><Link to="/ContactUs" >Get Quote</Link></button>
                    </div>
                </div>

                <div className=' fleet-child px-2 py-1 bg-zinc-300 rounded-lg flex flex-col'>
                    <img className='w-[80%] ml-6 ' src={photo4} alt="" />
                    <div className='flex items-center flex-col justify-center '>
                    <h1 className='text-slate-600 text-center  text-xl font-semibold'>Swift Dzire</h1>

                    <button className='mt-4 text-center bg-[#e38e3d] px-6 py-2 text-white rounded '><Link to="/ContactUs" >Get Quote</Link></button>
                    </div>
                </div>

            </div>

            
         
            
    </div>

    <CuratedTours/>
    <Package/>
    <ImageGallery/>
    <Review/>
    <AboutUs/>
    <Footer/>
 </>
  )
}

export default HireTaxiServices
