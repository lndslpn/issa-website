import { useState } from 'react'
import './App.css'
import Hero from './components/hero.jsx'
import About from './components/hero.jsx'
import Executives from './components/executives.jsx'
import Events from './components/events.jsx'
import Faq from './components/faq.jsx'
import Contact from './components/contact.jsx'
import Resources from './components/resources.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        {/* Header */}
        <div className="">
          
        </div>

        {/* Output Container */}
        <div className="">
          <Routes>
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/executives" element={<Executives />} />
            <Route path="/events" element={<Events />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
