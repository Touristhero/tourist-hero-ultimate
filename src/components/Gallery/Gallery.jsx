import React, { useState } from 'react'
import Navbar2 from '../Navbar2'
import Photo1 from '../../assets/images/Gallery/galleryPhoto1.jpg'
import Photo2 from '../../assets/images/Gallery/galleryPhoto2a.jpg'
import Photo3 from '../../assets/images/Gallery/galleryPhoto3a.jpg'
import Photo4 from '../../assets/images/Gallery/galleryPhoto4.jpg'
import Photo5 from '../../assets/images/Gallery/galleryPhoto5.jpg'
import Photo6 from '../../assets/images/Gallery/galleryPhoto6.jpg'
import Photo7 from '../../assets/images/Gallery/galleryPhoto7.jpg'
import Photo8 from '../../assets/images/Gallery/galleryPhoto8.jpg'
import Photo9 from '../../assets/images/Gallery/galleryPhoto9.jpg'
import Photo10 from '../../assets/images/Gallery/galleryPhoto10.jpg'
import Photo11 from '../../assets/images/Gallery/galleryPhoto11.jpg'
import Photo12 from '../../assets/images/Gallery/galleryPhoto12.jpg'
import Photo13 from '../../assets/images/Gallery/galleryPhoto13.jpg'
import Photo14 from '../../assets/images/Gallery/galleryPhoto14.jpg'
import Photo15 from '../../assets/images/Gallery/galleryPhoto15.jpg'
import Photo16 from '../../assets/images/Gallery/galleryPhoto16.jpg'
import Photo17 from '../../assets/images/Gallery/galleryPhoto17.jpg'
import Photo18 from '../../assets/images/Gallery/galleryPhoto18.jpg'
import CuratedTours from '../CuratedTours'
import Package from '../Package'
import AboutUs from '../AboutUs'
import Footer from '../Footer'



const images = [
  Photo7,Photo4,Photo3,Photo5, Photo2,Photo12 , Photo9, Photo6,Photo8, Photo13 ,Photo10 ,Photo11,Photo17,Photo15,Photo16
]



const Gallery = () => {
      const[data,setData] = useState({img :'' , i:0})
    
      const viewImage = (img , i)=>{
        setData({img , i})
        console.log(img , 'Image was click')
      }
    
      const imgAction = (action)=>{
        let i = data.i ;
        if (action === 'next-image'){
          setData({img: images[i+1 ] , i:i+1 })
        }
        if (action === 'previous-image'){
          setData({img: images[i -1], i:i-1})
        }
        if(!action){
          setData({img:'',i:0})
        }
      }
  return (
    <>
  
    <div className='px-24 gallery-container1 '>
     
      <h1 className='text-5xl font-semibold mt-32 text-center text-slate-500 font-SignikaNegative '>Gallery </h1>
       
      {data.img && 
     <div
     className="fixed preview-container inset-0 bg-black bg-opacity-90 flex justify-center z-20 items-center"
     >  
     <button onClick={()=>imgAction('') } className=' absolute top-4 z-2  right-7 font-semibold font-SignikaNegative text-xl rounded  bg-white px-4 '>X</button>
     <button onClick={()=>imgAction('previous-image') } className=' previous-photo text-white bg-[#e38e3d] mr-5 px-4 py-2 rounded'>Previous</button>
        <img className="max-w-[90%] rounded-lg max-h-[90%] object-contain" src={data.img} alt="" />
        <button className='next-photo text-white bg-[#e38e3d] ml-5 px-4 py-2 rounded' onClick={()=>imgAction('next-image')}>Next</button>
     </div>
    }
    
    <h1 className='tour-heading mb-4 ml-[5.3rem] mt-24 text-3xl  text-slate-700 font-semibold font-sans'>Gallery (A Collection Of Unforgettable Memory )</h1>
    <div  className='p-7' >
        <div
              
            >
                <div className="grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-3"  >
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            className="w-[100%]  object-cover rounded-lg cursor-pointer  "
                            alt=""
                            onClick={()=> viewImage(image ,i )}

                        />
                    ))}
                </div>
            </div>
    </div>

    <div className='flex justify-center mt-10'>
     
      </div>
  
    </div>

     <CuratedTours/>
     <Package/>
     <AboutUs/>
     <Footer/>
    </>
  )
}

export default Gallery
