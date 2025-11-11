import { Menu, X, Palette, User, Briefcase, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work', icon: Briefcase },
    { href: '#about', label: 'About', icon: User },
    { href: '#contact', label: 'Contact', icon: Mail },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#hero" className="group inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md">
                <Palette size={18} />
              </div>
              <span className="font-semibold tracking-tight text-gray-900">Ava Sparks</span>
              <span className="hidden text-sm text-gray-500 sm:block">UI/UX Designer</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 transition"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white/70 backdrop-blur"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/20 px-4 py-2 md:hidden">
              <nav className="grid gap-1 pb-3">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/70 transition"
                  >
                    <Icon size={16} /> {label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
