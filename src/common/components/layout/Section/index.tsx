type Props = {
  children: React.ReactElement
}

export default function Section({ children }: Props) {
  return (
    <section className="bg-bg-light dark:bg-bg-dark">
      <div className="container">
        {children}
      </div>
    </section>
  )
}