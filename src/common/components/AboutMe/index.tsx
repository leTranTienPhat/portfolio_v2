import { useEffect, useRef, useState } from "react";
import Biography from "./Biography";
import Illustration from "./Illustration";
import { useInView } from "framer-motion";

const inViewOptions = {
  once: true,
  amount: 0.2
}

export default function AboutMe() {
  const [currentNoun, setCurrentNoun] = useState<number>(0)

  const ref = useRef(null)
  const isInView = useInView(ref, inViewOptions)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  const appearAnimation = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
  }

  return (
    <div ref={ref} className='grid grid-cols-1 lg:grid-cols-2 min-h-screen py-[10%]'>
      <div ref={ref} className="grid place-content-center w-full h-full" style={appearAnimation}>
        <Illustration currentNoun={currentNoun} />
      </div>
      <div className="grid place-content-center">
        <Biography setCurrentNoun={setCurrentNoun} />
      </div>
    </div>
  )
}