import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-[#2c292f] p-[15px] md:p-[1vw] text-center'>
      <p className='text-[#92999f] text-[16px] md:text-[1.2vw] mb-[7px] md:mb-[.5vw]'>© 2021 Streethotrod Pvt. Ltd.</p>
      <div className='flex gap-[15px] md:gap-[2vw] justify-center  my-[15px] md:my-[1vw]'>
        <FaLinkedinIn className='text-[#ffffff] w-[15px] h-[15px] md:w-[1vw] md:h-[1vw] hover:text-black'/>
      <CgMail className='text-[#ffffff] w-[15px] h-[15px] md:w-[1vw] md:h-[1vw] hover:text-black'/>
      <FaWhatsapp className='text-[#ffffff] w-[15px] h-[15px] md:w-[1vw] md:h-[1vw] hover:text-black'/>
      <FaYoutube className='text-[#ffffff] w-[15px] h-[15px] md:w-[1vw] md:h-[1vw] hover:text-black'/>

      </div>
    </div>
  )
}

export default Footer
