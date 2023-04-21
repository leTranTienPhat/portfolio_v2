import JavascriptOrbit from "../JavascriptOrbit";
import Marquee from "../Marquee";
import JavascriptIcon from "../../assets/Icons/javascript.svg"
import ReduxIcon from "../../assets/Icons/redux.svg"
import ReactIcon from "../../assets/Icons/react.svg"
import NextIcon from "../../assets/Icons/nextjs.svg"
import Typescript from "../../assets/Icons/typescript.svg"
import TailwindIcon from "../../assets/Icons/tailwind.svg"
import VueIcon from "../../assets/Icons/vue.svg"

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
        <div className="relative grid place-content-center bg-red-200">
          <div className="absolute bg-hero-portrait bg-contain w-full h-full bg-no-repeat bg-center lg:scale-110 lg:translate-x-[-200px]">
          </div>

          <div className="absolute center-absolute font-bold w-full hidden lg:block select-none">
            <p className='text-white text-[80px] xl:text-[100px] rotate-90 translate-y[160%] xl:translate-y-[120%] translate-x-[40%]'>
              TIẾN PHÁT
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}