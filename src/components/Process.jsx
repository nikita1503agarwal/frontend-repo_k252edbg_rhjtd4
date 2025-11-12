import React from 'react'
import { motion } from 'framer-motion'
import { Network, Bot, Megaphone, Zap } from 'lucide-react'

const steps = [
  { title: 'Analyze', icon: Network, desc: 'Deep research, data mapping, and opportunity modeling.' },
  { title: 'Automate', icon: Bot, desc: 'AI agents, workflows, and integrations handle the heavy lifting.' },
  { title: 'Amplify', icon: Megaphone, desc: 'Performance engines scale what works across channels.' },
  { title: 'Accelerate', icon: Zap, desc: 'Compounding growth with experimentation and feedback loops.' },
]

const Process = () => {
  return (
    <section id="process" className="relative py-24 bg-[#0E0E10] text-white">
      <div className="relative container mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold">Our Process</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-white/70 max-w-2xl">A four-step system engineered for predictable outcomes.</motion.p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={s.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.05}} className="relative rounded-2xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
              <div className="flex items-center gap-3">
                {React.createElement(s.icon, {className:'w-6 h-6 text-[#7B3FE4]'})}
                <h3 className="text-lg font-semibold">{idx+1}. {s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
