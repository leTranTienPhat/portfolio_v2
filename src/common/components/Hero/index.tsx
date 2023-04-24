import Marquee from "./Marquee";
import phat from "../../assets/Images/phat.png"

export default function Hero() {
  return (
    <div className="bg-hero-bg dark:bg-hero-bg-dark relative h-full overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Marquee baseVelocity={-5}>TIẾN PHÁT -</Marquee>
      </div>
      <div className="absolute w-full h-full flex justify-end items-center z-10 pr-[10%]">
        <p className="uppercase font-bold text-white text-[30px]">Front-end developer</p>
      </div>
      <div className="w-full h-full flex justify-center items-end">
        <img src={phat} alt="my image" className="h-full" />
      </div>
    </div >
  )
}