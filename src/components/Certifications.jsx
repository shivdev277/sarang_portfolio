import { motion } from 'framer-motion'

// Add real certificates here as { code, title, detail } objects.
const certs = [
  {
    code: 'TH',
    title: 'TryHackMe — Top 9% Global Rank',
    detail: 'Ongoing platform ranking across security learning paths and CTF rooms.',
  },
  {
    code: 'SIH',
    title: 'Smart India Hackathon — Top 15 Finalist (2024)',
    detail: 'University-level round, recognized among the top 15 teams.',
  },
]

export default function Certifications() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <h2 className="font-mono text-2xl font-bold mb-2">Certifications & Awards</h2>
      <p className="text-dim text-sm mb-8">add more cert cards here as you earn them</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-surface border border-line rounded-xl p-5 flex gap-4 items-start"
          >
            <div className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center font-mono font-extrabold text-[13px] text-bg bg-gradient-to-br from-cyan to-amber">
              {c.code}
            </div>
            <div>
              <h4 className="text-[14px] font-semibold mb-1">{c.title}</h4>
              <p className="text-dim text-[12px] leading-relaxed">{c.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
