import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import "./css/hero.css"
import "./css/middle.css"
import { useEffect } from 'react'
import Lenis from "lenis"
import "./css/services.css"
import "./css/animation.css"
import "./css/blog.css"
import "./css/companies.css"
import "./css/footer.css"

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);



  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </>
  )
}

export default App
