import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Coding from "./Components/Coding/coding"
function App() {

  return (
    <>
      <div className="mx-auto mt-10 w-2/5 ">
       <About/>
       <Projects/>
       <Coding/>
      </div>
    </>
  )
}

export default App
