import { Star } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const testimonials = [
  {
    quote:
      'Automatizaron nuestro soporte y ahora respondemos al instante. El equipo se enfoca en lo importante.',
    name: 'María López',
    role: 'CEO, Tienda Online',
  },
  {
    quote:
      'En semanas teníamos un sistema funcionando. La diferencia en productividad fue inmediata.',
    name: 'Javier Pérez',
    role: 'Fundador, SaaS B2B',
  },
  {
    quote:
      'Entendieron nuestro negocio y propusieron exactamente lo que necesitábamos. Súper recomendados.',
    name: 'Carla Gómez',
    role: 'Directora de Operaciones',
  },
  {
    quote:
      'Pasamos de planillas manuales a reportes automáticos. Ahorramos decenas de horas al mes.',
    name: 'Diego Fernández',
    role: 'Gerente, Consultora',
  },
]

export function Testimonials() {
  return (
    <section className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Testimonios
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="size-10 rounded-full bg-[linear-gradient(135deg,#0099ff,#df7afe)]" />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
