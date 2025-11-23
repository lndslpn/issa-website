import './App.css'
import Hero from './content/Hero.jsx'
// import About from './content/Hero.jsx'
// import Executives from './content/Executives.jsx'
// import Events from './content/Events.jsx'
// import Faq from './content/FAQ.jsx'
// import Contact from './content/Contact.jsx'
// import Resources from './content/Resources.jsx'
import { default as Navbar }  from './tools/Header.jsx';
import { default as Footer }  from './tools/Footer.jsx';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App