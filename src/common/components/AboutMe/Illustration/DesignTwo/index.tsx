import landingPage01 from "../../../../assets/Images/landing-page-01.jpg"
import landingPage02 from "../../../../assets/Images/landing-page-02.jpg"

export default function DesignTwo() {
  return (
    <div className="relative  min-w-[300px] min-h-[300px] lg:min-w-[500px] lg:min-h-[500px]">
      <div className="absolute w-full h-full ">
        <img src={landingPage01} alt="image 1" className="w-full h-full -translate-x-4 -translate-y-4 lg:-translate-x-16 lg:-translate-y-16 skew-x-[10deg]" />
      </div>
      <div className="absolute w-full h-full ">
        <img src={landingPage02} alt="image 2" className="w-full h-full skew-x-[10deg]" />
      </div>
    </div >
  )
}