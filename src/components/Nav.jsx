import React, { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? 'bg-[#0E0E10]/80 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-wide">Tagverse.io</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#work" className="hover:text-white">Case Studies</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#contact" className="rounded-full px-4 py-2 bg-[#7B3FE4] text-white font-medium">Get Started</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#0E0E10]/90 text-white">
          <a href="#services" onClick={()=>setOpen(false)} className="block py-2">Services</a>
          <a href="#process" onClick={()=>setOpen(false)} className="block py-2">Process</a>
          <a href="#work" onClick={()=>setOpen(false)} className="block py-2">Case Studies</a>
          <a href="#contact" onClick={()=>setOpen(false)} className="block py-2">Contact</a>
        </div>
      )}
    </header>
  )
}

export default Nav
