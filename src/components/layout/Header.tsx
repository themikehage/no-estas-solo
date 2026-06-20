import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#datos', label: 'Datos' },
  { href: '#estudio', label: 'Estudio Nutt' },
  { href: '#historias', label: 'Historias' },
  { href: '#ayuda', label: 'Ayuda' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neural-black/80 backdrop-blur-md border-b border-hospital-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl text-hospital-white hover:text-synapse-green transition-colors"
        >
          No Estás Solo
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-hospital-white/60 hover:text-hospital-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-hospital-white p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-transform" style={{ transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-opacity" style={{ opacity: isOpen ? 0 : 1 }} />
          <div className="w-6 h-0.5 bg-current transition-transform" style={{ transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-hospital-white/5 bg-neural-black/95"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-hospital-white/60 hover:text-hospital-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-synapse-green"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
