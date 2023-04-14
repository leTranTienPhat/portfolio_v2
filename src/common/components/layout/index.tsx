import Footer from "./Footer"
import Header from "./Header"

type Props = {
  children: React.ReactElement
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}