import React, { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from './components/Nav'
import AskTagBot from './components/AskTagBot'

function App() {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0E0E10]">
      <Nav />
      <Hero onGetStarted={scrollToContact} onSeeWork={scrollToWork} />
      <section id="about" className="py-20 bg-[#0E0E10] text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold">Who We Are</h2>
            <p className="mt-4 text-white/70">At Tagverse.io, we blend innovation with intelligence. From automated marketing systems to creative SaaS products, we help brands evolve with the power of AI.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">AI • Automation</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Data • Creativity</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">B2B • B2C</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">SaaS • Design</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#7B3FE4]/20 to-transparent blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10" />
          </div>
        </div>
      </section>
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Contact ref={contactRef} />
      <Footer />
      <AskTagBot />
    </div>
  )
}

export default App
