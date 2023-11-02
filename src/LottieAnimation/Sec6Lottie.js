import { useLottie, useLottieInteractivity } from "lottie-react";
import arrow6 from "../Assets/Lotties arrow/6-arrow.json"

const style = {
  width: "100%",
};

const options = {
  animationData: arrow6,
};

const Sec6Lottie = () => {
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

export default Sec6Lottie;