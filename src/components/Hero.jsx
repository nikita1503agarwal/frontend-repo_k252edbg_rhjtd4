import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = ({ onGetStarted, onSeeWork }) => {
  return (
    <section className="relative min-h-[90vh] w-full bg-[#0E0E10] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10]/40 via-[#0E0E10]/40 to-[#0E0E10] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#7B3FE4]"
        >
          Empowering Digital Growth with AI & Automation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto"
        >
          Tagverse.io — Your one-stop digital marketing partner combining creativity, automation, and artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button onClick={onGetStarted} className="group relative overflow-hidden rounded-full px-6 py-3 text-sm sm:text-base font-semibold text-white">
            <span className="absolute inset-0 bg-gradient-to-r from-[#7B3FE4] to-indigo-500 opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="relative">Get Started</span>
          </button>
          <button onClick={onSeeWork} className="rounded-full border border-white/30 px-6 py-3 text-sm sm:text-base text-white/80 hover:text-white hover:border-white transition">
            See Our Work
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
