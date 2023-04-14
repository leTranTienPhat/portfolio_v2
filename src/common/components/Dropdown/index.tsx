type dropdownOption = {
  id: string | number,
  text: string
}

type Props = {
  value: string,
  dropdownOptions: dropdownOption[]
}

export default function Dropdown({ value, dropdownOptions }: Props) {
  return (
    <select name={value} className="rounded-xl py-1 px-2 dark:text-black">
      {dropdownOptions.map(item => {
        return (
          <option key={item.id} value={item.id}>{item.text}</option>
        )
      })}
    </select>
  )
}