import { useLottie, useLottieInteractivity } from "lottie-react";
import Phoi from "../Assets/Lotties arrow/phoi.json";

const style = {
  width: "100%",
};

const options = {
  animationData: Phoi,
};

const PhoiAnim = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 99],
      },
    ],
  });

  return Animation;
};

export default PhoiAnim;