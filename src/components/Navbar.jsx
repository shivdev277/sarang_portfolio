import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Writeups', href: '#writeups' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
]

const mobilePanelVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.28,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeIn' } },
}

const mobileItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

function CVLinks({ mobile = false, onNavigate = () => {} }) {
  const baseClass = mobile
    ? 'flex-1 rounded-lg border border-line px-4 py-2.5 text-center font-mono text-xs text-text transition-colors hover:border-amber hover:text-amber'
    : 'block px-4 py-3 font-mono text-xs text-text transition-colors hover:bg-[#171d2b] hover:text-amber'

  return (
    <>
      <a href="/resume.pdf" download className={baseClass} onClick={onNavigate}>
        Download CV
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className={baseClass}
        onClick={onNavigate}
      >
        Review CV
      </a>
    </>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)
  const cvMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (cvMenuRef.current && !cvMenuRef.current.contains(event.target)) {
        setCvOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      return undefined
    }

    const closeMenu = () => setMobileOpen(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-bg/75 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-bold tracking-[0.2em] text-text">
          sarang<span className="text-amber">.</span>dev
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 font-mono text-[13px] text-dim">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-flex items-center py-2 transition-colors hover:text-text"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="relative" ref={cvMenuRef}>
            <button
              type="button"
              onClick={() => setCvOpen((open) => !open)}
              className="rounded-lg border border-line bg-surface/80 px-4 py-2 font-mono text-xs text-text transition-colors hover:border-amber hover:text-amber"
            >
              CV &#9662;
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 mt-3 w-44 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
                >
                  <CVLinks onNavigate={() => setCvOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface/70 md:hidden"
        >
          <div className="relative h-4 w-5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-text"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-text"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-text"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobilePanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-b border-line bg-[#0b0e13]/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul className="mx-auto flex max-w-5xl flex-col gap-4 px-6 pb-5 pt-2 font-mono text-sm">
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={mobileItemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg border border-transparent px-3 py-2 text-dim transition-colors hover:border-line hover:bg-surface/70 hover:text-text"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                variants={mobileItemVariants}
                className="flex gap-3 border-t border-line pt-4"
              >
                <CVLinks mobile onNavigate={() => setMobileOpen(false)} />
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

