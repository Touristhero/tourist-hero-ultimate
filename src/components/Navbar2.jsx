import React, { useState ,useEffect} from 'react'
import logo from '../assets/logos/tourist-hero-logo.png'
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom'
import Home from './Home/Home';
import CuratedTours from './CuratedTours';
import AboutUs1 from './AboutUsMain/AboutUs1';
import Review from './Review/Review';
import Gallery from './Gallery/Gallery';
import ContactUs from './ContactUs/ContactUs';
import HireTaxiServices from './TaxiServices/HireTaxiServices';
const Navbar2 = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen)
    }

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <>
   
   <header className='  '>
     <div className='container   '>
         <nav className={`fixed top-0 left-0 w-full py-3 px-7 transition-colors duration-300 ${
        scrolled ? 'bg-white ' : 'bg-transparent ' 
      }`} >
            <div className='logo z-10'>
                <img className='w-40' src={logo} alt="logo" />
               
            </div>
            <ul className={isOpen ? "nav-links active" : "nav-links  transition-all duration-300 ease-in-out "}>
            <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/AboutUs1"> About Us </Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/AboutUs1"> About Us </Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/CuratedTours">Curated Tours </Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`} ><Link to="/HireTaxiServices">Taxi Services </Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/CuratedTours">Gallery </Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/CuratedTours">Guest Reviews</Link></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><Link to="/CuratedTours">Contact Us </Link></li>

            </ul>

            
            <div className="icon z-10">
            <FaBars onClick={toggleMenu} />
            </div>
         </nav>
    </div>
   </header>
   
   </>
  )
}

export default Navbar2
