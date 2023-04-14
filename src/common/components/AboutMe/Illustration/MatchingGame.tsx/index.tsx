import { useEffect, useState } from 'react'
import './styles.css'
import Stopwatch from '../../../Stopwatch'

const defaultState = [true, true, true]

export default function MatchingGames() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false)
  const [checkState, setCheckState] = useState<boolean[]>(defaultState)

  useEffect(() => {
    if (JSON.stringify(checkState) === JSON.stringify([true, true, true])) setIsGameStarted(false)
  }, [checkState])

  const handleCheckboxClick = (position: number): void => {
    const updatedCheckState = checkState.map((item, index) => index === position ? true : item)
    setCheckState(updatedCheckState)
  }

  const handleBtnClick = (): void => {
    setCheckState([false, false, false])
    setIsGameStarted(true)
  }

  return (
    <div className="flex flex-col">
      <div className="w-full text-center dark:text-white">
        <h2 className="font-bold text-3xl">MATCHING GAME</h2>
        <p>Click on the line to stop the image. How fast can you complete the game? Let find out!</p>
        <div className="my-4">
          <Stopwatch isStart={isGameStarted} />
        </div>

      </div>
      <div className="game-box relative flex flex-col justify-center items-center w-[600px] h-[200px] border-2">
        <label className="relative w-full h-1/3 border-2">
          <input type='checkbox' id='chk0' checked={checkState[0]} onClick={() => handleCheckboxClick(0)} />
          <i className="absolute top-0 left-0 w-full h-full"></i>
        </label>
        <label className="relative w-full h-1/3 border-2">
          <input type='checkbox' id='chk1' checked={checkState[1]} onClick={() => handleCheckboxClick(1)} />
          <i className="absolute top-0 left-0 w-full h-full"></i>
        </label>
        <label className="relative w-full h-1/3 border-2">
          <input type='checkbox' id='chk2' checked={checkState[2]} onClick={() => handleCheckboxClick(2)} />
          <i className="absolute top-0 left-0 w-full h-full"></i>
        </label>
      </div>

      <button className="btn danger mt-10" onClick={() => handleBtnClick()}>{isGameStarted ? 'Matching...' : 'Start timer'}</button>
    </div>
  )
}