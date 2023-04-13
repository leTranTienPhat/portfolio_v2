import Marquee from "../../common/components/Marquee";
import JavascriptOrbit from "../../common/components/JavascriptOrbit";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* <Marquee /> */}
      <div className="grid grid-cols-2 w-screen h-screen">
        <div>
          <JavascriptOrbit />
        </div>
        <div>
          asd
        </div>
      </div>
    </div>
  )
}