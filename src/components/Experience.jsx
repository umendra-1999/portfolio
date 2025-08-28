import React from 'react'

const Experience = () => {
  return (
    <div className="bg-black min-h-screen px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl font-bold bg-gray-400 text-black 
                     rounded-2xl py-4 px-6 text-center max-w-3xl mx-auto">
        EXPERIENCE
      </h1>

      {/* Cards Section */}
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        
        {/* First Experience */}
        <div className="border-2 bg-[rgb(221,204,194)] rounded-2xl p-6 text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Frontend Intern</h1>
          <h2 className="text-lg font-medium">Precursor Info Solutions Pvt Ltd.</h2>
          <h3 className="text-sm md:text-base font-light">Feb 2025 - June 2025</h3>

          <div className="font-semibold mt-4 text-sm md:text-base space-y-2 text-left">
            <p>• Engineered and deployed a responsive website using HTML, React.js, and Tailwind CSS.</p>
            <p>• Developed and implemented reusable React components, improving code maintainability and scalability.</p>
            <p>• Automated workflows using JavaScript frameworks and REST APIs, streamlining processes and enhancing team productivity.</p>
          </div>
        </div>

        {/* Second Experience */}
        <div className="border-2 bg-[rgb(221,204,194)] rounded-2xl p-6 text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Web Developer Intern</h1>
          <h2 className="text-lg font-medium">Cyberforenx And Associates</h2>
          <h3 className="text-sm md:text-base font-light">July 2025 - Present</h3>

          <div className="font-semibold mt-4 text-sm md:text-base space-y-2 text-left">
            <p>• Built reusable UI components with consistent design, improving development efficiency across projects.</p>
            <p>• Improved form validation and event handling in React.js, enhancing user input accuracy and usability.</p>
            <p>• Implemented a component-based structure using React.js, making code easier to maintain and scale.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience

