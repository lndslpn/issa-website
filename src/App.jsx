import './App.css'

import { Routes, Route } from 'react-router-dom'

import Hero from './content/Hero.jsx'
import About from './content/About.jsx'
import Executives from './content/Executives.jsx'
import Events from './content/Events.jsx'
import Faq from './content/FAQ.jsx'
import Contact from './content/Contact.jsx'
import Resources from './content/Resources.jsx'
import Navbar from './tools/Header.jsx'
import Footer from './tools/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App