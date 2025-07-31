import { Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <>
      <Header />
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
