import React, { useState } from "react";

const BottomNavBar = () => {
  const [isHomeClicked, setIsHomeClicked] = useState(false);

  const handleHomeClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Reduce the width of the navbar
    setIsHomeClicked(true);

    // Optionally, reset the navbar width after a few seconds
    setTimeout(() => {
      setIsHomeClicked(false);
    }, 500); // Change 500ms delay as per your preference
  };

  return (
    <div
      className={`fixed z-50 h-14 w-full lg:w-1/4 max-w-full sm:max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 transition-all ${
        isHomeClicked ? "max-w-xs" : "max-w-lg"
      }`}
    >
      <div className="grid h-full grid-cols-5 gap-2 px-2 sm:px-5 items-center">
        {/* Home Button */}
        <button
          type="button"
          onClick={handleHomeClick}
          className="inline-flex items-center justify-center p-2 hover:bg-gray-50 rounded-full group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
        </button>

        {/* Download Resume */}
        <a
          href="https://drive.google.com/file/d/1_tCIzW93PekTN98DD46YtLfczGlZdMwT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 hover:bg-gray-50 rounded-full group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.25 1.5a.75.75 0 0 0-1.5 0v8.69L7.2 8.14a.75.75 0 1 0-1.06 1.06l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06l-1.55 1.55V1.5ZM3.75 13a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3 16.75A.75.75 0 0 1 3.75 16h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Hitendra007"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 hover:bg-gray-50 rounded-full group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.68c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .08 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.83a2.15 2.15 0 0 1 .64-1.34c-2.22-.25-4.56-1.11-4.56-4.93A3.86 3.86 0 0 1 4.7 7.5a3.59 3.59 0 0 1 .1-2.65s.84-.27 2.75 1.04a9.6 9.6 0 0 1 5 0c1.9-1.31 2.74-1.04 2.74-1.04a3.6 3.6 0 0 1 .1 2.65 3.86 3.86 0 0 1 1 2.68c0 3.84-2.34 4.67-4.57 4.92a2.42 2.42 0 0 1 .69 1.87v2.76c0 .27.17.6.7.49A10 10 0 0 0 10 0Z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hitendrasingh1729/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 hover:bg-gray-50 rounded-full group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.52 5.85h3.1V17h-3.1Zm1.6-4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM6.96 8.69h2.97v1.13c.42-.77 1.5-1.52 3.09-1.52 3.3 0 3.91 2.18 3.91 5v3.64h-3.1V13.3c0-1.37-.03-3.13-1.91-3.13-1.92 0-2.22 1.5-2.22 3v3.87H6.95Z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:hitendra369432@gmail.com"
          className="inline-flex items-center justify-center p-2 hover:bg-gray-50 rounded-full group"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18 3H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 2v.217L10 10 2 5.217V5Zm0 10H2V7l8 5 8-5Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BottomNavBar;
