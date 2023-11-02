import React from "react";
import LaoDemo from '../Assets/Pics/Laodemo.mp4'
import laovideo from '../Assets/Pics/Untitled.mp4'

import Lottie from "lottie-react";

function HeroSection() {
  return (
    
      <video width='500' height='300'>
          <source src={LaoDemo} />
      </video>

  );
}

export default HeroSection;
