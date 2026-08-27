import { motion } from 'framer-motion'
import GlitchText from './GlitchText.jsx'

const skills = [
  { label: 'Web Exploitation', value: 92 },
  { label: 'Cryptography', value: 78 },
  { label: 'Reverse Engineering', value: 70 },
  { label: 'Network & Forensics', value: 72 },
  { label: 'OSINT & Recon', value: 75 },
]

export default function Skills() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20">
      <div className="mb-2">
        <GlitchText text="Focus Areas" />
      </div>
      <p className="mb-8 text-sm text-dim">weighted by hours logged, not vibes</p>

      <div className="space-y-5">
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="mb-1.5 flex justify-between text-[13px]">
              <span className="font-mono text-text">{s.label}</span>
              <span className="text-dim">{s.value}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-surface2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.value}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan to-amber"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
