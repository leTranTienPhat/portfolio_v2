type dropdownOption = {
  id: number,
  text: string
}

type Props = {
  value: string,
  dropdownOptions: dropdownOption[],
  updateValue: React.Dispatch<React.SetStateAction<number>>
}

export default function Dropdown({ value, dropdownOptions, updateValue }: Props) {
  return (
    <select name={value} className="rounded-xl py-1 px-2 dark:text-black" onChange={(e) => updateValue(Number(e.target.value))}>
      {
        dropdownOptions.map(item => {
          return (
            <option key={item.id} value={item.id - 1}>{item.text}</option>
          )
        })
      }
    </select >
  )
}