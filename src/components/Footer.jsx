import React from 'react'
import logo from '../assets/logos/tourist-hero-logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Home from './Home/Home';
import AboutUs1 from './AboutUsMain/AboutUs1';
import CuratedTours from './CuratedTours';
import HireTaxiServices from './TaxiServices/HireTaxiServices';
import Gallery from './Gallery/Gallery';
import Review from './Review/Review';
import ContactUs from './ContactUs/ContactUs';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
   <>
    <div className='mt-32 footer-container  grid grid-cols-3 w-full px-4 py-5 bg-gray-800 bg-opacity-90 '>
      
      <div className='lg:px-10   lg:py-5 sm:px-3 md:px-3'>
      <img className='w-[11rem] z-100' src={logo} alt="" />
         <p className='text-white w-[100%] mt-2 text-light leading-7'>With a passion for showcasing the cultural, historical, and culinary wonders of Amritsar, the Tourist Hero takes pride in curating exceptional experiences for travelers.</p>
         
         <div className='flex items-center justify-start px-1 gap-5 py-2    '>
         <a target='blank' href="https://www.facebook.com/touristheroamritsar/"><FaFacebook className='text-white text-2xl transition-colors duration-300 ease-in-out hover:text-orange-400' /></a>
        <a target='blank'  href="https://www.instagram.com/touristhero/"> <FaInstagram  className='text-white text-2xl transition-colors duration-300 ease-in-out hover:text-orange-400' /></a>
        <a target='blank'  href="https://www.tripadvisor.in/AttractionProductReview-g303884-d27119708-Amritsar_Local_Sightseeing_Private_Tour-Amritsar_Amritsar_District_Punjab.html"><FaTripadvisor className='text-white text-2xl transition-colors duration-300 ease-in-out hover:text-orange-400' /></a>
        <a target='blank'   href="https://www.google.com/search?q=tourist+hero+&sca_esv=ebde43d0a45f2ea2&ei=mZh7Z77VOquX4-EPzdToqQk&ved=0ahUKEwj-hY3q2uCKAxWryzgGHU0qOpUQ4dUDCBA&uact=5&oq=tourist+hero+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDXRvdXJpc3QgaGVybyAyDhAuGIAEGMcBGI4FGK8BMgYQABgWGB4yBhAAGBYYHjIIEAAYFhgKGB4yBhAAGBYYHjIGEAAYFhgeMgIQJjILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIdEC4YgAQYxwEYjgUYrwEYlwUY3AQY3gQY4ATYAQFIxxFQ0AVY0AVwAngAkAEAmAHbAaAB2wGqAQMyLTG4AQPIAQD4AQGYAgSgApwLwgIOEAAYgAQYsAMYhgMYigXCAgsQABiABBiwAxiiBJgDAIgGAZAGBLoGBggBEAEYFJIHCTIuMC4xLjctMaAHhgo&sclient=gws-wiz-serp"><FaGoogle className='text-white text-2xl transition-colors duration-300 ease-in-out hover:text-orange-400 ' />        </a>
         </div>

       
      </div>
      <div className='flex footer-child sm:justify-start flex-col items-center'>
            <h1 className='text-white  mt-3 font-SignikaNegative text-xl'>Useful Links</h1>
            <ul className=' text-white mt-4 font-SignikaNegative  '>
            <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/">Home</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/AboutUs">About Us</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/CuratedTours">Curated Tours</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/HireTaxiServices">Taxi Services</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/Gallery">Gallery</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/Review">Guest Review</Link></li>
                <li className='transition-colors duration-300 ease-in-out hover:text-orange-400'><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
         </div>

         <div className='flex flex-col px-3 py-3  items-start'>
            <h1 className='text-white  mt-3 font-SignikaNegative text-xl' >Contact Us</h1>
            <div className='flex mt-3 items-center  gap-4 '>
            <MdLocationOn  className='text-white text-xl ' />
            <h1 className='text-white w-[100%] '>In Hotel Amardeep, Ghee Mandi Chowk, opp. Bhushanpura, Kalsar Market, Katra Ahluwalia, Amritsar, Amritsar Cantt., Punjab 143001</h1>
            {/* <BsFillTelephoneFill />
            <MdEmail /> */}
            </div>

            <div className='flex mt-4 ml-1 items-center justify-start gap-4 '>
            <BsFillTelephoneFill className='text-white ' />
            <h1 className='text-white w-[100%]'> +91 85281 30002  </h1>
            </div>

            <div className='flex mt-3 items-center justify-start ml-1  gap-4 '>
            <MdEmail className='text-white ' />
            <h1 className='text-white w-[80%] '>touristheroamritsar@gmail.com</h1>
            
            </div>

         </div>
       
          
    </div>
     <div className='bg-gray-800 bg-opacity-90 '>
        <hr className='px-3 py-2' />
        <h1 className='text-white py-2 px-2'>Tourist Hero Private Limited © 2025 All Rights Reserved</h1>
     </div>
   </>
  )
}

export default Footer
