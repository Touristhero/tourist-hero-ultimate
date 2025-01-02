import React from 'react'
import Navbar from './Navbar'
import splitStringUsingRegex from '../utils/SplitStringUsingRegex'


const heading = 'Welcome to Tourist Hero'
const description = '"Tourist Hero" managing an innovative tour agency. With a passion for showcasing the cultural, historical, and culinary wonders of Amritsar, the Tourist Hero takes pride in curating exceptional experiences for travelers.'

const HeroSection = () => {
    const headingChars = splitStringUsingRegex(heading)
    const descriptionChars = splitStringUsingRegex(description)

    console.log('Simple split:', description.split(''));
    console.log('Split by Regex :', descriptionChars)
  return (
    < >
    <div className='hero-section '>
    <Navbar />
    <div className='content z-10 '>
      <h2 className='text-white text-center text-5xl font-semibold mb-3'>{heading}</h2>
      <p className='text-white text-lg text-center'> {description} </p>
      <div className='flex items-center justify-center'>
      <button className='bg-white book-button hover:bg-[#e38e3d] 
      transition-all duration-300 ease-in-out px-4 py-2 mt-14 rounded-xl font-sans font-semibold w-1/2 '> BOOK YOUR TOUR NOW </button>
      </div>
    </div>
    </div>
    


    
    
    </>
  )
}

export default HeroSection
