import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Sarah Chen', role: 'CMO, FinSaaS', quote: 'Tagverse engineered our growth stack with AI—results were instant and compounding.' },
  { name: 'Daniel Ruiz', role: 'Founder, D2C Brand', quote: 'Our CPA dropped and creative velocity doubled. Their automation is unmatched.' },
  { name: 'Priya Singh', role: 'VP Marketing, B2B', quote: 'From pipeline automation to analytics, they made our GTM feel effortless.' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0E0E10] text-white">
      <div className="relative container mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold">AI-driven success stories</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-white/70 max-w-2xl">Real impact from our partners.</motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={t.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="rounded-2xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-4 text-sm text-white/60">{t.name} • {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
