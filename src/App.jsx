import { About } from "./components/About"
import { Achievements } from "./components/Achievements"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Internships } from "./components/Internships"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects"
import { Techstack } from "./components/Techstack"


function App() {

  return (
    <div className="bg-slate-900 min-w-full ">
      <Navbar />
      <About />
      <Projects />
      <Internships />
      <Achievements />
      <Techstack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
