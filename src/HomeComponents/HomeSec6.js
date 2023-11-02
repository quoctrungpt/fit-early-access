import React from "react";
import Lottie from "lottie-react";
import arrow6 from "../Assets/Lotties arrow/6-arrow.json";
import Sec6Pic from "../Assets/Pics/sec6.png";
import bg6 from "../Assets/Background/bg6.svg";
import Sec6Lottie from "../LottieAnimation/Sec6Lottie";

function HomeSec6() {
  return (
    <div
      className="section6-wrapper h-screen flex flex-col justify-start items-center bg-[#A1DFD3] overflow-hidden"
      style={{ backgroundImage: `url(${bg6})` }}
    >
      <div className="section6-main-wrap flex flex-col justify-start items-center relative mt-16 gap-2">
        {/* Lead text */}
        <div className="first-text font-primary text-[#482687] text-2xl">
          Mắc lao không còn là mắc kẹt{" "}
        </div>
        {/* Picture and lottie container */}
        <div className="picture-lottie-container relative flex flex-col pb-4">
          {/* Picture */}
          <div className="picture-holder px-5 overflow-hidden">
            <img className="scale-125" src={Sec6Pic} />
          </div>

          {/* Lottie */}
          <div className="lottie-container  absolute bottom-0 scale-[1.4] translate-x-[-5rem] z-10">
            <Sec6Lottie />
          </div>
        </div>

        {/* Section Text */}
        <div className="text-container px-14 mt-14">
          <p className="text-sec3 font-primary font-light text-2xl text-white text-center">
            Dù là căn bệnh nguy hiểm, lao vẫn có thể chữa khỏi hoàn toàn nếu
            được phát hiện sớm và người mắc lao tuân thủ đúng hướng dẫn điều trị
            của bác sĩ.
          </p>
        </div>

        {/* Button */}
        <div className="pill h-11 w-40 bg-white rounded-[40px] flex flex-col justify-center mt-5 ">
          <button className="timhieu-button text-[#482687] font-primary text-xl">
            Tìm hiểu thêm
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSec6;
