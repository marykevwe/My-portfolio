import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-[#FE7F9C] dark:bg-[#A1045A] relative">
      <h1 className="text-xl text-white font-serif font-bold">Marian.dev</h1>

      {/* Desktop Nav */}
      <div className="hidden md:flex text-white font-serif gap-4 items-center">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>

        <a
          href="/Mary-CV.pdf"
          download
          className="px-4 py-2 border rounded-lg hover:bg-white hover:text-[#A1045A] transition duration-300"
        >
          Download CV
        </a>

        <button onClick={() => setDark(!dark)} className="ml-2 p-2 rounded-full">
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-200" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex items-center gap-2">
        {/* Dark/Light Toggle */}
        <button onClick={() => setDark(!dark)} className="text-white text-lg p-2 rounded-full">
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
        </button>

        {/* Download CV */}
        <a
          href="/Mary-CV.pdf"
          download
          className="text-sm px-3 py-1 border rounded-lg text-white hover:bg-white hover:text-[#A1045A] transition duration-300"
        >
          Download CV
        </a>

        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-[#FE7F9C] dark:bg-[#A1045A] text-white w-48 py-4 rounded-lg shadow-lg flex flex-col items-start gap-3 px-4 md:hidden z-50">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
