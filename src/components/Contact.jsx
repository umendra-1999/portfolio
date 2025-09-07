import React from "react";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Header Section */}
      <div className="border-4 max-w-3xl w-full text-center md:text-left 
                      bg-black text-amber-50 rounded-2xl p-6 md:p-10 mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Me</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-4">
          Reach out for Opportunities
        </h2>
        <p className="text-md md:text-lg font-medium mt-6">
          Let’s Connect to discuss about Jobs and <br className="hidden md:block" />
          Internship opportunities.
        </p>
      </div>

      {/* Contact Details */}
      <div className="border-4 max-w-2xl w-full bg-black text-amber-50 rounded-2xl p-6 md:p-10">
        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
        
        <div className="space-y-4 text-lg">
          <p>
            📧 Email: <a href="https://mail.google.com" className="text-amber-50 hover:underline">umendraps1999@gmail.com</a>
          </p>
          <p>
            📱 Mobile: <a href="tel:+919628192156" className="text-amber-50 hover:underline">+91 96281 92156</a>
          </p>
          <p>
            💼 LinkedIn: <a href="https://www.linkedin.com/in/umendrapratapsingh/" target="_blank" rel="noreferrer" className="text-amber-50 hover:underline">linkedin.com/in/Umendra-pratap1999</a>
          </p>
          <p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
