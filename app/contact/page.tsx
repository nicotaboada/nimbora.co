import type { Metadata } from 'next'
import { Clock, Zap, Users, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { ConstellationBackground } from '@/components/sections/constellation-bg'
import { Reveal } from '@/components/ui/reveal'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contacto — Nimbora',
  description:
    'Agendá tu evaluación de automatización gratuita y descubrí cómo podemos transformar las operaciones de tu negocio con IA.',
}

const benefits = [
  {
    icon: Clock,
    title: 'Respuesta en 24 horas',
    desc: 'Te contactamos dentro de un día hábil para confirmar tu consulta.',
  },
  {
    icon: Zap,
    title: '50% menos trabajo manual',
    desc: 'Nuestros clientes suelen reducir el trabajo manual a la mitad en 90 días.',
  },
  {
    icon: Users,
    title: 'Guía experta',
    desc: 'Trabajás directo con especialistas en automatización que entienden tu industria.',
  },
  {
    icon: ShieldCheck,
    title: 'Sin compromiso',
    desc: 'Consulta gratuita con recomendaciones accionables, sin ataduras.',
  },
]

const steps = [
  'Completá este formulario rápido',
  'Revisamos tus necesidades',
  'Agendamos tu consulta',
  'Recibís recomendaciones a medida',
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <ConstellationBackground />
        </div>
        <div className="bg-glow pointer-events-none absolute inset-x-0 top-0 h-[60vh]" />

        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-32 md:pt-40">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Boom-style copy */}
            <div className="lg:pt-4">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                  Consulta gratuita
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                  ¿Listo para reducir el trabajo manual un{' '}
                  <span className="text-gradient">50%</span>?
                </h1>
                <p className="mt-6 max-w-md text-lg text-white/60">
                  Agendá tu evaluación de automatización gratuita y descubrí cómo
                  podemos transformar las operaciones de tu negocio con soluciones
                  de inteligencia artificial.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-10 space-y-6">
                  {benefits.map((b) => (
                    <li key={b.title} className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04]">
                        <b.icon className="size-5 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{b.title}</h3>
                        <p className="mt-1 text-sm text-white/55">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 rounded-2xl border border-border bg-card p-6 backdrop-blur-sm">
                  <h3 className="font-semibold">Cómo funciona</h3>
                  <ol className="mt-5 space-y-4">
                    {steps.map((step, i) => (
                      <li key={step} className="flex items-center gap-4">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                          {i + 1}
                        </span>
                        <span className="text-sm text-white/70">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
