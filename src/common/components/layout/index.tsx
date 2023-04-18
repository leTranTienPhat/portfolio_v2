import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <>
      <Header />
      <div className="w-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}