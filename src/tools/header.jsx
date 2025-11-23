import { useState, useEffect } from "react";
import logo from '../assets/issalogo.png';

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#executives", label: "Executives" },
    { href: "#events", label: "Events" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <header className={"sticky top-0 z-50 transition-shadow supports-[backdrop-filter]:backdrop-blur-md " + (scrolled ? "shadow-sm bg-greenhead" : "bg-greenhead")}>
        <a href="#top" className="flex items-center justify-center py-1"> <img src={logo} alt="Logo" className="h-15 w-15"/> </a>
        <p className="flex items-center justify-center text-white text-center font-light font-instrument text-3xl py-1">Indigenous in STEM Student Association</p>
      <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center">
        <div className="flex h-10 items-center justify-between">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-25">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-base text-white hover:text-lighttanback transition-colors font-instrument">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-browntxt"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-browntxt/90 hover:bg-white/5 font-instrument"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}