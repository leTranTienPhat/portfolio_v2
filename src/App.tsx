import Home from './modules/Home/Home'
import Layout from './common/components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<AboutMe />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
