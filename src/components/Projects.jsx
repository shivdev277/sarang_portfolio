import { motion } from 'framer-motion'
import GlitchText from './GlitchText.jsx'

const projects = [
  {
    title: 'Image Encryption Tool',
    stack: 'JavaScript, Applied Cryptography',
    desc:
      'CLI tool for encrypting and decrypting image files with input validation and safer handling for malformed or missing file input.',
    more:
      'Built to keep the interface minimal while still validating edge cases before processing. The workflow is designed for quick local testing of encryption and decryption routines on image assets.',
    accent: 'text-cyan',
  },
  {
    title: 'Decentralized Cloud Storage System',
    stack: 'Python, JavaScript, Solidity, Web3.js, Ethereum',
    desc:
      'Blockchain-based file storage with Solidity smart contracts for access control and tamper-proof storage, paired with a React and Node.js frontend.',
    more:
      'The contract layer focuses on verifiable access rules and integrity guarantees for stored records. The frontend flow makes upload and retrieval understandable without hiding the blockchain behavior.',
    accent: 'text-cyan',
  },
  {
    title: 'Blockchain Voting System',
    stack: 'Python, JavaScript, Solidity, Web3.js, Ethereum',
    desc:
      'Ethereum-based voting system using smart contracts for tamper-proof vote recording, with a React frontend for secure vote submission.',
    more:
      'The project separates ballot logic from the interface so vote recording stays transparent and auditable. It demonstrates how smart contracts can reduce trust assumptions in digital polling.',
    accent: 'text-amber',
  },
  {
    title: 'Network Firewall',
    stack: '[ Add stack here ]',
    desc:
      'Placeholder project card. Replace this with the real firewall architecture, packet filtering logic, and deployment details once they are ready.',
    more:
      'Add one or two concrete notes here about traffic inspection, rule management, or deployment once the implementation details are ready.',
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
      <div className="mb-2">
        <GlitchText text="Projects" />
      </div>
      <p className="mb-8 text-sm text-dim">applied security and systems work, outside the CTF grid</p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className={`group rounded-xl p-6 transition-colors duration-300 ${
              project.placeholder
                ? 'border-2 border-dashed border-line bg-surface/60'
                : 'border border-line bg-surface hover:border-cyan/60'
            }`}
          >
            <h3 className="mb-1 text-[17px] font-semibold">{project.title}</h3>
            <div className={`mb-3 font-mono text-[11px] ${project.accent}`}>{project.stack}</div>
            <p className="text-[13px] leading-relaxed text-dim">{project.desc}</p>
            <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100">
              <p className="border-t border-line/70 pt-4 text-[13px] leading-relaxed text-dim">
                {project.more}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
