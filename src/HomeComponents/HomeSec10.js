import React from 'react'
import Logo from '../Assets/Pics/logo.jpeg'

function HomeSec10() {
  return (
    <div className='h-screen bg-white flex flex-col items-center align-middle justify-center relative'>
    <div className=" items-center image-container absolute top-[45%]">
      <img className='scale-75' src={Logo} />

    </div>
    </div>
  )
}

export default HomeSec10