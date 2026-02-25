import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import "./css/hero.css"
import "./css/middle.css"
import "./css/services.css"
import "./css/animation.css"
import "./css/blog.css"
import "./css/companies.css"
import "./css/footer.css"
import About from './pages/About'
import './css/about.css'
import "./css/aboutFounder.css"
import "./css/servicePage.css"
import "./css/projectPage.css"
import "./css/blogInfos.css"
import "./css/contact.css"
import AboutFounder from './pages/AboutFounder'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import BlogPage from './pages/BlogPage'



function App() {




  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/leader' element={<AboutFounder />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<BlogPage />} />
      </Routes>

    </>
  )
}

export default App
