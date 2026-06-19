'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConstellationBackground } from '@/components/sections/constellation-bg'
// import { HeroDiagram } from '@/components/sections/hero-diagram'

// rotating headline variants (Boom-style)
const phrases = [
  {
    head: 'Reducimos el trabajo manual un 50%',
    sub: 'con sistemas nativos de IA',
    tag: 'para servicios financieros',
  },
  {
    head: 'Recortamos el tiempo de procesos un 95%',
    sub: 'con flujos automatizados',
    tag: 'para inmobiliarias',
  },
  {
    head: 'Triplicamos la capacidad del equipo',
    sub: 'con asistentes y portales a medida',
    tag: 'para tu negocio',
  },
]

const trustedLogos = [
  { src: '/trusted/nimbo-white.png', alt: 'Nimboclass' },
  { src: '/trusted/skilling-white.png', alt: 'Skilling Forward' },
  { src: '/trusted/buildhunter-white.png', alt: 'BuildHunter' },
  { src: '/trusted/barberjob-white.png', alt: 'Barberjob' },
]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.35 } },
  exit: { transition: { staggerChildren: 0.15, staggerDirection: -1 } },
}

const line: Variants = {
  hidden: { opacity: 0, y: -28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: 'blur(6px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  const [phrase, setPhrase] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setPhrase((p) => (p + 1) % phrases.length)
    }, 5200)
    return () => clearInterval(id)
  }, [])

  const current = phrases[phrase]

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-64 md:pb-72">
      {/* boom-style constellation + light streaks (white on black) */}
      <ConstellationBackground />

      <div className="relative w-full px-6 md:px-12 lg:px-16">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-h-[140px] md:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={phrase}
                variants={container}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.h1
                  variants={line}
                  className="whitespace-nowrap text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl"
                >
                  {current.head}
                </motion.h1>
                <motion.p
                  variants={line}
                  className="mt-4 text-2xl font-medium leading-tight text-white/70 md:text-3xl"
                >
                  {current.sub}
                </motion.p>
                <motion.p
                  variants={line}
                  className="mt-2 text-lg text-white/40 md:text-xl"
                >
                  {current.tag}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href="/contact">
              <Button size="lg" variant="white">
                Trabajá con nosotros
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a href="#casos">
              <Button size="lg" variant="outline">
                Ver casos de estudio
              </Button>
            </a>
          </div>

          {/* Trusted by */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 max-w-2xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Confían en nosotros
            </p>
            <div className="relative mt-6 flex h-12 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-14">
                {[...trustedLogos, ...trustedLogos].map((logo, i) => (
                  <Image
                    key={`${logo.src}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={32}
                    className="h-7 w-auto shrink-0 object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* animated diagram (right column) - COMENTADO */}
        {/* <div className="hidden justify-center lg:flex">
          <HeroDiagram />
        </div> */}
      </div>
    </section>
  )
}
