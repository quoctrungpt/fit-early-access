import React from "react";
import Lottie from "lottie-react";
import arrow5Final from "../Assets/Lotties arrow/arrow5-final.json";
import sec5Fix from "../Assets/Pics/sec5-fix.png";
import bg5 from "../Assets/Background/bg5.svg";
import Sec5Lottie from "../LottieAnimation/Sec5Lottie";

function HomeSec5() {
  return (
    <div
      className="section5-wrapper h-[100dvh] flex flex-col justify-start items-center relative bg-[#FFF7E2]
    "
      style={{ backgroundImage: `url(${bg5})` }}
    >
      <div className="section5-main-wrap flex flex-col justify-start items-center relative mt-24 gap-5">
        <div className="first-text font-primary text-[#0E51AB] text-2xl">
          “MÌNH CÓ ĐANG… NHIỄM LAO?”{" "}
        </div>

        {/* Container for text box, image and lotties */}
        <div className="content-container relative flex flex-col align-baseline items-center bg-[#0E51AB] rounded-[40px] h-[20rem] mx-10 gap-5 pt-5 px-6">
          {/* Text Box */}
          <div className="text-center justify-center px-3 font-primary text-2xl text-white">
            Dù chủ động sàng lọc sớm hay khám khi đã có triệu chứng, mọi người
            đều có thể tiếp cận các phương pháp phát hiện lao hiệu quả ngay từ
            tuyến y tế cơ sở. {/* Button */}
          </div>
          {/* Button */}
          <div className="pill h-11 w-40 bg-white rounded-[40px] flex flex-col justify-center ">
            <button className="timhieu-button text-[#0E51AB] font-primary text-xl">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </div>
      {/* Picture */}
      <div className="picture-holder bottom-0 absolute ">
        <img className="scale-100" src={sec5Fix} />
      </div>
      <div className="lottie-container absolute bottom-0">
        <Sec5Lottie />
      </div>
    </div>
  );
}

export default HomeSec5;
