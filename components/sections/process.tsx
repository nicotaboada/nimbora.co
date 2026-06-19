import { Reveal } from '@/components/ui/reveal'

const steps = [
  {
    n: '01',
    title: 'Diagnóstico inicial',
    description:
      'Nos reunimos con las personas clave de tu equipo para analizar tus procesos actuales, identificar oportunidades de automatización y estimar el ahorro de tiempo en toda tu organización.',
  },
  {
    n: '02',
    title: 'Diseño de la solución',
    description:
      'Según tus necesidades, recomendamos herramientas existentes o desarrollamos soluciones a medida. Cada propuesta busca maximizar el retorno e integrarse sin fricción con tus sistemas.',
  },
  {
    n: '03',
    title: 'Capacitación y soporte',
    description:
      'Capacitamos a tu equipo para usar los nuevos sistemas de forma efectiva y brindamos soporte continuo. Un acompañamiento completo que asegura resultados duraderos.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Cómo trabajamos
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Escuchamos, pensamos y construimos.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-12">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="flex gap-8">
                <div className="flex-shrink-0">
                  <p className="text-4xl md:text-5xl font-bold text-primary/60">{step.n}</p>
                </div>
                <div className="flex-1 border-b border-white/10 pb-12">
                  <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-white/60 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
