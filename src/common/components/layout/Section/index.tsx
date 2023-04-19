type Props = {
  children: React.ReactElement
}

export default function Section({ children }: Props) {
  return (
    <section className="container">
      {children}
    </section>
  )
}