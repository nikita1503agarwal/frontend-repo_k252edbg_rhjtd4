import React from 'react'
import { Linkedin, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0E0E10] border-t border-white/10 text-white">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Case Studies</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" className="p-2 rounded-lg border border-white/10 hover:border-[#7B3FE4]/50">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com" target="_blank" className="p-2 rounded-lg border border-white/10 hover:border-[#7B3FE4]/50">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" className="p-2 rounded-lg border border-white/10 hover:border-[#7B3FE4]/50">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/60 pb-8">© 2025 Tagverse.io — Innovating the Future of Marketing with AI.</div>
    </footer>
  )
}

export default Footer
