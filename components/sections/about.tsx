import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const highlights = [
  'Liderazgo con visión',
  'Enfoque AI-first',
  'Atención personalizada',
  'Foco en resultados',
  'Tecnología de vanguardia',
]

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Quién está detrás
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Sobre mí
          </h2>
        </Reveal>

        {/* Profile - Photo + Name + Role */}
        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <div className="flex flex-col items-center">
            {/* Photo */}
            <div className="w-40 h-40 rounded-full border-8 border-white/10 overflow-hidden flex-shrink-0">
              <Image
                src="/nico.png"
                alt="Nicolás Taboada"
                width={160}
                height={160}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>

            {/* Name & Role */}
            <h3 className="mt-6 text-2xl font-semibold">Nicolás Taboada</h3>
            <p className="mt-2 text-primary font-medium text-sm">Fundador</p>
          </div>
        </Reveal>

        {/* Description & Highlights */}
        <div className="mt-12 space-y-8">
          {/* Description */}
          <Reveal delay={0.2} className="max-w-3xl mx-auto">
            <div className="space-y-6 text-white/70 leading-relaxed text-center">
              <p>
                Soy fundador de Analytics Group y mi misión es acercar la automatización inteligente a las empresas de Latinoamérica. No me limito a implementar tecnología: transformo la forma en que operan los negocios entendiendo a fondo sus desafíos y diseñando soluciones que generan un impacto real.
              </p>
              <p>
                Mi enfoque combina pensamiento estratégico con ejecución concreta. Trabajo con un grupo acotado de clientes a la vez para que cada proyecto reciba la atención y la experiencia que merece. Cada solución la construyo pensando en el valor a largo plazo, no en arreglos rápidos.
              </p>
            </div>
          </Reveal>

          {/* Highlights - 2 columns */}
          <Reveal delay={0.3}>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="size-5 text-primary" />
                  </div>
                  <p className="text-base font-medium">{highlight}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
