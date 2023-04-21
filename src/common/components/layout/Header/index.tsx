import brandLogo from "../../../assets/Icons/brand-logo.svg"
import ThemeSwitcher from "../../ThemeSwitcher"
import BaseButton from "../../Button/BaseButton"
import GuestLogin from "../../GuestLogin"
import { useModal } from "../../../hooks/Modal/useModal"
import { LANGUAGES } from "../../../lang/languagues"
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { openModal } = useModal()

  const { i18n, t } = useTranslation();

  const handleLoginBtnClicked = () => {
    openModal(<GuestLogin />)
  }
  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  }

  return (
    <section className=" dark:bg-primary-dark h-16 flex justify-center bg-slate-200">
      <div className="container flex justify-between h-full items-center">
        <img src={brandLogo} />
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="pl-4">
            <select defaultValue={"en"} onChange={handleChangeLang}>
              {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
            <BaseButton onClick={handleLoginBtnClicked}>
              {t('contactBtn')}
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  )
}