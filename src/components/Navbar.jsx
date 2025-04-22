
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold">Mary.dev</h1>
      <div className="flex gap-4">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <button onClick={() => setDark(!dark)} className="ml-4 px-2 py-1 border rounded">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}
