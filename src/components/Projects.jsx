import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Image Encryption Tool',
    stack: 'JavaScript, Applied Cryptography',
    desc:
      'CLI tool for encrypting and decrypting image files with input validation and safer handling for malformed or missing file input.',
    accent: 'text-cyan',
  },
  {
    title: 'Decentralized Cloud Storage System',
    stack: 'Python, JavaScript, Solidity, Web3.js, Ethereum',
    desc:
      'Blockchain-based file storage with Solidity smart contracts for access control and tamper-proof storage, paired with a React and Node.js frontend.',
    accent: 'text-cyan',
  },
  {
    title: 'Blockchain Voting System',
    stack: 'Python, JavaScript, Solidity, Web3.js, Ethereum',
    desc:
      'Ethereum-based voting system using smart contracts for tamper-proof vote recording, with a React frontend for secure vote submission.',
    accent: 'text-amber',
  },
  {
    title: 'Network Firewall',
    stack: '[ Add stack here ]',
    desc:
      'Placeholder project card. Replace this with the real firewall architecture, packet filtering logic, and deployment details once they are ready.',
    placeholder: true,
    accent: 'text-dim',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20"
    >
      <h2 className="mb-2 font-mono text-2xl font-bold">Projects</h2>
      <p className="mb-8 text-sm text-dim">applied security and systems work, outside the CTF grid</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={`rounded-xl p-6 ${
              project.placeholder
                ? 'border-2 border-dashed border-line bg-surface/60'
                : 'border border-line bg-surface'
            }`}
          >
            <h3 className="mb-1 text-[17px] font-semibold">{project.title}</h3>
            <div className={`mb-3 font-mono text-[11px] ${project.accent}`}>{project.stack}</div>
            <p className="text-[13px] leading-relaxed text-dim">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
