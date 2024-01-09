import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"
import Technomancy from "./components/Technomancy"

const App=()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route exact path="/technomancy" element={<Technomancy />} />
          </Routes>
          <Hero />
        </div>
        <div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
