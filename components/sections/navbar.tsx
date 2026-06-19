'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SERVICES } from '@/lib/services'

const links = [
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Casos', href: '/#casos' },
]

const solutions = SERVICES.map((s) => ({
  label: s.navLabel,
  href: `/soluciones/${s.slug}`,
}))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-black/60 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold">
          <span className="size-6 rounded-md bg-[linear-gradient(135deg,#0099ff,#df7afe)]" />
          Nimbora
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            {/* Dropdown: Soluciones IA */}
            <div
              className="group relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white">
                Soluciones IA
                <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* invisible bridge so the panel doesn't close on the gap */}
              <div className="absolute left-1/2 top-full h-3 w-56 -translate-x-1/2" />

              <div
                className={cn(
                  'absolute left-1/2 top-[calc(100%+0.5rem)] w-64 -translate-x-1/2 rounded-2xl border border-border bg-black/90 p-2 backdrop-blur-xl transition-all duration-200',
                  solutionsOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0',
                )}
              >
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
          <Link href="/contact">
            <Button size="sm" variant="white">
              Trabajá con nosotros
            </Button>
          </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-black/80 p-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            {/* Soluciones IA (móvil) */}
            <p className="mt-3 px-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              Soluciones IA
            </p>
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {s.label}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3">
              <Button size="sm" variant="white" className="w-full">
                Trabajá con nosotros
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
