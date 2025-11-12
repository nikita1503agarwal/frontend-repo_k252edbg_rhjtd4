import React from 'react'
import { motion } from 'framer-motion'

const cases = [
  { title: 'Fintech SaaS Growth Engine', metrics: ['+300% ROI', 'Automated 12 workflows', '10M+ reach'], desc: 'Full-funnel automation with AI bidding and LTV modeling.' },
  { title: 'D2C Performance Scale', metrics: ['-35% CPA', '+4.2x ROAS', 'Global expansion'], desc: 'Creative iteration pipeline with influencer + paid synergy.' },
  { title: 'B2B Pipeline Automation', metrics: ['+220% MQLs', '90% faster outreach', 'Human-in-the-loop'], desc: 'Multi-agent outbound with enrichment and scoring.' },
]

const Portfolio = () => {
  return (
    <section id="work" className="relative py-24 bg-[#0E0E10] text-white">
      <div className="relative container mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold">Case Studies</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-white/70 max-w-2xl">Selected work delivering measurable impact.</motion.p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.div key={c.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="group relative rounded-2xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-[#7B3FE4]/50">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.metrics.map(m => (
                  <span key={m} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">{m}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
