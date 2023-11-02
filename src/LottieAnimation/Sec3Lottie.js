import { useLottie, useLottieInteractivity } from "lottie-react";
import sec3arrow from "../Assets/Lotties arrow/dacam.json"

const style = {
  width: "100%",
};

const options = {
  animationData: sec3arrow,
};

const Sec3Lottie = () => {
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

export default Sec3Lottie;