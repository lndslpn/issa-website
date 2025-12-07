import './App.css'

import { Routes, Route } from 'react-router-dom'

import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Executives from './components/Executives.jsx'
import Events from './components/Events.jsx'
import Faq from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Resources from './components/Resources.jsx'
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