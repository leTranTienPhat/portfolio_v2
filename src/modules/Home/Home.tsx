import heroPortrait from "../../common/assets/Images/hero-portrait.png"
import Marquee from "../../common/components/Marquee";
import JavascriptOrbit from "../../common/components/JavascriptOrbit";

export default function Home() {
  return (
    <div className="bg-gradient-blue dark:bg-gradient-black w-screen overflow-x-hidden">
      <Marquee />
      <div className="grid grid-cols-2 w-screen min-h-[650px]">
        <div className="grid place-content-center">
          <JavascriptOrbit />
        </div>
        <div className="grid place-content-center bg-hero-portrait bg-contain bg-no-repeat bg-center scale-125">
        </div>
      </div>
    </div>
  )
}