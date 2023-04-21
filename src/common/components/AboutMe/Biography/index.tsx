import Dropdown from "../../Dropdown";
import { useTranslation } from 'react-i18next'

type Props = {
  nounsArray: any
  setCurrentNoun: React.Dispatch<React.SetStateAction<number>>
}

export default function Biography({ nounsArray, setCurrentNoun }: Props) {

  const { t } = useTranslation();

  return (
    <div className="flex justify-center">
      <div className="w-3/4 dark:text-white">
        <h2 className="font-bold text-center text-[60px] mb-4">{"<AboutMe />"}</h2>
        <p className="text-xl leading-[60px]">{t("bioFirstHalf")}<span> </span>
          <Dropdown value="nouns" dropdownOptions={nounsArray} updateValue={setCurrentNoun} />
          <span> </span>{t("bioSecondHalf")}
        </p>
      </div>
    </div>
  )
}