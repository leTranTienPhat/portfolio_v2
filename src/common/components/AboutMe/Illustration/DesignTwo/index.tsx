import landingPage01 from "../../../../assets/Images/landing-page-01.jpg"
import landingPage02 from "../../../../assets/Images/landing-page-02.jpg"
import CardDecorate from "./CardDecorate"

export default function DesignTwo() {
  return (
    <div className="relative xl:w-[800px]">
      <CardDecorate image={landingPage01} position="back" />
      <CardDecorate image={landingPage02} position="front" />
    </div>
  )
}