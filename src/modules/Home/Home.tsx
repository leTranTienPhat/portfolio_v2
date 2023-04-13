import heroPortrait from "../../common/assets/Images/hero-portrait.png"
import Marquee from "../../common/components/Marquee";
import JavascriptOrbit from "../../common/components/JavascriptOrbit";

export default function Home() {
  return (
    <div className="bg-gradient-blue dark:bg-gradient-black w-screen overflow-hidden">
      <Marquee />
      <div className="grid grid-cols-1 lg:grid-cols-2 w-screen min-h-[650px] overflow-visible pt-[100px] lg:pt-0">
        <div className="grid place-content-center">
          <JavascriptOrbit />
        </div>
        <div className="relative grid place-content-center overflow-visible">
          <div className="absolute bg-hero-portrait bg-contain w-full h-full bg-no-repeat bg-center xl:scale-125 lg:translate-x-[-100px]">
          </div>
          <div className="absolute center-absolute font-bold w-full hidden lg:block">
            <p className='dark:text-white text-[80px] xl:text-[100px] rotate-90 translate-y[160%] xl:translate-y-[120%] translate-x-[40%]'>
              TIẾN PHÁT
            </p>
          </div>

          <div className="absolute bottom-0 grid grid-cols-2 md:text-[60px] text-[30px] font-bold w-full lg:hidden ">
            <div className="flex w-full justify-items-start">
              <p className='dark:text-white md:pl-10 pl-5'>
                LÊ TRẦN
              </p>
            </div>
            <div className="flex w-full place-content-end">
              <p className='dark:text-white '>
                TIẾN PHÁT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}