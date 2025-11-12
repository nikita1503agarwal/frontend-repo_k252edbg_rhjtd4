import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus(err.message || 'error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-[#0E0E10] text-white overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[#7B3FE4]/20 blur-3xl pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-5xl font-extrabold text-center">Ready to Automate Your Marketing?</motion.h2>
        <p className="mt-4 text-white/70 max-w-2xl text-center mx-auto">Tell us about your goals. We’ll bring the AI.</p>

        <form onSubmit={submit} className="mt-12 max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B3FE4]" />
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required placeholder="Email" type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B3FE4]" />
          <input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Company" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B3FE4]}" />
          <div className="sm:col-span-2">
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required placeholder="Message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B3FE4]" />
          </div>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="rounded-full px-6 py-3 bg-[#7B3FE4] hover:brightness-110 transition font-semibold">Let’s Talk AI →</button>
            {status === 'loading' && <span className="text-white/70">Sending...</span>}
            {status === 'success' && <span className="text-emerald-400">Thanks! We’ll reach out soon.</span>}
            {status && status !== 'loading' && status !== 'success' && <span className="text-rose-400">{String(status)}</span>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
