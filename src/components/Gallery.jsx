import React from 'react'
import Header from './Header'
import Footer from './Footer'
import data from '../data/data'
import pic1 from '../Images/pic1.jpg'
function Gallery() {
  return (
    <div>
        <Header/>
        <div className='bg-[#9C9CBD] py-[20px] md:py-[1vw]'>
            <hr className='bg-[#ffffff] mb-[20px] md:mb-[1vw]'  />
            <div className='flex flex-wrap gap-[25px] md:gap-[2vw]  justify-center '>
               {data.map((item ,id)=>(
            <div key={id} className='border w-[90%] md:w-[25vw] lg:w-[22vw] bg-white rounded-[1vw]'>
            <img src={item.img} className='w-[100%] rounded-[1vw]' alt="" />
            <div className='p-[20px] md:p-[1vw]'>
            <h2 className='text-[25px] md:text-[1.5vw] font-bolder'>{item.heading1}</h2>
            <h2 className='text-[20px] md:text-[1vw] font-bold'>{item.heading2}</h2>
            <p className='text-[15px] md:text-[1vw] '>{item.para}</p>
            <p className='text-[15px] md:text-[2vw] font-bold'>{item.pirce}</p>
            </div>
         
        </div> 
        ))} 
                {/* <div className='border w-[22vw] p-2'>
                    <img src={pic1} className='w-[100%] rounded-[1vw]' alt="" />
                    <h2>hello</h2>
                </div>  */}

                {/* <div className='border w-[22vw] p-2'>
                    <img src={pic1} className='w-[100%] rounded-[1vw]' alt="" />
                    <h2>hello</h2>
                </div> 

                <div className='border w-[22vw] p-2'>
                    <img src={pic1} className='w-[100%] rounded-[1vw]' alt="" />
                    <h2>hello</h2>
                </div> 

                <div className='border w-[22vw] p-2'>
                    <img src={pic1} className='w-[100%] rounded-[1vw]' alt="" />
                    <h2>hello</h2>
                </div>

                <div className='border w-[22vw] p-2'>
                    <img src={pic1} className='w-[100%] rounded-[1vw]' alt="" />
                    <h2>hello</h2>
                </div> */}
            </div>
        </div>
        {/* {data.map((item ,id)=>(
            <div key={id}>
                <img src={item.img} alt="" />
                {item.heading1}
            </div>
        ))} */}
        <Footer />
      
    </div>
  )
}

export default Gallery
