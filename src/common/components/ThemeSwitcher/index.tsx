import LightIcon from "../../assets/Icons/light-icon.svg"
import DarkIcon from "../../assets/Icons/dark-icon.svg"
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

export default function ThemeSwitcher() {
  const { theme, handleThemeSwitch } = useContext(ThemeContext)

  return (
    <button className="h-full" onClick={handleThemeSwitch}>
      {theme === 'light' ? <img src={LightIcon} className='w-8' /> : <img src={DarkIcon} className='w-8' />}
    </button>
  )
}