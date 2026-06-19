import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'

export function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-16 text-center md:px-12 md:py-24">
            <div className="bg-glow pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(0,153,255,0.08),rgba(223,122,254,0.08))]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                ¿Listo para trabajar más{' '}
                <span className="text-gradient">inteligente</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-white/60">
                Agendá una llamada gratis y descubrí cómo la automatización puede
                transformar tu negocio.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="white">
                    Trabajá con nosotros
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <a href="#servicios">
                  <Button size="lg" variant="outline">
                    Ver servicios
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
