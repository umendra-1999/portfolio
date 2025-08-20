import React from 'react'
import App from './App'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Download from './components/Download'


const Routepath = () => {
  return (
 <>
 <BrowserRouter>
 <Routes>

  <Route path="/" element={<App/>}></Route>
  <Route path="/header" element={<Header/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/skills" element={<Skills/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/summary" element={<Summary/>}></Route>
  <Route path="/experience" element={<Experience/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
  <Route path="/download" element={<Download/>}></Route>


 </Routes>
 </BrowserRouter>
 </>
  )
}

export default Routepath
