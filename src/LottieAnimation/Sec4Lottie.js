import { useLottie, useLottieInteractivity } from "lottie-react";
import arrow4fix from '../Assets/Lotties arrow/arrow4-fix.json'

const style = {
  width: "100%",
};

const options = {
  animationData: arrow4fix,
};

const Sec4Lottie = () => {
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

export default Sec4Lottie;