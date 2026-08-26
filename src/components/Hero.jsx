import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const PHRASE = 'whoami\n> Sarang Dev — Cyber Security'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setTyped(PHRASE.slice(0, i))
      if (i >= PHRASE.length) clearInterval(id)
    }, 38)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-8 lg:px-14 xl:px-20">
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 block font-mono text-xs uppercase tracking-widest text-amber"
      >
        // cyber security
      </motion.span>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b border-line bg-surface2 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="ml-2 font-mono text-xs text-dim">zsh — sarang@portfolio</span>
        </div>
        <div className="min-h-[130px] px-7 py-8 font-mono">
          <span className="text-cyan">➜</span> <span className="text-amber">~</span>{' '}
          <span className="whitespace-pre-wrap">{typed}</span>
          <span className="cursor-blink" />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-xl text-[15px] leading-relaxed text-dim"
      >
        Computer Science undergraduate focused on offensive security — web exploitation,
        cryptanalysis, reverse engineering, network forensics, and OSINT. Ranked top 9%
        on TryHackMe across 15+ CTF competitions on HackTheBox and TryHackMe.
      </motion.p>
    </section>
  )
}
