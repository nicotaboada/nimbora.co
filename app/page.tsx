import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { CaseStudies } from '@/components/sections/case-studies'
import { About } from '@/components/sections/about'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
