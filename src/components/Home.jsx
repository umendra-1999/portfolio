import React from 'react'
import Download from './Download'



const Home = () => {
  return (
    <>
    <div className='bg-black text-amber-50'>
     <img className='h-160  relative left-210 top-15' src="images/portfoliopic.JPG" alt="" />
      <h1 className='text-3xl  relative left-100 bottom-100 '>Hi, I am</h1>
      <h1 className='text-5xl relative bottom-90 left-100 font-bold'>Umendra pratap singh</h1>
      <h1 className='text-xl relative bottom-90 left-101 '>Front-end Developer.</h1>
      <Download/>
      <div className=' relative bottom-50 left-120 h-18 w-60'>
<div><a href="https://www.linkedin.com/in/umendrapratapsingh/" ><img className='rounded-full hover:scale-110 h-16 relative ' src="images/linkedin.png"  /></a></div>
<div><a href="https://github.com/umendra-1999"><img className='rounded-full hover:scale-110 h-16 relative left-34 bottom-16' src="images/github.png"  /></a></div>
      </div>
      </div>
    </>
  )
}

export default Home
