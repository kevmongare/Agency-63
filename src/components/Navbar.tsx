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
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo mark + wordmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Gradient "63" badge */}
          <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center shadow-md">
            <span className="font-display font-black text-white text-lg leading-none tracking-tight">63</span>
          </div>
          <div className="leading-none">
            <span className="font-display font-black text-xl tracking-widest text-surface-900 group-hover:text-gradient transition-all">
              AGENCY
            </span>
            <span className="font-display font-black text-xl tracking-widest text-gradient">63</span>
            <p className="text-[9px] tracking-[0.3em] text-surface-500 uppercase font-medium -mt-0.5">The Agency</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-surface-600 hover:text-surface-900 transition-colors font-medium tracking-wide"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md hover:opacity-90 hover:shadow-lg transition-all duration-200"
        >
          Get A Quote
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden text-surface-700 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-surface-200 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-surface-700 hover:text-surface-900 text-base font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="justify-center bg-brand-gradient text-white font-bold py-3 rounded-lg text-center hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            Get A Quote
          </a>
        </div>
      )}
    </header>
  );
}
