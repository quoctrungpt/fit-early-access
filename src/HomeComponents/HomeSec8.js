import React from "react";
import Lottie from "lottie-react";
import arrow8 from "../Assets/Lotties arrow/8-arrow.json";
import Sec8Fix from "../Assets/Pics/sec8-fix.png";
import { useLottie, useLottieInteractivity } from "lottie-react";
import Sec8Lottie from "../LottieAnimation/Sec8Lottie";

function HomeSec8() {
  return (
    <div className="section5-wrapper h-screen flex flex-col justify-start items-center relative bg-[#FFCB36] overflow-hidden">
      <div className="section5-box-wrap flex flex-col justify-start items-center mt-[5rem] gap-2">
        {/* <div className="first-text font-primary text-violet-600 text-2xl">
          Mỗi hành trình là một câu chuyện!
        </div> */}
        <div className="box-text h-[24rem] w-72 bg-[#FFF7E2] rounded-[40px] flex flex-col justify-start items-center gap-4">
          <h1 className="first-text font-primary text-violet-600 text-2xl text-center px-4 pt-4">
            Mỗi hành trình là một câu chuyện!
          </h1>
          <p className="text-center justify-center px-3 font-primary text-2xl text-[#FF561D]">
            Cùng trải qua một căn bệnh, mỗi người lại có những câu chuyện riêng
            để kể lại. Nhưng để đến với cái kết có hậu, họ đều có những “công
            thức” chung.
          </p>
          {/* Button */}
          <div className="pill h-11 w-40 bg-[#5D287A] rounded-[40px] flex flex-col justify-center pt04 ">
            <button className="timhieu-button text-white font-primary text-xl">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
       {/* Picture */}
       <div className="picture-holder absolute bottom-0">
            <img className="scale-100" src={Sec8Fix} />
          </div>
          {/* Lottie Animation */}
          <div className="lottie-container absolute top-[80%] scale-125 translate-x-[-6.5rem]">
            <Sec8Lottie />
          </div>
    </div>
  );
}

export default HomeSec8;
