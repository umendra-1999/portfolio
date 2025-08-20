import React from 'react';

const Download = () => {
    return(
        <>
        <div className=' relative left-110  bottom-70 '>
  <a
    href="resume\umendra_resume.pdf" // Path to your PDF in the public folder
    download
    className="
      bg-red-400 
      hover:bg-red-900 
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded
      transition
      duration-200
      relative
        right-2
    "
  >
    Download resume
  </a>
  
  <a
    href="resume\umendra_resume.pdf" 
    target="_blank"
    rel="noopener noreferrer"
    className="
      bg-green-600 
      hover:bg-green-950
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded
      transition
      duration-200
    "
  >
    View Resume
  </a>
  </div>
  </>
)};

export default Download;
