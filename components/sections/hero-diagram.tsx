'use client'

import { motion } from 'motion/react'
import {
  Check,
  Hourglass,
  Sparkles,
  RefreshCw,
  TrendingUp,
  Zap,
  PieChart,
} from 'lucide-react'

const pills = ['Documentos', 'Bases de datos', 'Herramientas', 'Fuentes externas']

// fanned documents (rotation + offset baked into static transform)
const docs = [
  { label: 'Base', rotate: -12, x: -72, y: 12, z: 1 },
  { label: 'Doc', rotate: -6, x: -37, y: 4, z: 2 },
  { label: 'File', rotate: 0, x: 0, y: 2, z: 3 },
  { label: 'Data', rotate: 6, x: 37, y: 4, z: 2 },
  { label: 'Reportes', rotate: 12, x: 72, y: 12, z: 1 },
]

const steps = [
  { label: 'Evaluar', desc: 'Entendemos tu operación', done: true },
  { label: 'Alinear', desc: 'Definimos métricas', done: true },
  { label: 'Preparar datos', desc: 'Limpieza y estructura', active: true },
  { label: 'Diseñar', desc: 'Construimos a medida', muted: true },
  { label: 'Automatizar', desc: 'Integramos todo', muted: true },
  { label: 'Optimizar', desc: 'Medimos y mejoramos', muted: true },
]

const results = [
  { icon: TrendingUp, color: 'text-emerald-400', value: '40%', text: 'menos trabajo manual' },
  { icon: Zap, color: 'text-amber-400', value: '', text: 'Decisiones más rápidas' },
  { icon: PieChart, color: 'text-primary', value: '', text: 'ROI medible' },
]

export function HeroDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[560px] rounded-3xl border border-border bg-white/[0.02] p-5 backdrop-blur-sm"
      style={{ aspectRatio: '100/87' }}
    >
      {/* connectors — single continuous lines + traveling comet */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 87"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* LEFT PATH (solid + comet): wraps around left, under, and curves to Results card bottom */}
        <path
          d="M27 35.5 V38 Q27 41 24.5 41 H9.5 Q6.5 41 6.5 44 V81 Q6.5 85 14.5 85 H50 Q58 85 58 81 V68 Q58 67 61 67 H65"
          className="stroke-primary/70"
          strokeWidth="0.5"
        />
        <path
          d="M27 35.5 V38 Q27 41 24.5 41 H9.5 Q6.5 41 6.5 44 V81 Q6.5 85 14.5 85 H50 Q58 85 58 81 V68 Q58 67 61 67 H65"
          className="animate-comet stroke-[#7eb6ff]"
          strokeWidth="0.9"
        />

        {/* RIGHT PATH (solid + comet): wraps around right, passes Sparkles, curves to Results card top */}
        <path
          d="M35 35.5 V38 Q35 41 37.5 41 H55 Q58 41 58 44 V56 Q58 57 61 57 H65"
          className="stroke-primary/70"
          strokeWidth="0.5"
        />
        <path
          d="M35 35.5 V38 Q35 41 37.5 41 H55 Q58 41 58 44 V56 Q58 57 61 57 H65"
          className="animate-comet stroke-[#7eb6ff]"
          strokeWidth="0.9"
        />

        {/* MIDDLE PATH (solid + comet): horizontal connector from dashed box to Results card middle */}
        <path
          d="M53.5 62 H65"
          className="stroke-primary/70"
          strokeWidth="0.5"
        />
        <path
          d="M53.5 62 H65"
          className="animate-comet stroke-[#7eb6ff]"
          strokeWidth="0.9"
        />

        {/* Short middle stub at top ports (completely floating, centered on the dot) */}
        <path d="M31 35.5 V41.5" className="stroke-primary/40" strokeWidth="0.5" />

        {/* Connection nodes — translucent halo + solid core */}
        {[
          { x: 27, y: 35.5, c: 'primary' },
          { x: 35, y: 35.5, c: 'primary' },
          { x: 31, y: 38.5, c: 'primary' },
          { x: 58, y: 56, c: 'primary' },
          { x: 61, y: 62, c: 'primary' },
          { x: 58, y: 68, c: 'primary' },
        ].map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r="1.8"
              className={n.c === 'pink' ? 'fill-[#df7afe]/15' : 'fill-primary/15'}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="0.85"
              className={n.c === 'pink' ? 'fill-[#df7afe]' : 'fill-primary'}
              stroke="#0d0d0d"
              strokeWidth="0.3"
            />
          </g>
        ))}
      </svg>

      {/* SOURCES panel */}
      <div className="relative rounded-2xl border border-dashed border-white/12 bg-white/[0.015] p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/65"
            >
              {p}
            </span>
          ))}
        </div>

        {/* fanned documents */}
        <div className="relative mt-2 h-[92px] overflow-hidden">
          {docs.map((d, i) => (
            <div
              key={d.label}
              className="absolute left-1/2 top-1"
              style={{
                transform: `translateX(calc(-50% + ${d.x}px)) translateY(${d.y}px) rotate(${d.rotate}deg)`,
                zIndex: d.z,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex h-[74px] w-[52px] flex-col gap-1 rounded-lg border border-white/12 bg-[#15131f] p-1.5 shadow-xl"
              >
                <span className="text-[7px] font-medium text-white/70">{d.label}</span>
                <span className="h-0.5 w-full rounded bg-white/10" />
                <span className="h-0.5 w-4/5 rounded bg-white/10" />
                <span className="h-0.5 w-3/5 rounded bg-white/10" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS box (dashed border line wraps this) — lower-left */}
      <div
        className="absolute rounded-xl border border-dashed border-white/15 bg-[#121019] p-3.5 shadow-xl"
        style={{
          left: '11%',
          top: '50%',
          width: '42.5%',
          height: '42.5%',
        }}
      >
        <div className="flex h-full flex-col">
          <p className="text-[11px] font-semibold text-white">Cómo activamos la IA</p>
          <ul className="mt-2.5 space-y-2">
            {steps.map((s) => (
              <li key={s.label} className="flex items-start gap-2 text-[10px] leading-tight">
                <span
                  className={
                    s.done
                      ? 'mt-px flex size-3.5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary'
                      : s.active
                        ? 'mt-px flex size-3.5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80'
                        : 'mt-px flex size-3.5 shrink-0 items-center justify-center rounded-full text-white/25'
                  }
                >
                  {s.done ? (
                    <Check className="size-2.5" />
                  ) : s.active ? (
                    <Hourglass className="size-2.5" />
                  ) : (
                    <span className="text-[6px]">•••</span>
                  )}
                </span>
                <span className={s.muted ? 'text-white/25' : 'text-white/45'}>
                  <span className={s.muted ? 'font-medium' : 'font-medium text-white'}>
                    {s.label}
                  </span>{' '}
                  {s.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RESULTS card — compact, right */}
      <div className="absolute right-[3%] top-[71%] w-[32%] -translate-y-1/2 rounded-2xl border border-white/12 bg-[#121019] p-3.5 shadow-xl">
        <p className="text-[13px] font-semibold text-white">Resultados</p>
        <ul className="mt-3 space-y-3">
          {results.map((r, i) => (
            <li key={i} className="flex items-center gap-2 text-[12px]">
              <r.icon className={`size-4 shrink-0 ${r.color}`} />
              <span className="text-white/80">
                {r.value && <span className="font-semibold text-white">{r.value} </span>}
                {r.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* floating accent badges placed directly on the SVG line curves */}
      <div className="animate-float absolute left-[58%] top-[54%] z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[#15131f] text-primary shadow-lg">
        <Sparkles className="size-4" />
      </div>
      <div
        className="animate-float absolute left-[6.5%] top-[91%] z-10 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-white/12 bg-[#15131f] text-primary shadow-lg"
        style={{ animationDelay: '1.5s' }}
      >
        <RefreshCw className="size-4" />
      </div>
    </motion.div>
  )
}
