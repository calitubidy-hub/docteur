import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/',              label: 'Code de la route' },
  { to: '/permis-b',      label: 'Permis B' },
  { to: '/permis-moto',   label: 'Permis Moto' },
  { to: '/pack-web-code', label: 'Pack Web Code' },
  { to: '/temoignages',   label: 'Témoignages' },
  { to: '/conditions',    label: 'Conditions' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://docteurpermis.fr/wp-content/uploads/2024/07/docteur-permis.png"
            alt="Docteur Permis"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-semibold text-sm transition-colors ${
                pathname === l.to
                  ? 'text-[#3498db]'
                  : 'text-[#2c3e50] hover:text-[#3498db]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/permis-b"
            className="bg-[#3498db] hover:bg-[#2980b9] text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Réserver une leçon
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#2c3e50]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`font-semibold text-base py-2 border-b border-gray-100 ${
                pathname === l.to ? 'text-[#3498db]' : 'text-[#2c3e50]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/permis-b"
            onClick={() => setOpen(false)}
            className="bg-[#3498db] text-white font-bold px-5 py-3 rounded-lg text-center mt-2"
          >
            Réserver une leçon
          </Link>
        </div>
      )}
    </header>
  )
}
