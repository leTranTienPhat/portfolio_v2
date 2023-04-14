import Dropdown from "../../Dropdown";

const mockDropdownOptionNouns = [
  {
    id: 1,
    text: 'beautiful UIs'
  },
  {
    id: 2,
    text: 'stunning landing pages'
  },
  {
    id: 3,
    text: 'interactive websites'
  },
  {
    id: 4,
    text: 'fast-loading e-commerce'
  }
]

const mockDropdownOptionResults = [
  {
    id: 1,
    text: 'capture user\'s attention'
  },
  {
    id: 2,
    text: 'increase revenue'
  },
  {
    id: 3,
    text: 'improve user\'s experience'
  },
]

export default function Biography() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4  dark:text-white">
        <h2 className="font-bold text-2xl mb-4">Hi, I'm Tien Phat</h2>
        <p className="text-2xl leading-[60px]">I help designers, agencies and business bring their ideas to life. Powered by food, drinks and your accountant,
          I will turn your requirements into<span> </span>
          <Dropdown value="nouns" dropdownOptions={mockDropdownOptionNouns} />
          <span> </span>that will<span> </span>
          <Dropdown value="nouns" dropdownOptions={mockDropdownOptionResults} />
          <span> </span> - on time and on budget.
        </p>
      </div>
    </div>
  )
}