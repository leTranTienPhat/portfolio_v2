import Dropdown from "../../Dropdown";
import { useTranslation } from 'react-i18next'
import techIcon from "../../../assets/Icons"

type Props = {
  setCurrentNoun: React.Dispatch<React.SetStateAction<number>>
}

export default function Biography({ setCurrentNoun }: Props) {

  const { t } = useTranslation();
  const nounsArray: string[] = t('bioNouns', { returnObjects: true })
  console.log(nounsArray)

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <h2 className="title-text mb-10">{"<AboutMe />"}</h2>
        <p className="lg:text-xl leading-10 lg:leading-[60px] dark:text-white">{t("bioFirstHalf")}
          <span> <Dropdown value="nouns" dropdownOptions={nounsArray} updateValue={setCurrentNoun} /> </span>
          {t("bioSecondHalf")}
        </p>
        <div className="flex items-center gap-2 border-react dark:border-none border-2 rounded-xl p-4 mt-10 dark:bg-bg-light">
          <p className="text-xl font-bold hidden lg:block">Tech stack: </p>
          {techIcon.map((icon, index) => {
            return (
              <img key={index} src={icon} alt="tech icon" className="w-10 h-6 lg:w-16 lg:h-10" />
            )
          })}
        </div>
      </div>
    </div>
  )
}