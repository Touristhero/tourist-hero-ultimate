import React, { useState } from 'react'
import Navbar2 from '../Navbar2'
import photo from '../../assets/images/WebsiteImages/goldenTempleNight.jpeg'
import Review from '../Review/Review'
import ImageGallery from '../Gallery/ImageGallery'
import AboutUs from '../AboutUs'
import Footer from '../Footer'
import Swal from 'sweetalert2'
import GuestReview from '../Review/GuestReview'

const ContactUs = () => {
    
    const [message, setMessage] = useState('');
    
      const onSubmit = async (event) => {
    
        
      
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "79b69c62-ac86-4f37-bfa1-884cf11a4686");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Your queries are important",
            text: "We are happy to connect with you",
            icon: "success"
          });
        }
        else {
            setMessage('There was an error submitting the form. Please try again.');
          }
        
      };
  return (
   <>


     <div className=' booking-container flex mt-20 px-16 py-10'>

     <div className=''>
      <h1 className='w-[90%] booking-heading  leading-[4rem] text-5xl font-semibold   text-slate-500 font-SignikaNegative '>Get In Touch With Us For An <span className='booking-heading text-5xl font-bold text-orange-600  font-SignikaNegative' > Incredible  Experience </span></h1> 
      <form onSubmit={onSubmit} className='mt-5  '>
      
      <div className='flex booking-child '>
          
      <input placeholder='Your First Name' required className='border-2 w-[40%] border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' name='First Name' type="text" />
        <input placeholder='Your Last Name' required className='input-child border-2 w-[40%] ml-3 border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' name='Last Name' type="text" />
      </div>
      <input placeholder='Your Email Address' name='Email Address' required className='border-2 w-[82%] mt-5  border-gray-300 rounded outline-none 
       focus:border-orange-200  focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' type="email" />

       <h1 className='mt-5 text-slate-600 '>Your Message</h1>
      <textarea cols="30" name="message" className='border-2 w-[82%]   border-gray-300 rounded outline-none 
       focus:border-orange-200  focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2  text-slate-600 py-1  ' placeholder='Enter your message' id=""></textarea>
       <h1 className='mt-5 text-slate-600 '>Select the dates</h1>
        <div className='flex booking-child '>
       <input required className='border-2 w-[40%] border-gray-300 rounded outline-none 
       focus:border-orange-200 focus:outline-none focus:shadow-lg focus:shadow-orange-100 px-2 py-1 text-slate-600 ' name='date' type="date" />
         
         <select name="Number Of Person" className='input-child border-2 w-[40%] ml-3 px-3 py-2 rounded ' id="">
          <option value="NumberOfPerson" selected disabled>Number of person</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="morethat10">More than 10</option>

         </select>
       </div>
       <select required  name="transportation" className='border-2 w-[82%] mt-5 px-3 py-2 rounded '  id="">
        <option value="Choose Transportation" selected disabled> Choose Transportation</option>
        <option value="">Swift Dzire (3 seater)</option>
        <option value="">Toyoto Etios (3 seater) </option>
        <option value="">Innova Crysta (6 seater)</option>
        <option value="">Tempo Traveller 12 seater</option>
        <option value="">Tempo Traveller 17 seater</option>
        <option value="">Without Any Transportation</option>

      </select>
      <button type='submit' onSubmit={onSubmit}  className='w-[82%] bg-[#e38e3d] mt-10 text-lg py-2 font-OpenSans text-white rounded'>Submit </button>
      </form>
       
      </div>
      {/* {message && (
       
        <p className="mt-4  ">{message}</p>
      
      )} */}
    

      <img className='w-[50%] rounded-lg object-cover' src={photo} alt="" />
      {/* <h1 className='w-[60%] px-3 text-[4vw]  font-SignikaNegative text-center mt-2 text-oran'>You are just few clicks <span className='text-orange-600' >away from us.</span></h1> */}
     </div>
     <GuestReview/>
      <ImageGallery/>
      <AboutUs/>
      <Footer/>
   </>
  )
}

export default ContactUs
