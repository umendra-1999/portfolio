import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Download from './Download'

const About = () => {
  return (
    <>
      <div className="overflow-hidden min-h-screen bg-[rgb(221,204,194)]">

        {/* Navbar */}
        <div className="flex flex-col md:flex-row items-center justify-between 
                        border-4 rounded-3xl bg-black text-amber-50 px-6 py-4">
          <h1 className="text-2xl md:text-4xl font-semibold">Umendra Pratap Singh</h1>

          <div className="flex gap-6 text-lg md:text-2xl mt-4 md:mt-0">
            <Link to="/" className="hover:text-amber-300">Home</Link>
            <Link to="/About" className="hover:text-amber-300">About</Link>
          </div>
        </div>

        {/* About Me Section */}
        <div className="border-4 rounded-3xl bg-black text-amber-50 mt-6 px-6 py-10 text-center md:text-left">
          <h1 className="text-xl md:text-2xl mb-4">About me</h1>
          <h1 className="text-3xl md:text-5xl font-mono leading-snug">
            Aspiring Software <br /> Developer
          </h1>

          <div className="mt-6">
            <Download />
          </div>
        </div>

        {/* My Journey Section */}
        <div className="bg-[rgb(221,204,194)] rounded-3xl border-4 mt-10 p-6 md:p-10 text-black">
          <h1 className="text-xl md:text-2xl font-semibold">My Journey</h1>
          <p className="text-lg md:text-2xl lg:text-3xl mt-4 max-w-5xl leading-relaxed">
            Aspiring Software Developer with a strong foundation
            in building fast, responsive web applications. Skilled in 
            problem-solving, collaborating with teams, and eager to
            contribute to creating efficient and scalable solutions.
            Passionate about improving user experiences and optimizing application
            performance. Excited to begin a career in software development 
            and grow with challenging opportunities.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 px-6">
          <img
            className="h-60 w-full md:w-1/2 lg:w-1/3 object-cover rounded-3xl hover:scale-105 transition"
            src="images/laptopusing.avif"
            alt="Laptop"
          />
          <img
            className="h-60 w-full md:w-1/2 lg:w-1/3 object-cover rounded-3xl hover:scale-105 transition"
            src="images/developer.jpeg"
            alt="Developer"
          />
        </div>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About
