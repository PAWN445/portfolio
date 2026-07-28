import './App.css'
import BasicInfo from './component/BasicInfo'
import TechStack from './component/TechStack'
import Project from './component/Project'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './component/AboutMe'
import BlogPost from './component/Blogpost'
import BlogPage from './component/Blogpage'

function Home() {
  return (
    <>
      <BasicInfo/>
      <br/>
      <hr className='border-white/5'/>
      <TechStack/>
      <hr className='border-white/5'/>
      <Project/>
      <hr className='border-white/5'/>
      <AboutMe/>
    </>
  )
}

function App() {
  return (
    <div id="app" className="min-h-screen font-sans" style={{ background: '#0F0F0E', color: '#e8f0ed' }}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<BasicInfo />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App