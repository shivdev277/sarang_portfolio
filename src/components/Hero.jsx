import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PHRASE = 'whoami\n> Sarang Dev — Cybersecurity Researcher'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(PHRASE.slice(0, i))
      if (i >= PHRASE.length) clearInterval(id)
    }, 38)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="block text-amber font-mono text-xs tracking-widest uppercase mb-4"
      >
        // cybersecurity researcher
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-surface border border-line rounded-xl overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-2.5 bg-surface2 border-b border-line">
          <span className="w-2.5 h-2.5 rounded-full bg-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
          <span className="ml-2 font-mono text-xs text-dim">zsh — sarang@portfolio</span>
        </div>
        <div className="px-7 py-8 font-mono min-h-[130px]">
          <span className="text-cyan">➜</span> <span className="text-amber">~</span>{' '}
          <span className="whitespace-pre-wrap">{typed}</span>
          <span className="cursor-blink" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 text-dim text-[15px] max-w-xl leading-relaxed"
      >
        Computer Science undergraduate focused on offensive security — web exploitation,
        cryptanalysis, reverse engineering, network forensics, and OSINT. Ranked top 9% on
        TryHackMe across 15+ CTF competitions on HackTheBox and TryHackMe.
      </motion.p>
    </section>
  )
}
