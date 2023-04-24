import Dropdown from "../../Dropdown";
import { useTranslation } from 'react-i18next'
import techIcon from "../../../assets/Icons"

type Props = {
  nounsArray: any
  setCurrentNoun: React.Dispatch<React.SetStateAction<number>>
}

export default function Biography({ nounsArray, setCurrentNoun }: Props) {

  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div className="w-3/4 ">
        <h2 className="font-bold text-center text-[60px] mb-4 dark:text-white">{"<AboutMe />"}</h2>
        <p className="text-xl leading-[60px] dark:text-white">{t("bioFirstHalf")}<span> </span>
          <Dropdown value="nouns" dropdownOptions={nounsArray} updateValue={setCurrentNoun} />
          <span> </span>{t("bioSecondHalf")}
        </p>
        <div className="flex items-center gap-2 border-react dark:border-none border-2 rounded-xl p-4 mt-10 dark:bg-bg-light">
          <p className="text-xl font-bold">Tech stack: </p>
          {techIcon.map((icon, index) => {
            return (
              <img key={index} src={icon} alt="tech icon" className="w-16 h-10" />
            )
          })}
        </div>
      </div>
    </div>
  )
}