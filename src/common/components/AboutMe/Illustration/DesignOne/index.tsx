import illustration from "../../../../assets/Images/design-01.png"
import SvgIllustrationBg from "../../../../assets/Images/SVGR/SvgIllustrationBg"

export default function DesignOne() {
  return (
    <div className="relative w-full h-full">
      <SvgIllustrationBg color="#ded2f8" className=" md:w-[700px] md:h-[700px]" />
      <div className="absolute center-absolute w-[300px] md:w-[500px] ">
        <img src={illustration} alt="illustration" />
      </div>
    </div>
  )
}