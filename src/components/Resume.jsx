import React from 'react';

const Resume = () => {
  
  const resumeFile = {
    url: '/umendra_updated_resume.pdf',
    name: 'My Resume.pdf'     
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6">Download My Resume</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500">File: {resumeFile.name}</p>
      </div>
      <a href={resumeFile.url} 
      download={resumeFile.name}>download</a>

   <p className="mt-4 text-sm text-gray-500">
        PDF format | Updated regularly
      </p>
    </div>
  );
};

export default Resume;
