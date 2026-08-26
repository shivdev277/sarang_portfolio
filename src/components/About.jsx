import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="font-mono text-2xl font-bold text-text">About</h2>
      </motion.div>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-[220px_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex h-56 w-full max-w-[220px] items-center justify-center rounded-2xl border-2 border-dashed border-line bg-surface/70 px-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-dim"
        >
          add your photo here
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
          className="max-w-2xl text-[15px] leading-8 text-dim"
        >
          Computer Science undergraduate at BML Munjal University, targeting a Cybersecurity
          internship across SOC, penetration testing, or vulnerability research. I bring
          6 months of production experience with React.js and MySQL, along with hands-on
          CTF practice through 15+ competitions on HackTheBox and TryHackMe, where I rank
          in the top 9 percent. My strongest areas are web exploitation, cryptanalysis,
          reverse engineering, network forensics, and OSINT.
        </motion.p>
      </div>
    </section>
  )
}
