import React from 'react'

const Projects = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-4xl md:text-6xl font-mono text-center bg-black text-amber-50 border-2 rounded-2xl py-4 mb-12">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">

        {/* Project 1 - Book Circle */}
        <div className="border-4 border-black bg-black text-amber-50 rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover"
            src="images/projectsimg/neev.png"
            alt="Book Circle"
          />
          <div className="p-6 text-center space-y-2">
            <h2 className="text-2xl font-bold">Neev Realty</h2>
            <p>Developed a real estate property listing platform for Neev Realty that allows users to explore residential and commercial properties with detailed information.</p>
            <p>Built the frontend using Next.js, React, TypeScript, and Tailwind CSS to create a modern and responsive UI.</p>
            <p>Integrated backend data using Firebase for property listings and content management.</p>
            <p>Implemented dynamic property pages including amenities, builder details, and property information.</p>
            
          </div>
          <div className="flex gap-6 justify-center pb-6">
            <a
              href="https://github.com/Pawancmj/neev-reality.git"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://www.neevrealty.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              Live
            </a>
          </div>
        </div>

        {/* Project 2 - YouTube Clone */}
        <div className="border-4 border-black bg-black text-amber-50 rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full h-60 object-cover"
            src="images/projectsimg/interview.png"
            alt="YouTube Clone"
          />
          <div className="p-6 text-center space-y-2">
            <h2 className="text-2xl font-bold">Interview prep edu.</h2>
            <p>Developed an online education platform that provides structured learning through multiple courses and educational content.</p>
            <p>Implemented course listing pages and detailed course sections to allow users to explore and access different learning programs.</p>
            <p>Optimized website performance and navigation using features of Next.js for fast loading and smooth user experience.</p>
            <p>Built the frontend using Next.js, React, TypeScript, and Tailwind CSS to create a modern and responsive user interface.</p>
          </div>
          <div className="flex gap-6 justify-center pb-6">
            <a
              href="https://github.com/umendra-1999/interview-prep-edu.git"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://www.interviewprepedu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              Live
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
