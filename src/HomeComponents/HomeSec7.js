import React from "react";

import Lottie from "lottie-react";
import arrow7 from "../Assets/Lotties arrow/7-arrow.json";
import Sec7Pic from "../Assets/Pics/sec7.png";
import bg7 from "../Assets/Background/bg7.svg";
import Sec7Lottie from "../LottieAnimation/Sec7Lottie";

function HomeSec7() {
  return (
    <div
      className="section7-wrapper h-screen flex flex-col justify-start items-center relative bg-[#0E51AB] overflow-hidden
      "
      style={{ backgroundImage: `url(${bg7})` }}
    >
      <div className="section7-main-wrap flex flex-col justify-start items-center mt-24 gap-2">
        <div className="first-text font-primary text-white text-2xl">
          Chấm dứt kỳ thị, chấm dứt bệnh lao!
        </div>
        <p className="long-content font-primary text-white text-2xl text-center px-4 pt-4 pb-4 ">
          Sự kỳ thị tạo ra rào cản lớn trên hành trình chấm dứt lao. Ai cũng có
          thể mắc lao, tại sao không hỗ trợ và chia sẻ cùng nhau để đẩy lùi căn
          bệnh này?
        </p>

        {/* Button */}
        <div className="pill h-11 w-40 bg-white rounded-[40px] flex flex-col justify-center pt04 ">
          <button className="timhieu-button text-[#0E51AB] font-primary text-xl">
            Tìm hiểu thêm
          </button>
        </div>
      </div>

      {/* Picture */}
      <div className="picture-holder absolute bottom-0">
        <img className="scale-100" src={Sec7Pic} />
      </div>
      <div className="lottie-container absolute top-3/4 scale-150 translate-x-[9rem]">
        {/* Lottie */}
        <Sec7Lottie />
      </div>
    </div>
  );
}

export default HomeSec7;
