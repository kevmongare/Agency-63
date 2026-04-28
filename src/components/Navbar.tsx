import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Services', 'About', 'Work', 'Team', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 relative">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="40" height="40" rx="6" fill="#0f0f0f"/>
              <text x="4" y="28" fontFamily="Barlow Condensed, sans-serif" fontWeight="800" fontSize="26" fill="url(#logoGrad)">63</text>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2DE2C8"/>
                  <stop offset="100%" stopColor="#7B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white group-hover:text-[#2DE2C8] transition-colors">
            AGENCY<span className="text-gradient">63</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/60 hover:text-[#2DE2C8] transition-colors duration-200 tracking-wide font-medium"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-black text-sm font-bold px-5 py-2.5 rounded transition-all duration-200"
          style={{ background: 'linear-gradient(135deg, #2DE2C8, #7B5CF6)' }}
        >
          Get A Quote
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-[#2DE2C8] text-base font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex justify-center text-black font-bold py-3 rounded transition-colors"
            style={{ background: 'linear-gradient(135deg, #2DE2C8, #7B5CF6)' }}
            onClick={() => setMobileOpen(false)}
          >
            Get A Quote
          </a>
        </div>
      )}
    </header>
  );
}
