import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from '../Pages/MobileNav'
import useScrollDirection from '../useScrollDirection'

function Header() {
  
  const scrollDirection = useScrollDirection()

  return (

    <div className={`bg-white sticky top-0  w-full flex flex-row justify-between items-center p-5 z-30 ${scrollDirection === "down" ? "-top-24" : "top-0"}transition-all duration-500}`} >

    
      <Link to={'/'}>
      <h1 className='font-primary text-3xl'> Chuyện về Lao </h1>
      </Link> 
      
      <MobileNav></MobileNav>
    </div>
  )
}

export default Header