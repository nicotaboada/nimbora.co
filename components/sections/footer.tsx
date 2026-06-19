import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Casos de estudio', href: '/#casos' },
]

const socials = [Instagram, Facebook, Linkedin, Twitter]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 text-base font-semibold">
              <span className="size-6 rounded-md bg-[linear-gradient(135deg,#0099ff,#df7afe)]" />
              Analytics<span className="text-white/50">Group</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              Automatización e inteligencia artificial a medida para que tu negocio
              crezca trabajando más inteligente.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full border border-border text-white/60 transition-colors hover:border-white/30 hover:text-white"
                  aria-label="Red social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Navegación</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-white/45 md:flex-row">
          <p>© 2026 Analytics Group. Todos los derechos reservados.</p>
          <p>Hecho con automatización e IA.</p>
        </div>
      </div>
    </footer>
  )
}
