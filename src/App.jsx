import React, { useState, useEffect } from "react";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Coding from "./Components/Coding/Coding";
import BottomNavBar from "./Components/Navbar/BottomNavBar";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Contact from "./Components/Contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {/* Full-Screen Loading Blur */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-white backdrop-blur-lg flex items-center justify-center">
          <p className="text-lg font-bold text-gray-600">Loading...</p>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-10 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 ${
          isLoading ? "opacity-30 pointer-events-none" : "opacity-100"
        } transition-opacity duration-500 bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-gray-100 py-6`}
      >
        <About />
        <Projects />
        <Coding />
        <WorkExperience />
        <Contact />
      </div>
      {/* Keep navbar outside the container so it always stays on top and visible */}
      <BottomNavBar />
    </>
  );
}

export default App;
