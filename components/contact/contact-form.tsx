'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Email de contacto (solo para mostrar en mensajes de error)
const EMAIL = 'nicolas@nimbora.co'
// Endpoint de FormSubmit. Tras activar la cuenta, reemplazar el email por el token
// que envía FormSubmit para no exponer la dirección en el código fuente.
const ENDPOINT = 'https://formsubmit.co/ajax/nicolas@nimbora.co'

const services = [
  'Agentes de IA',
  'Automatización de Workflows',
  'Consultoría IA',
  'Software a Medida',
]

const budgets = [
  'Menos de USD $2.000',
  'USD $2.000 – $5.000',
  'USD $5.000 – $7.500',
  'USD $7.500 – $10.000',
  'Más de USD $10.000',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

const fieldClass =
  'w-full rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10'

const labelClass = 'mb-2 block text-sm font-medium text-white/85'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'Nueva consulta desde la web — Nimbora',
        }),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card px-6 py-20 text-center backdrop-blur-sm">
        <div className="flex size-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0099ff,#df7afe)]">
          <Check className="size-7 text-white" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold">¡Gracias por escribirnos!</h3>
        <p className="mt-3 max-w-sm text-white/60">
          Recibimos tu consulta y nos vamos a comunicar dentro de las próximas 24
          horas hábiles.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => setStatus('idle')}
        >
          Enviar otra consulta
        </Button>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 backdrop-blur-sm md:p-8">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Contanos sobre tu proyecto
      </h2>
      <p className="mt-2 text-sm text-white/55">
        Respondemos dentro de las 24 horas, agendamos una llamada de 30 minutos y
        definimos los próximos pasos.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {/* honeypot anti-spam */}
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="nombre">
              Nombre <span className="text-pink">*</span>
            </label>
            <input id="nombre" name="Nombre" required placeholder="Tu nombre" className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="apellido">
              Apellido <span className="text-pink">*</span>
            </label>
            <input id="apellido" name="Apellido" required placeholder="Tu apellido" className={fieldClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="email">
              Email <span className="text-pink">*</span>
            </label>
            <input id="email" name="Email" type="email" required placeholder="tu@email.com" className={fieldClass} />
          </div>
          <div>
            <label className={labelClass} htmlFor="telefono">
              Teléfono <span className="text-pink">*</span>
            </label>
            <input id="telefono" name="Teléfono" type="tel" required placeholder="+54 11 1234 5678" className={fieldClass} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="servicio">
              Servicio de interés <span className="text-pink">*</span>
            </label>
            <select id="servicio" name="Servicio" required defaultValue="" className={`${fieldClass} appearance-none`}>
              <option value="" disabled className="bg-[#161616]">
                Elegí un servicio
              </option>
              {services.map((s) => (
                <option key={s} value={s} className="bg-[#161616]">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="budget">
              Presupuesto estimado (USD) <span className="text-pink">*</span>
            </label>
            <select id="budget" name="Presupuesto" required defaultValue="" className={`${fieldClass} appearance-none`}>
              <option value="" disabled className="bg-[#161616]">
                Elegí un rango
              </option>
              {budgets.map((b) => (
                <option key={b} value={b} className="bg-[#161616]">
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="proyecto">
            Contanos sobre tu proyecto <span className="text-pink">*</span>
          </label>
          <textarea
            id="proyecto"
            name="Descripción del proyecto"
            required
            rows={5}
            placeholder="¿Qué estás construyendo, cuándo querés lanzar y cuál es tu setup actual (si tenés)?"
            className={`${fieldClass} resize-none`}
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-pink">
            Hubo un problema al enviar. Probá de nuevo o escribinos a {EMAIL}.
          </p>
        )}

        <Button
          type="submit"
          size="lg"
          variant="white"
          className="w-full"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar consulta
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
