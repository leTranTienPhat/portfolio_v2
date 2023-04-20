import { forwardRef } from "react"
type Props = {
  currentItem: any
}

const StickyPreview = ({ currentItem }: Props, ref: any) => {
  return (
    <div className="absolute w-full h-[calc(100%-400px)]">
      <div ref={ref} className={`sticky w-[700px] h-[400px] ${currentItem.text} top-1/4 left-1/2 `}>
        <img src={currentItem.previewImg} alt={currentItem.text} className="w-full h-full" />
      </div>
    </div>
  )
}

export default forwardRef(StickyPreview)