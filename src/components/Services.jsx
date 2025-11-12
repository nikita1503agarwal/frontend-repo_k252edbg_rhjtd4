import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Rocket, LineChart, Users, Code2, PenTool } from 'lucide-react'

const services = [
  { title: 'AI & Automation', icon: Brain, desc: 'Intelligent workflows, chatbots, and predictive systems that automate growth.' },
  { title: 'SEO & Performance Marketing', icon: LineChart, desc: 'Data-driven search, CRO, and funnel optimization to scale traffic and revenue.' },
  { title: 'Influencer Marketing', icon: Users, desc: 'Creator partnerships and UGC strategies engineered for measurable impact.' },
  { title: 'SaaS Development', icon: Code2, desc: 'From MVP to scale — cloud-native, secure, and blazing fast software products.' },
  { title: 'UI/UX & Graphic Design', icon: PenTool, desc: 'Futuristic interfaces and brand systems with precision-crafted visual identity.' },
  { title: 'Ads Management', icon: Rocket, desc: 'Full-funnel media buying with AI bidding and creative iteration loops.' },
]

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-[#0E0E10] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B3FE4]/10 to-transparent pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold">Our Services</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-white/70 max-w-2xl">AI-powered capabilities to analyze, automate, amplify, and accelerate your growth.</motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="group relative rounded-2xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-[#7B3FE4]/50">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7B3FE4]/0 via-[#7B3FE4]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">{React.createElement(s.icon, {className:'w-6 h-6 text-[#7B3FE4]'})}</div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
