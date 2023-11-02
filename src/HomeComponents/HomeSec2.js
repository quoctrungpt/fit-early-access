import React from "react";
import Phoi from "../Assets/Lotties arrow/phoi.json";
import Lottie from "lottie-react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import PhoiAnim from "../LottieAnimation/PhoiAnim";

function HomeSec2() {
  return (
    <div className="section2-wrapper flex flex-col h-screen w-full bg-[#5B153F] overflow-hidden">
      {/* <div className="main-wrapper flex-1 flex-col bg-[#5B153F]"> */}

      <div className="PhoiLottie-container translate-y-[-2rem]">
        {/* Lottie */}
        <PhoiAnim />
      </div>
      {/* <div className="lottie-wrapper">
        <Lottie animationData={Phoi}></Lottie>
      </div> */}

      <div className="text-wrapper pl-5 pr-5 gap-y-3 flex flex-col justify-center items-center">
        <h1 className="lead-text font-primary text-2xl text-[#93D8E6]">
          Bạn có biết
        </h1>
        <h1 className="lao-text font-primary font-medium text-5xl text-[#F2AAAE] text-center">
          {" "}
          “LAO”, CHỨ CHƯA CHẮC “LAO PHỔI”!
        </h1>
        <p className="lao-paragraph font-primary font-light text-white text-center text-2xl ">
          Nếu người nhiễm lao có hệ miễn dịch kém, vi khuẩn lao có thể sinh
          trưởng và di chuyển tới các bộ phận khác, dẫn tới lao xương, lao màng
          não, lao hạch…
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}

export default HomeSec2;
