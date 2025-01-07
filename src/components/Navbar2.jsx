import React, { useState ,useEffect} from 'react'
import logo from '../assets/logos/tourist-hero-logo.png'
import { FaBars } from "react-icons/fa";

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
                <li   className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`} ><a href="/Home">Home</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><a href="/AboutUs">About Us</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><a href="/CuratedTours">Curated Tours</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`} ><a href="/TaxiServices">Taxi Services</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><a href="/Gallery">Gallery</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><a href="/GuestReview">Guest Review</a></li>
                <li className={` font-OpenSans transition-colors duration-300 ease-in-out hover:text-orange-600 ${
            scrolled ? 'text-slate-600 ' : 'text-slate-600'
          }`}><a href="/ContactUs">Contact Us</a></li>

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
