import { motion } from 'framer-motion'

const skills = [
  { label: 'Web Exploitation', value: 92 },
  { label: 'Cryptography', value: 78 },
  { label: 'Reverse Engineering', value: 70 },
  { label: 'Network & Forensics', value: 72 },
  { label: 'OSINT & Recon', value: 75 },
]

export default function Skills() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <h2 className="font-mono text-2xl font-bold mb-2">Focus Areas</h2>
      <p className="text-dim text-sm mb-8">weighted by hours logged, not vibes</p>

      <div className="space-y-5">
        {skills.map((s, i) => (
          <div key={s.label}>
            <div className="flex justify-between text-[13px] mb-1.5">
              <span className="font-mono text-text">{s.label}</span>
              <span className="text-dim">{s.value}%</span>
            </div>
            <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
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
