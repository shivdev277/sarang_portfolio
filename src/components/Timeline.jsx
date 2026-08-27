import { motion } from 'framer-motion'
import GlitchText from './GlitchText.jsx'

const items = [
  {
    date: 'Apr 2025 - Sep 2025',
    title: 'Full Stack Developer Intern - TRANSMED',
    desc:
      'Worked on a production platform with React.js and MySQL, shipping responsive UI improvements, REST API integrations, and day-to-day fixes across a 6 month internship.',
  },
  {
    date: '2025',
    title: '15+ CTF Competitions - HackTheBox and TryHackMe',
    desc:
      'Solved competitive security challenges covering web exploitation, cryptanalysis, reverse engineering, network forensics, and OSINT during an active year of practice.',
  },
]

export default function Timeline() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <GlitchText text="Experience" />
        <p className="mt-2 text-sm text-dim">work and competitive security practice</p>
      </motion.div>

      <div className="relative mt-10 border-l-2 border-line pl-8">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-amber shadow-[0_0_0_5px_rgba(255,180,84,0.14)]" />
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber">{item.date}</p>
            <h3 className="mt-2 text-base font-semibold text-text">{item.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-dim">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
