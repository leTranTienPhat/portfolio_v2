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

export default function AboutMe() {
  const [currentNoun, setCurrentNoun] = useState<number>(0)
  const [currentResult, setCurrentResult] = useState<number>(0)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
      <div className="grid place-content-center">
        <Illustration currentNoun={currentNoun} currentResult={currentResult} />
      </div>
      <div className="grid place-content-center">
        <Biography nounsArray={mockDropdownOptionNouns} resultsArray={mockDropdownOptionResults} setCurrentNoun={setCurrentNoun} setCurrentResult={setCurrentResult} />
      </div>
    </div>
  )
}