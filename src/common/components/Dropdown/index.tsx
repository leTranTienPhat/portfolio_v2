

type Props = {
  value: string,
  dropdownOptions: string[],
  updateValue: React.Dispatch<React.SetStateAction<number>>
}

export default function Dropdown({ value, dropdownOptions, updateValue }: Props) {
  return (
    <select name={value} className="rounded-xl py-1 px-2 dark:text-black" onChange={(e) => updateValue(Number(e.target.value))}>
      {
        dropdownOptions.map((item, index) => {
          return (
            <option key={index} value={index}>{item}</option>
          )
        })
      }
    </select >
  )
}