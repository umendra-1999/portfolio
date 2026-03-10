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
          <h1 className="text-xl md:text-2xl font-semibold">Web Developer</h1>
          <h2 className="text-lg font-medium">Cyberforenx And Associates</h2>
          <h3 className="text-sm md:text-base font-light">July 2025 - March 2026</h3>

          <div className="font-semibold mt-4 text-sm md:text-base space-y-2 text-left">
            <p>• Developed responsive and scalable web applications using React and Next.js.</p>
            <p>• Built reusable UI components with consistent design, improving development efficiency across projects.</p>
            <p>• Integrated frontend with backend services using Firebase for data fetching and management.</p>
            <p>• Worked on UI improvements, debugging, and performance optimization to enhance user experience.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience

