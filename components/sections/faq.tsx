'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: '¿Cuánto tarda en implementarse?',
    a: 'Depende del alcance, pero la mayoría de los proyectos están funcionando entre 2 y 6 semanas. Empezamos con lo que genera más impacto rápido.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'No. Nos encargamos de todo el lado técnico y te entregamos sistemas listos para usar, con la capacitación que necesites.',
  },
  {
    q: '¿Se integra con mis herramientas actuales?',
    a: 'Sí. Trabajamos con tu CRM, email, planillas y las apps que ya usás para que todo conviva en un mismo flujo.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Totalmente. Aplicamos buenas prácticas de seguridad y nunca compartimos tu información con terceros.',
  },
  {
    q: '¿Qué pasa después de la implementación?',
    a: 'Te acompañamos con soporte y optimización continua para que los sistemas sigan mejorando con el tiempo.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Preguntas frecuentes
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium md:text-lg">{faq.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-white/50 transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-white/55">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
