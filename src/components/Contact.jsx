import React from 'react'
import Header from './Header'
import Footer from './Footer'
import contactUs from '../Images/contactUs.jpg'

function Contact() {
  return (
    <div>
        <Header/>
        <hr className='bg-white'/>
        <h1 className='bg-[#9C9CBD] text-center p-[30px] md:p-[2vw] text-[30px]  md:text-[3vw] font-[500]'>I'd love your feedback!</h1>
       
       <img src={contactUs} alt="" className='w-[100vw]' />
     
       <div>
        
       </div>
        <Footer />
    </div>
  )
}

export default Contact
