import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-amber-50 py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Name + Contact Info */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-serif">Umendra Pratap Singh</h1>
          <div className="mt-6 space-y-2 text-sm md:text-base">
            <p>📞 +91-9628192156</p>
            <p>📧 umendraps1999@gmail.com</p>
            <p>📍 Lucknow, Uttar Pradesh</p>
          </div>
        </div>

        {/* Links + Social Icons in Flex */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Policy Links */}
          <div className="space-y-2 text-center md:text-left">
            <p className="hover:text-amber-300 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-amber-300 cursor-pointer">Accessibility Statement</p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/umendrapratapsingh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full hover:scale-110 transition h-12 w-12"
                src="images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/umendra-1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-full hover:scale-110 transition h-12 w-12"
                src="images/github.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 pt-4 text-center text-sm">
          © 2025 by Umendra Pratap Singh.
        </div>
      </div>
    </footer>
  )
}

export default Footer
