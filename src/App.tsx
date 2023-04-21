import Home from './modules/Home/Home'
import Layout from './common/components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            {/* <Route path="/test" element={<AboutMe />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
