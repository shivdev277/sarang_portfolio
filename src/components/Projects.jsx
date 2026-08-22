import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Image Encryption Tool',
    stack: 'JavaScript · Applied Cryptography',
    desc: 'Command-line tool that encrypts and decrypts image files using cryptographic algorithms, with input validation and error handling to protect sensitive visual data from unauthorized access.',
    color: 'cyan',
  },
  {
    title: 'Decentralized Cloud Storage & Online Voting System',
    stack: 'Python · JavaScript · Solidity · Web3.js · Ethereum',
    desc: 'Two blockchain-based applications: a decentralized file storage platform and an Ethereum voting system, using Solidity smart contracts for access control and tamper-proof record storage alongside a React/Node.js frontend.',
    color: 'amber',
  },
]

export default function Projects() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <h2 className="font-mono text-2xl font-bold mb-2">Projects</h2>
      <p className="text-dim text-sm mb-8">applied security & systems work, outside the CTF grid</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="bg-surface border border-line rounded-xl p-6"
          >
            <h3 className="text-[17px] font-semibold mb-1">{p.title}</h3>
            <div className="font-mono text-[11px] text-cyan mb-3">{p.stack}</div>
            <p className="text-dim text-[13px] leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
