import { ITech } from '../Hero'
import './styles.css'

type Props = {
  techIcon: ITech[]
}

export default function JavascriptOrbit({ techIcon }: Props) {
  return (
    <div className="orbit select-none">
      <div className="center-image hover:scale-125 z-10 transition-transform duration-500 ">
        <img src={techIcon[0].icon} alt="" className="hover:scale-125" />
      </div>

      <div className="Need testing ">
        <ul>
          {techIcon.map((tech, index) => {
            if (index === 0) return
            return (
              <li key={tech.id}>
                <img src={tech.icon} alt="" className="hover:scale-125 transition-transform duration-500" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}