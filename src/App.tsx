import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import "./css/hero.css"
import "./css/middle.css"
import { useEffect } from 'react'
import Lenis from "lenis"


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
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
