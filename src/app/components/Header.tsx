'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Software',
      href: '/software',
    },
    {
      label: 'Hardware',
      href: '/hardware',
    },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }

    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="CSH Tech Solution"
            width={95}
            height={40}
            priority
            className="h-auto w-[82px] object-contain sm:w-[88px] lg:w-[92px]"
          />
        </Link>

        <nav className="hidden h-full items-center gap-8 md:flex">
          {links.map((link) => {
            const active = isActive(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex h-full items-center px-1 text-[14px] font-semibold transition-colors ${
                  active
                    ? 'text-[#064B7A]'
                    : 'text-slate-500 hover:text-[#064B7A]'
                }`}
              >
                {link.label}

                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400" />
                )}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-slate-700 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-slate-50 px-6 py-3 md:hidden">
          {links.map((link) => {
            const active = isActive(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block border-b border-slate-200 py-4 text-[15px] font-semibold last:border-b-0 ${
                  active
                    ? 'text-[#064B7A]'
                    : 'text-slate-500'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}