import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const suggestions = [
  'Want to automate your ads?',
  'Curious about AI chatbots for support?',
  'Looking to scale influencer marketing?',
]

const AskTagBot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m TagBot. How can I help with your marketing today?' }
  ])
  const [input, setInput] = useState('')

  const send = async (e) => {
    e?.preventDefault()
    if (!input.trim()) return
    const user = { role: 'user', text: input }
    setMessages(m => [...m, user, { role: 'bot', text: 'Thanks! A strategist will follow up shortly. Meanwhile, check our Services below.' }])
    setInput('')
  }

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 pointer-events-none select-none">
        <div className="flex flex-col gap-2">
          {suggestions.map((s, i) => (
            <div key={i} className="self-end px-3 py-2 rounded-full bg-white/10 text-white/80 text-xs border border-white/10 shadow pointer-events-auto">{s}</div>
          ))}
        </div>
      </div>

      <button onClick={()=>setOpen(!open)} className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#7B3FE4] text-white shadow-xl hover:brightness-110">
        <MessageCircle className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl bg-[#0E0E10] text-white border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/10 font-semibold">Ask TagBot</div>
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((m, idx) => (
              <div key={idx} className={`${m.role==='bot'?'self-start bg-white/5':'self-end bg-[#7B3FE4]/20'} max-w-[80%] px-3 py-2 rounded-lg text-sm border border-white/10`}>{m.text}</div>
            ))}
          </div>
          <form onSubmit={send} className="flex gap-2 p-3 border-t border-white/10">
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message" className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none" />
            <button className="px-3 py-2 bg-[#7B3FE4] rounded-md text-sm">Send</button>
          </form>
        </div>
      )}
    </>
  )
}

export default AskTagBot
