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
            src="images/projectsimg/bookcircle.png"
            alt="Book Circle"
          />
          <div className="p-6 text-center space-y-2">
            <h2 className="text-2xl font-bold">Book Circle</h2>
            <p>A social platform for book lovers to discover books.</p>
            <p>Responsive UI with reusable components.</p>
            <p>Search for books based on category, location, or availability.</p>
            <p>Upload book details including title, category, and price.</p>
            <p className="text-sm">
              Highlights skills in <strong>React</strong>, <strong>API integration</strong>, and <strong>dynamic UI development</strong>.
            </p>
          </div>
          <div className="flex gap-6 justify-center pb-6">
            <a
              href="https://github.com/umendra-1999/BOOK_CIRCLE."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://bookcircleapp.netlify.app/"
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
            src="images/projectsimg/youtube.png"
            alt="YouTube Clone"
          />
          <div className="p-6 text-center space-y-2">
            <h2 className="text-2xl font-bold">YouTube Clone</h2>
            <p>Custom search suggestions using Stack Overflow API.</p>
            <p>Video playback via YouTube Data API.</p>
            <p>Recursive nested comments.</p>
            <p>Responsive UI with reusable components.</p>
            <p>A responsive video streaming app inspired by YouTube, built in React.</p>
          </div>
          <div className="flex gap-6 justify-center pb-6">
            <a
              href="https://github.com/umendra-1999/youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 px-4 py-2 rounded-lg hover:bg-amber-50 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="https://youtube-app1.netlify.app/"
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
