import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Coding from "./Components/Coding/coding"
import BottomNavBar from "./Components/Navbar/BottomNavBar"
import WorkExperience from "./Components/WorkExperience/WorkExperience"
import Contact from "./Components/Contact/Contact"
function App() {

  return (
    <>
      <div className="mx-auto mt-10 w-2/5 ">
       <About/>
       <Projects/>
       <Coding/>
       <WorkExperience/>
       <Contact/>
       <BottomNavBar/>
      </div>
    </>
  )
}

export default App
