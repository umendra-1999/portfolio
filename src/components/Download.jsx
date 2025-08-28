import React from 'react';

const Download = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
      {/* Download Resume */}
      <a
        href="/resume/umendra_resume.pdf" // ✅ keep your PDF inside public/resume/
        download
        className="
          bg-red-500 
          hover:bg-red-700
          text-white 
          font-bold 
          py-2 
          px-6 
          rounded-lg
          transition
          duration-200
          text-center
        "
      >
        Download Resume
      </a>

      {/* View Resume */}
      <a
        href="/resume/umendra_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-600 
          hover:bg-green-800
          text-white 
          font-bold 
          py-2 
          px-6 
          rounded-lg
          transition
          duration-200
          text-center
        "
      >
        View Resume
      </a>
    </div>
  );
};

export default Download;

