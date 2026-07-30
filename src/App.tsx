import './App.css'
import BasicInfo from './component/BasicInfo'
import TechStack from './component/TechStack'
import Project from './component/Project'
import Nav from './component/Nav'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './component/AboutMe'
import BlogPost from './component/Blogpost'
import BlogPage from './component/Blogpage'
import Certifications from './component/Certification'
import ContactMe from './component/ContactMe'

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
      <hr className='border-white/5'/>
      <Certifications/>
      <hr className='border-white/5'/>
      <BlogPage/>
      <hr className='border-white/5'/>
      <div className='text-center text-white/50 py-4'>
      <ContactMe/>
      <br/>
      <hr className='border-white/5'/>
      <br/>
        <p>© 2024 All rights reserved.</p>
      </div>
    </>
  )
}

function App() {
  return (
    <div id="app" className="min-h-screen font-sans" style={{ background: '#0F0F0E', color: '#e8f0ed' }}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </div>
  )
}

export default App