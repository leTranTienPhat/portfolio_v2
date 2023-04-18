import brandLogo from "../../../assets/Icons/brand-logo.svg"
import ThemeSwitcher from "../../ThemeSwitcher"
import BaseButton from "../../Button/BaseButton"
import GuestLogin from "../../GuestLogin"
import { useModal } from "../../../hooks/Modal/useModal"

export default function Header() {
  const { openModal } = useModal()

  const handleLoginBtnClicked = () => {
    openModal(<GuestLogin />)
  }

  return (
    <section className=" dark:bg-primary-dark h-16 flex justify-center bg-slate-200">
      <div className="container flex justify-between h-full items-center">
        <img src={brandLogo} />
        <div className="flex items-center">
          <ThemeSwitcher />
          <div className="pl-4">
            <BaseButton onClick={handleLoginBtnClicked}>
              Get Started
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  )
}