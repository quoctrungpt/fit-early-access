import { useLottie, useLottieInteractivity } from "lottie-react";
import arrow5Final from "../Assets/Lotties arrow/arrow5-final.json"

const style = {
  width: "100%",
};

const options = {
  animationData: arrow5Final,
};

const Sec5Lottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 110],
      },
    ],
  });

  return Animation;
};

export default Sec5Lottie;