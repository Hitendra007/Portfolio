import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Coding from "./Components/Coding/Coding";
import BottomNavBar from "./Components/Navbar/BottomNavBar";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <div className="mx-auto mt-10 px-4 sm:px-6 md:px-8 lg:px-10 w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <About />
        <Projects />
        <Coding />
        <WorkExperience />
        <Contact />
        <BottomNavBar />
      </div>
    </>
  );
}

export default App;
