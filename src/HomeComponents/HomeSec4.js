import React from "react";
import Lottie from "lottie-react";
import Sec4Pic from "../Assets/Pics/2.png";
import arrow4fix from "../Assets/Lotties arrow/arrow4-fix.json";
import bg4 from "../Assets/Background/bg4.svg";
import { CgArrowsExpandDownLeft } from "react-icons/cg";
import Sec4Lottie from "../LottieAnimation/Sec4Lottie";

function HomeSec4() {
  return (
    <div className="mobile-desktop">
      {/* Mobile version */}
    <div
      className="section4-wrapper h-screen flex flex-col justify-start items-center"
      style={{ backgroundImage: `url(${bg4})` }}
    >
      {/* Lead text  */}
  
      <div className="first-text font-primary text-[#284680] text-2xl my-6">
        Hôn, bắt tay, ăn uống
      </div>
      {/* Text box */}
      <div className="box-text h-32 w-72 bg-[#284680] rounded-[40px] flex items-center text-center font-primary font-medium text-white text-3xl p-5 ">
        KHÔNG KHIẾN BẠN BỊ LÂY NHIỄM
      </div>
      {/* Picture and lottie container*/}
      <div className="picture-lottie-container relative flex flex-col">
        {/* Picture */}
        <div className="picture-holder scale-[0.8] px-5">
          <img src={Sec4Pic} />
        </div>

        {/* Lottie */}
        <div className="lottie-container absolute bottom-0 scale-110 translate-x-[-3rem]">
          <Sec4Lottie />
        </div>
      </div>

      {/* Section Text */}
      <div className="text-container px-5 pb-5">
        <p className="text-sec3 font-primary font-light text-2xl text-white text-center">
          Vi khuẩn lao nằm trong phổi, chỉ khi người mắc lao hắt hơi hoặc ho mới
          khiến chúng bay ra ngoài, khiến người khác hít phải và lây nhiễm.
        </p>
      </div>

      {/* Button */}
      <div className="button-container mb-5">
      <div className=" pill h-11 w-40 bg-[#EF999F] rounded-[40px] flex flex-col justify-center ">
        <button className="timhieu-button text-white font-primary text-xl">
          Tìm hiểu thêm
        </button>
      </div>

      </div>
    </div>
      {/* Desktop Version */}
      <div className="desktop-version hidden lg:block lg:scale-150 lg:z-50">
        <img src={Sec4Pic} />
      </div>


    </div>

  )
}

export default HomeSec4;
