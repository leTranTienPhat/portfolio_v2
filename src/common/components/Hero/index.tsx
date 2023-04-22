import JavascriptOrbit from "../JavascriptOrbit";
import Marquee from "../Marquee";
import JavascriptIcon from "../../assets/Icons/javascript.svg"
import ReduxIcon from "../../assets/Icons/redux.svg"
import ReactIcon from "../../assets/Icons/react.svg"
import NextIcon from "../../assets/Icons/nextjs.svg"
import Typescript from "../../assets/Icons/typescript.svg"
import TailwindIcon from "../../assets/Icons/tailwind.svg"
import VueIcon from "../../assets/Icons/vue.svg"
import avatar from "../../assets/Images/hero-portrait.png"

export type ITech = {
  id: number,
  icon: string
}

const techIcon: ITech[] = [
  {
    id: 1,
    icon: JavascriptIcon
  },
  {
    id: 2,
    icon: ReduxIcon
  },
  {
    id: 3,
    icon: ReactIcon
  },
  {
    id: 4,
    icon: NextIcon
  },
  {
    id: 5,
    icon: Typescript
  },
  {
    id: 6,
    icon: TailwindIcon
  },
  {
    id: 7,
    icon: VueIcon
  },
]

export default function Hero() {
  return (
    <div className="hero-bg fixed w-full h-full -z-10">
      <Marquee />
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="hidden lg:grid place-content-center scale-75 lg:scale-125 md:-translate-y-14">
          <JavascriptOrbit techIcon={techIcon} />
        </div>
        <div className="relative grid place-content-center">
          <div className="flex flex-col justify-center items-center -translate-y-20">
            <div className="relative w-[300px] h-[300px]">
              <img src={avatar} alt="avatar" className="w-full h-full" />
              <div className="absolute w-full h-full top-0 left-0 -z-10 translate-x-4 translate-y-4 border-2 border-red-200 text-white">
                <p className="absolute right-0 top-1/3 translate-x-[180px] rotate-90 text-[35px] whitespace-nowrap">LÊ TRẦN TIẾN PHÁT</p>
              </div>
            </div>
            <div className="text-white text-2xl mt-[10%] px-[15%] text-center">
              A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}