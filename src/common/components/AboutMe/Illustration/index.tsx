import MatchingGame from "./MatchingGame.tsx";
import bubble from "../../../assets/Images/thought_bubble.svg"
import Drag from "../../../animation/Drag/index.js";
import AnimatedPage from "../../../animation/AnimatedPage/index.js";
import { useEffect, useState } from "react";
import DesignOne from "./DesignOne/index.js";
import DesignTwo from "./DesignTwo/index.js";

type Props = {
  currentNoun: number,
}

const componentArray = [
  <DesignOne />,
  <DesignTwo />,
  <MatchingGame />,
]

export default function Illustration({ currentNoun }: Props) {
  const [animation, setAnimation] = useState<any>({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  })

  useEffect(() => {
    switch (currentNoun) {
      case 1:
        setAnimation({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        })
        break;
      case 2:
        setAnimation({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        })
        break;
      case 3:
        setAnimation({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        })
        break;
      default:
        setAnimation({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        })
        break;

    }
  }, [currentNoun])

  return (
    <AnimatedPage index={currentNoun} variants={animation} className="grid place-content-center max-w-[700px] max-h-[700px] p-10">
      {componentArray[currentNoun]}
    </AnimatedPage>
  )
}