import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
    <div className='overflow-hidden h-470'>
   <div className='h-20 border-4 relative top-4 text-4xl bg-black text-amber-50 rounded-4xl'>
    <h1 className='relative top-4 left-8'>Umendra Pratap Singh</h1>
    <div className='flex gap-4 relative text-2xl left-320 bottom-5'>
    <Link  to="/">Home</Link>    
    <Link  to="/About">About</Link>    
</div>
   </div>


    <div className='border-4 rounded-4xl bg-black relative top-6 text-amber-50 h-60'>
      <h1 className='relative left-20 top-10'>About me.</h1>
      <h1 className='text-5xl font-mono relative left-20 top-10'>Aspiring Software <br /> Developer</h1>
      </div>
       <div className=' bg-[rgb(221,204,194)] rounded-4xl border-4 relative top-10 h-110 text-black'>
        <h1 className='text-xl relative left-24 top-16'>My Journey</h1>
      <p className='text-4xl w-250 relative left-60 top-14'>Aspiring Software Developer with a strong foundation in
building fast, responsive web applications. Skilled in
problem-solving, collaborating with teams, and eager to
contribute to creating efficient and scalable solutions.
Passionate about improving user experiences and
optimizing application performance. Excited to begin a
career in software development and grow with challenging
opportunities..</p>
</div>
<div className='flex gap-16 relative left-8'>
<img className='h-120 relative top-20 rounded-4xl left-6 w-170  hover:scale-110' src="images\laptopusing.avif" />
<img className='h-120 relative top-20 rounded-4xl left-6 w-170  hover:scale-110' src="images\developer.jpeg" alt="" />
</div>
<div className='relative top-28'>
<Footer/>
</div>
</div>
    </>
  )
}

export default About
