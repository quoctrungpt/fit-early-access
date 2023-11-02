import { useLottie, useLottieInteractivity } from "lottie-react";
import arrow9 from "../Assets/Lotties arrow/9-arrow.json"

const style = {
  width: "100%",
};

const options = {
  animationData: arrow9,
};

const Sec9Lottie = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        //FIXME:
        visibility: [0, 1],
        type: "seek",
        frames: [0, 100],
      },
    ],
  });

  return Animation;
};

export default Sec9Lottie;