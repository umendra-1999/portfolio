import React from 'react'

const Projects = () => {

  return (
    <>
    <div className='flex h-180  rounded-4xl  '>
      <h1 className='text-6xl font-mono relative left-145 rounded-4xl bg-black text-amber-50 h-22 top-6 border-2 w-90 grid place-items-center'>Projects</h1>
    <div className='border-4 border-black  w-130 h-140 bg-black text-amber-50 rounded-4xl relative right-60 top-30'>
      <img className='w-130 h-60 rounded-4xl' src="images\projectsimg\bookcircle.png" alt="" />
      <div className='text-center'>
      <h1 className='text-2xl font-bold'>Book Circle.</h1>
      <h1>A social platform for book lovers to discover books.</h1>
      <h1>Responsive UI with reusable components.</h1>
      <h1>Search for books based on category, location, or availability.</h1>
      <h1>Upload book details, including title, category (fiction, nonfiction),<br /> and price (paid/unpaid).</h1>
      <h1 className=''>Highlights my skills in React, API integration, and  dynamic UI development.</h1>
     </div>
      <div className='flex gap-12 justify-center m-4'>
       <a href="https://github.com/umendra-1999/BOOK_CIRCLE."> <h1 className='border-4  rounded-4xl w-16 text-center'>Github</h1></a>
       <a href="https://bookcircleapp.netlify.app/"> <h1 className='border-4 rounded-4xl w-16 text-center'>Live</h1></a>
      </div>
      </div>


    
    <div className='border-4 border-black  h-140 w-130 bg-black text-amber-50 rounded-4xl relative top-30'>
      <img className='w-130 h-60  rounded-4xl' src="images\projectsimg\youtube.png" alt="" />
      <div className='text-center'>
      <h1 className='text-2xl font-bold'>Youtube-clone.</h1>
      <h1>Custom search suggestions using Stack Overflow API. </h1>
      <h1>Video playback via YouTube Data API.</h1>
      <h1>Recursive nested comments.</h1>
      <h1>Responsive UI with reusable components.</h1>
      <h1>A responsive video streaming app inspired by YouTube, built with React.</h1>
     </div>
      <div className='flex gap-12 justify-center m-4'>
       <a href="https://github.com/umendra-1999/youtube"> <h1 className='border-4  rounded-4xl w-16 text-center'>Github</h1></a>
       <a href="https://youtube-app1.netlify.app/"> <h1 className='border-4 rounded-4xl w-16 text-center'>Live</h1></a>
      </div>
      </div>
      </div>
    </>
  )
}

export default Projects
