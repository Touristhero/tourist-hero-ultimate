import React, { useState } from 'react'
import logo from '../assets/logos/tourist-hero-logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu =() =>{
        setIsOpen(!isOpen)
    }
  return (
   <>
   <header className='  '>
     <div className='container sticky top-0 z-50 overflow-y:scroll rounded-br-3xl rounded-bl-3xl  shadow-md  '>
         <nav >
            <div className='logo z-10'>
                <img className='w-40' src={logo} alt="logo" />
               
            </div>
            <ul className={isOpen ? "nav-links active" : "nav-links z-10 transition-all duration-300 ease-in-out"}>
                <li><a href="/Home">Home</a></li>
                <li><a href="/CuratedTours">Curated Tours</a></li>
                <li><a href="/TaxiServices">Taxi Services</a></li>
                <li><a href="/Gallery">Gallery</a></li>
                <li><a href="/AboutUs">About Us</a></li>
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

export default Navbar
