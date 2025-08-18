import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
     <Header/>
     <Home/>
     {/* <Summary/> */}
     <Skills/>
     <Experience/>
     <Projects/>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
