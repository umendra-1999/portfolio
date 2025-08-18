import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='h-130'>
    <div className='border-4 w-370 relative top-4 left-5 bg-black h-120 text-amber-50 rounded-2xl'>
      <h1 className='text-6xl font-serif relative left-18 top-6'>Umendra Pratap Singh</h1>
      <div className='relative top-40 left-18'>
      <h1>+91-9628192156</h1>
      <h1>umendraps1999@gmail.com</h1>
      <h1>Lucknow, Uttar Pradesh</h1>
       </div>
       <div className='relative left-170 top-28'>
      <h1>Privacy Policy</h1>
      <h1>Accesibility Statement</h1>
      </div>
      <div>
      <span><a href="https://www.linkedin.com/in/umendrapratapsingh/" ><img className='rounded-full hover:scale-110 h-12 relative left-315 top-11.5' src="images/linkedin.png"  /></a></span>
       <span><a href="https://github.com/umendra-1999"><img className='rounded-full hover:scale-110 h-11 relative left-340' src="images/github.png"  /></a></span>
      </div>
      <h1 className='border-2 h-0.5  w-350 relative top-30 left-8'></h1>
      <h1 className='relative top-35 left-18'>2025 by Umendra Prartap.</h1>
      </div>
      </div>
    </>
  )
}

export default Footer
