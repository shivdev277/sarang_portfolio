import { motion } from 'framer-motion'

const achievements = [
  {
    code: 'THM',
    title: 'TryHackMe Top 9% Global Rank',
    detail:
      'Consistently ranked in the top 9 percent of the platform through offensive security labs, learning paths, and challenge rooms.',
  },
  {
    code: 'CTF',
    title: '15+ CTF Competitions in 2025',
    detail:
      'Competed across HackTheBox and TryHackMe events focused on web exploitation, cryptanalysis, reverse engineering, network forensics, and OSINT.',
  },
  {
    code: 'SIH',
    title: 'Top 15 Finalist at Smart India Hackathon 2024',
    detail:
      'Reached the university-level top 15 as part of Smart India Hackathon 2024, standing out among the finalist teams.',
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="font-mono text-2xl font-bold text-text">Achievements</h2>
      </motion.div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            className="rounded-2xl border border-line bg-surface/80 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.14)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan to-amber font-mono text-xs font-bold tracking-[0.2em] text-bg">
              {achievement.code}
            </div>
            <h3 className="mt-4 text-base font-semibold text-text">{achievement.title}</h3>
            <p className="mt-3 text-sm leading-6 text-dim">{achievement.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
