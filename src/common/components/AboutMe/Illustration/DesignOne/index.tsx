import illustration from "../../../../assets/Images/design-01.png"
import SvgIllustrationBg from "../../../../assets/Images/SVGR/SvgIllustrationBg"

export default function DesignOne() {
  return (
    <div className="relative w-full h-full  ">
      <div className="absolute center-absolute  w-[500px] h-[500px] ">
        <SvgIllustrationBg />
      </div>
      <div className="absolute center-absolute  w-[400px] h-[400px]">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  )
}