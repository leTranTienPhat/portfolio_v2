import MatchingGame from "./MatchingGame.tsx";
import bubble from "../../../assets/Images/thought_bubble.svg"
import Drag from "../../../animation/Drag/index.js";
import AnimatedPage from "../../../animation/AnimatedPage/index.js";
import { useEffect, useState } from "react";
import DesignOne from "./DesignOne/index.js";
import DesignTwo from "./DesignTwo/index.js";

type Props = {
  currentNoun: number,
  currentResult: number
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
    <div>
      {/* <div className="fixed top-0 left-0 w-screen h-screen z-50">
        asdasdasdasdadasdas
      </div> */}
      <AnimatedPage index={currentNoun} variants={animation}>
        {componentArray[currentNoun]}
      </AnimatedPage>
    </div >
  )
}