import React from "react";
import Lottie from "lottie-react";
import Sec9Pic from "../Assets/Pics/4.png";
import arrow9 from "../Assets/Lotties arrow/9-arrow.json";
import bg9 from "../Assets/Background/bg9.svg";
import Sec9Lottie from "../LottieAnimation/Sec9Lottie";

function HomeSec9() {
  return (
    <div
      className="section4-wrapper h-screen flex flex-col justify-start items-center relative bg-blue-200 overflow-hidden"
      style={{ backgroundImage: `url(${bg9})` }}
    >
      <div className="section4-main-wrap flex flex-col justify-start items-center relative mt-16 gap-2">
        {/* Logo Container */}
        <div className="logo-container flex flex-row pr-20">
          <div className="lottie-container scale-150 translate-y-[2rem] translate-x-[-3rem]">
          <Sec9Lottie />
          </div>
          <h1 className="logo-name font-primary font-bold text-[#04335D] text-[5.5rem] pl-3 leading-[5rem]">
            END TB
          </h1>
        </div>

        {/* Picture and lottie, text container */}
        <div className="picture-lottie-container relative flex flex-col gap-5 align-middle text-center pb-4">
          {/* Picture */}
          <div className="picture-holder w-full">
            <img className="object-fill" src={Sec9Pic} />
          </div>

          {/* Section Text */}
          <div className="text-container px-8 flex flex-col items-center gap-3 h-full">
            <h1 className="lead-text font-primary font-medium text-2xl text-white text-center">
              Re-Imagining TB Care (RTC) – HÀNH TRÌNH CHẤM DỨT LAO
            </h1>
            <p className="text-sec3 font-primary font-light text-xl text-white text-center">
              Dự án lấy con người làm trung tâm, mang lại sáng kiến thay đổi về
              thời gian, địa điểm và cách thức tiếp cận dịch vụ chăm sóc lao ở
              các quốc gia bị ảnh hưởng bởi bệnh lao, bao gồm Việt Nam.
            </p>
            {/* Button */}
            <div className="pill h-11 w-72 bg-[#FC4245] rounded-[40px] flex flex-col justify-center ">
              <button className="timhieu-button text-white font-primary text-xl italic">
                Tìm hiểu thêm về RTC tại Việt Nam
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSec9;
