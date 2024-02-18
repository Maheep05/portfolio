import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Internships } from "./components/Internships"
import { Navbar } from "./components/Navbar"
import { Projects } from "./components/Projects"


function App() {

  return (
    <div className="bg-slate-900">
      <Navbar />
      <About />
      <Projects/>
      <Internships/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
