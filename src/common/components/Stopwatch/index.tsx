import { useEffect, useState } from "react"
import resetIcon from "../../assets/Icons/reset.svg"

type Props = {
  isStart: boolean
}
export default function Stopwatch({ isStart }: Props) {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    let interval: number | null = null

    if (isStart) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      if (interval) {
        setTime(0)
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isStart])

  const handleResetBtnClick = () => {
    setTime(0)
  }

  return (
    <div className="flex items-center justify-end gap-2 text-xl dark:text-white">
      <div>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 1000).slice(-2)}s</span>
      </div>
      <button onClick={() => handleResetBtnClick()} className="hover:rotate-180 transition">
        <img src={resetIcon} alt="reset btn" className="w-8 h-8 dark:bg-white" />
      </button>
    </div>
  )
}