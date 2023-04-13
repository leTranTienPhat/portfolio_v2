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
    <div className="orbit">
      <div className="center-image">
        <img src={JavascriptIcon} alt="" />
      </div>
      <ul>
        <li>
          <img src={ReduxIcon} alt="" />
        </li>
        <li>
          <img src={ReactIcon} alt="" />
        </li>
        <li>
          <img src={NextIcon} alt="" />
        </li>
        <li>
          <img src={Typescript} alt="" />
        </li>
        <li>
          <img src={TailwindIcon} alt="" />
        </li>
        <li>
          <img src={VueIcon} alt="" />
        </li>

      </ul>
    </div>
  )
}