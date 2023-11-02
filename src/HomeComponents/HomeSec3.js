import React from "react";
import Lottie from "lottie-react";
import Sec3Pic from "../Assets/Pics/1.png";
import dacam from "../Assets/Lotties arrow/dacam.json";
import Sec3Lottie from "../LottieAnimation/Sec3Lottie";
import bg3 from "../Assets/Background/bg3.svg";

function HeroSec3() {
  return (
    <div className="mobile-layout">
      {/* Mobile Layout */}
      <div
        className="section3-wrapper h-screen relative sm:hidden  "
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="wrapper flex flex-col justify-start items-center md:flex-row md:space-x-10 md:items-start md:mx-28 md:h-screen ">
          {/* Picture */}
          <div className="picture-holder md:relative absolute top-[3rem] scale-[0.6] md:scale-110 drop-shadow-2xl md:top-20 ">
            <img src={Sec3Pic} />
          </div>

          {/* Text and button Container */}
          <div className="text-button-container flex flex-col items-center md:w-[60%] ">
            {/* Text box */}
            <div className="mt-20 box-text h-32 w-72 md:h-28 md:w-96 justify-center bg-[#5D287A] rounded-[40px] flex items-center text-center font-primary font-medium text-[#A9D8CE] text-3xl p-3 ">
              GÓP 1 HÀNH ĐỘNG LÙI 1 BƯỚC LAO
            </div>

            {/* Section Text and Button */}
            <div className="text-container absolute bottom-0 flex flex-col items-center mb-5 md:mb-28 md:w-[50%] ">
              <p className="text-sec3 font-primary font-light text-xl md:text-3xl text-white text-center px-5 pb-3">
                Thêm 1 người tìm hiểu về lao là thêm 1 bước trên hành trình chấm
                dứt bệnh lao trong cộng đồng.
              </p>
              <p className="text-sec3 font-primary font-light text-xl md:text-3xl text-white text-center px-5">
                Hãy trở thành người lan tỏa thông điệp tích cực về lao qua thử
                thách của chiến dịch trên TikTok ngay thôi!
              </p>

              {/* Button */}
              <div className="pill h-11 w-40 md:w-52 bg-[#A9D8CE] rounded-[40px] flex flex-col justify-center mt-5 md:mt-10 ">
                <button className="timhieu-button text-violet-600 font-primary text-xl md:text-2xl">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
          </div>

          {/* Lottie */}
          <div className="lottie-container absolute top-[40%] scale-110 translate-x-[-3rem] md:scale-150 md:translate-x-[-9rem] ">
            <Sec3Lottie />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="desktop-layout hidden sm:block">
        This is a Desktop Layout
      </div>
    </div>
  );
}

export default HeroSec3;
