import { useState } from "react";
import Biography from "./Biography";
import Illustration from "./Illustration";

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
]

export default function AboutMe() {
  const [currentNoun, setCurrentNoun] = useState<number>(0)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen py-[10%]'>
      <div className="grid place-content-center w-full h-full">
        <Illustration currentNoun={currentNoun} />
      </div>
      <div className="grid place-content-center">
        <Biography nounsArray={mockDropdownOptionNouns} setCurrentNoun={setCurrentNoun} />
      </div>
    </div>
  )
}