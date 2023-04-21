import JavascriptOrbit from "../JavascriptOrbit";
import Marquee from "../Marquee";

export default function Hero() {
  return (
    <div className="hero-bg fixed w-full h-full -z-10">
      <Marquee />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
          <div className="grid place-content-center scale-75 lg:scale-125 md:-translate-y-14">
            <JavascriptOrbit />
          </div>
          <div className="relative grid place-content-center">
            <div className="absolute bg-hero-portrait bg-contain w-full h-full bg-no-repeat bg-center  lg:scale-110 lg:translate-x-[-200px]">
            </div>

            <div className="absolute center-absolute font-bold w-full hidden lg:block select-none">
              <p className='text-white text-[80px] xl:text-[100px] rotate-90 translate-y[160%] xl:translate-y-[120%] translate-x-[40%]'>
                TIẾN PHÁT
              </p>
            </div>

            <div className="absolute bottom-0 grid grid-cols-2 md:text-[60px] text-[30px] font-bold w-full lg:hidden select-none">
              <div className="flex w-full justify-items-start">
                <p className='text-white md:pl-10 pl-5'>
                  LÊ TRẦN
                </p>
              </div>
              <div className="flex w-full place-content-end">
                <p className='text-white '>
                  TIẾN PHÁT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}