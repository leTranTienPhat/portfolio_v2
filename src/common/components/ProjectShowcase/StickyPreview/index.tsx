import { forwardRef } from "react"
import AnimatedPage from "../../../animation/AnimatedPage"
import { IProject } from ".."

type Props = {
  currentItem: IProject
}

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const StickyPreview = ({ currentItem }: Props, ref: any) => {
  return (
    <div className="absolute w-full h-[calc(100%-400px)]">
      <div ref={ref} className={`sticky w-[700px] h-[400px] bg-white top-1/4 left-1/2 `}>
        <AnimatedPage index={currentItem.id} variants={animation} className="w-full h-full" >
          <img src={currentItem.previewImg} alt={currentItem.title} className="w-full h-full" />
        </AnimatedPage>
      </div>
    </div>
  )
}

export default forwardRef(StickyPreview)