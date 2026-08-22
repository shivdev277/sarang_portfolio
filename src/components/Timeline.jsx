import { motion } from 'framer-motion'

const items = [
  {
    date: 'Apr 2025 – Sep 2025',
    title: 'Full Stack Developer Intern — TRANSMED (Remote)',
    desc: 'Maintained a production web platform with React.js and MySQL over a 6-month engagement; delivered 10+ responsive components and integrated REST APIs with optimized queries, following secure coding practices.',
  },
  {
    date: '2025',
    title: '15+ CTF competitions — HackTheBox & TryHackMe',
    desc: 'Solved challenges spanning web exploitation, cryptography, reverse engineering, network forensics, and OSINT. Reached top 9% global rank on TryHackMe.',
  },
  {
    date: '2024',
    title: 'Top 15 Finalist — Smart India Hackathon (University Level)',
    desc: 'Recognized among the top 15 teams at the university-level round of SIH.',
  },
]

export default function Timeline() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <h2 className="font-mono text-2xl font-bold mb-2">Experience</h2>
      <p className="text-dim text-sm mb-10">what the last two years actually looked like</p>

      <div className="relative pl-8 border-l-2 border-line">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pb-9 last:pb-0"
          >
            <span className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-amber shadow-[0_0_0_4px_rgba(255,180,84,0.15)]" />
            <div className="font-mono text-[11px] text-amber mb-1">{item.date}</div>
            <h4 className="text-[14px] font-semibold mb-1">{item.title}</h4>
            <p className="text-dim text-[13px] leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
