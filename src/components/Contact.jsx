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
     
       <div className='py-10 w-[90%] md:w-[60vw] ml-auto mr-auto'>
        <form action="">
          <div className='flex gap-[50px] md:gap-5 justify-between mb-[20px] md:mb-[1.5vw]'>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='Enter Your First Name' className='md:w-[40vw] border-none focus:outline-none focus:border-none shadow-sm md:p-1 p-[10px] shadow-gray-500 md:h-[2vw] h-[40px] w-[60%]'/>
          </div>


          <div className='flex gap-[50px] md:gap-5 justify-between mb-[20px] md:mb-[1.5vw]'>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Enter Your Last Name' className='md:w-[40vw] border-none focus:outline-none focus:border-none shadow-sm md:p-1 p-[10px] shadow-gray-500 md:h-[2vw] h-[40px] w-[60%]'/>
          </div>



          <div className='flex gap-[50px] md:gap-5 justify-between mb-[20px] md:mb-[1.5vw]'>
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder='Enter Your Email Address' className='md:w-[40vw] border-none focus:outline-none focus:border-none shadow-sm md:p-1 p-[10px] shadow-gray-500 md:h-[2vw] h-[40px] w-[60%]'/>
          </div>
          <div className='flex justify-end'>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition ">
  Submit
</button>
          </div>
          

        </form>
       </div>
        <Footer />
    </div>
  )
}

export default Contact
