type Props = {
  children: React.ReactElement
  className?: string
}

export default function Card({ children, className = 'cont' }: Props) {
  return (
    <div className={`${className} rounded-2xl bg-white dark:bg-iron py-4 px-6 mb-6`}>
      {children}
    </div>
  )
}