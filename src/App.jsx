import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Executives from "./components/Executives.jsx";
import Events from "./components/Events.jsx";
import Faq from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Resources from "./components/Resources.jsx";

// Layout
import Navbar from "./tools/Header.jsx";
import Footer from "./tools/Footer.jsx";

// Animation helpers
import PageTransition from "./components/PageTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Always visible */}
      <Navbar />

      {/* Scroll to top when route changes */}
      <ScrollToTop />

      {/* Animated page container */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* Home */}
            <Route
              path="/"
              element={
                <PageTransition>
                  <Hero />
                </PageTransition>
              }
            />

            {/* About */}
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />

            {/* Executives */}
            <Route
              path="/executives"
              element={
                <PageTransition>
                  <Executives />
                </PageTransition>
              }
            />

            {/* Events */}
            <Route
              path="/events"
              element={
                <PageTransition>
                  <Events />
                </PageTransition>
              }
            />

            {/* FAQ */}
            <Route
              path="/faq"
              element={
                <PageTransition>
                  <Faq />
                </PageTransition>
              }
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            {/* Resources */}
            <Route
              path="/resources"
              element={
                <PageTransition>
                  <Resources />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Always visible */}
      <Footer />
    </div>
  );
}

export default App;