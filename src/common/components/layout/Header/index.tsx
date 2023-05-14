import ThemeSwitcher from "../../ThemeSwitcher"
import { LANGUAGES } from "../../../lang/languagues"
import { useTranslation } from 'react-i18next'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import countryIcon from "../../../assets/Icons/country"

export default function Header() {
  const [hideLogo, setHideLogo] = useState<boolean>(false)
  const [currentLangIcon, setCurrentLangIcon] = useState<number>(0)

  const { i18n, t } = useTranslation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) setHideLogo(true)
    else setHideLogo(false)
  })

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    switch (lang_code) {
      case "en":
        setCurrentLangIcon(0)
        break;
      case "vn":
        setCurrentLangIcon(1)
        break;
      case "jp":
        setCurrentLangIcon(2)
        break;

    }
    i18n.changeLanguage(lang_code);
  }

  return (
    <div className={`fixed top-0 w-screen z-50 h-16 flex justify-center ${hideLogo ? 'bg-primary-dark dark:bg-bg-light ' : 'bg-transparent'}`}>
      <div className="container flex justify-between h-full items-center">
        <div className="flex gap-4 dark:text-white items-center">
          {!hideLogo &&
            <>
              <svg id="Layer_1" className="w-6 h-6 dark:fill-current" viewBox="0 0 24 24" data-name="Layer 1">
                <path d="m4 13h3v2h-3zm5 2h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-5-12h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm15-3v16h-24v-21a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3zm-10-5a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v19h12zm8 5a1 1 0 0 0 -1-1h-5v15h6zm-4 7h2v-2h-2zm0 4h2v-2h-2zm0-8h2v-2h-2z" />
              </svg>
              <p>{t('logoString')}</p>
            </>
          }
        </div>
        <div className="flex items-center gap-10">
          <ThemeSwitcher />
          <div className="pl-4 flex gap-4">
            <img src={countryIcon[currentLangIcon]} alt="language icon" className="w-10 h-10" />
            <select defaultValue={"en"} onChange={handleChangeLang} >
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code} >
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}