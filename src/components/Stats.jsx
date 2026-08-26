import { motion } from 'framer-motion'

const stats = [
  { num: 'Top 9%', label: 'TryHackMe global rank' },
  { num: '15+', label: 'CTF competitions (2025)' },
  { num: '5', label: 'security disciplines' },
  { num: '2', label: 'platforms — HTB / TryHackMe' },
]

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-8 lg:px-14 xl:px-20">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="font-mono text-3xl font-extrabold text-amber">{s.num}</div>
            <div className="mt-1 text-[13px] text-dim">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
