import React from 'react'
import Logo from '../Images/Logo.png'
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <div className='p-[15px] md:p-[1vw] bg-[#9C9CBD] text-center '> 
      {/* header */}
      <img src={Logo}  alt="logo" className='w-[50px] h-[50px] md:w-[4vw] md:h-[4vw] ml-auto mr-auto' />
      <div className='flex justify-center gap-[20px] md:gap-[2vw]'>
      <Link to='/'><p className='text-white hover:text-orange-500 text-[15px] md:text-[1vw]'>Home</p></Link> 
      <Link to='/gallery'><p className='text-white hover:text-orange-500 text-[15px] md:text-[1vw]'>Gallery</p></Link> 
      <Link to='/contact'><p className='text-white hover:text-orange-500 text-[15px] md:text-[1vw]'>Contact</p></Link>
      </div>
    </div>
  )
}

export default Header
