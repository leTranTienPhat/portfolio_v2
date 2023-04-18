import Dropdown from "../../Dropdown";

type Props = {
  nounsArray: any
  resultsArray: any,
  setCurrentNoun: React.Dispatch<React.SetStateAction<number>>
  setCurrentResult: React.Dispatch<React.SetStateAction<number>>
}

export default function Biography({ nounsArray, resultsArray, setCurrentNoun, setCurrentResult }: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 dark:text-white">
        <h2 className="font-bold text-2xl mb-4">Hi, I'm Tien Phat</h2>
        <p className="text-2xl leading-[60px]">I help designers, agencies and business bring their ideas to life. Powered by food, drinks and your accountant,
          I will turn your requirements into<span> </span>
          <Dropdown value="nouns" dropdownOptions={nounsArray} updateValue={setCurrentNoun} />
          <span> </span>that will<span> </span>
          <Dropdown value="results" dropdownOptions={resultsArray} updateValue={setCurrentResult} />
          <span> </span> - on time and on budget.
        </p>
      </div>
    </div>
  )
}