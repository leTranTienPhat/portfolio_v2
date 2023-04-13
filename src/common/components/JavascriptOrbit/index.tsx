import JavascriptIcon from "../../assets/Icons/javascript.svg"
import ReduxIcon from "../../assets/Icons/redux.svg"
import ReactIcon from "../../assets/Icons/react.svg"
import NextIcon from "../../assets/Icons/nextjs.svg"
import Typescript from "../../assets/Icons/typescript.svg"
import TailwindIcon from "../../assets/Icons/tailwind.svg"
import VueIcon from "../../assets/Icons/vue.svg"

import './styles.css'

export default function JavascriptOrbit() {
  return (
    <div className="orbit select-none">
      <div className="center-image hover:scale-125 z-10 transition-transform duration-500	">
        <img src={JavascriptIcon} alt="" className="hover:scale-125" />
      </div>
      <ul>
        <li>
          <img src={ReduxIcon} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>
        <li>
          <img src={ReactIcon} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>
        <li>
          <img src={NextIcon} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>
        <li>
          <img src={Typescript} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>
        <li>
          <img src={TailwindIcon} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>
        <li>
          <img src={VueIcon} alt="" className="hover:scale-110 transition-transform duration-500" />
        </li>

      </ul>
    </div>
  )
}