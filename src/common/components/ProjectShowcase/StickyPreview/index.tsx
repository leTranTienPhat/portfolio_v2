import { forwardRef } from "react"
import AnimatedPage from "../../../animation/AnimatedPage"
import { IProject } from ".."

type Props = {
  currentItem: IProject
}

const animation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const StickyPreview = ({ currentItem }: Props, ref: any) => {
  return (
    <div className="absolute w-full h-[calc(100%-240px)] hidden lg:block">
      <div ref={ref} className={`sticky w-[720px] h-[450px] top-1/4 left-1/2 drop-shadow-2xl`}>
        <AnimatedPage index={currentItem.id} variants={animation} className="w-full h-full" >
          <img src={currentItem.previewImg} alt={currentItem.title} className="w-full h-full" />
        </AnimatedPage>
      </div>
    </div>
  )
}

export default forwardRef(StickyPreview)