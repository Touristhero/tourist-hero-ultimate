import React, { useState } from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Photo1 from '../../assets/images/Gallery/galleryPhoto1.jpg'
import Photo2 from '../../assets/images/Gallery/galleryPhoto2a.jpg'
import Photo3 from '../../assets/images/Gallery/galleryPhoto3.jpg'
import Photo4 from '../../assets/images/Gallery/galleryPhoto4.jpg'
import Photo5 from '../../assets/images/Gallery/galleryPhoto5.jpg'
import Photo6 from '../../assets/images/Gallery/galleryPhoto6.jpg'
import Photo7 from '../../assets/images/Gallery/galleryPhoto7.jpg'
import Photo8 from '../../assets/images/Gallery/galleryPhoto8.jpg'
import Photo9 from '../../assets/images/Gallery/galleryPhoto9.jpg'
import Photo12 from '../../assets/images/Gallery/galleryPhoto12.jpg'




const images = [
  Photo3,Photo4,Photo12,Photo5, Photo7,Photo2
]





const ImageGallery = () => {
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
    // <div className='h-[100rem] '>
    //   <h1 className='tour-heading  ml-[5.3rem] mt-24 text-4xl  text-slate-600 font-semibold font-sans'>Gallery </h1>

    //   <div className='flex '>
    //     <img className='w-[33%] object-cover' src={Photo1} alt="" />
    //     <img className='w-[33%]' src={Photo2} alt="" />
    //   </div>

    // </div>
    <>
    
      {data.img && 
     <div
     className="fixed inset-0 bg-black bg-opacity-90 flex justify-center z-10 items-center"
     >  
     <button onClick={()=>imgAction('') } className=' absolute top-4 rounded right-7 font-semibold font-SignikaNegative text-xl rounded  bg-white px-4 '>X</button>
     <button onClick={()=>imgAction('previous-image') } className='text-white bg-[#e38e3d] mr-5 px-4 py-2 rounded'>Previous</button>
        <img className="max-w-[90%] rounded-lg max-h-[90%] object-contain" src={data.img} alt="" />
        <button className='text-white bg-[#e38e3d] ml-5 px-4 py-2 rounded' onClick={()=>imgAction('next-image')}>Next</button>
     </div>
    }
    
    <h1 className='tour-heading  ml-[5.3rem] mt-24 text-4xl  text-slate-600 font-semibold font-sans'>Gallery </h1>
    <div  className='p-7' >
        <div
              
            >
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"  >
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            className="w-full h-auto object-cover rounded-lg cursor-pointer  "
                            alt=""
                            onClick={()=> viewImage(image ,i )}

                        />
                    ))}
                </div>
            </div>
    </div>

    <button className='absolute left-[35%] rounded-3xl mt-10 text-xl px-8 text-white w-[30%] py-2 bg-[#e38e3d]'> More </button>
    </>
  )
}

export default ImageGallery
