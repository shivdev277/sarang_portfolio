import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*+-=?<>'
const FRAME_COUNT = 14
const FRAME_DELAY = 40

function randomChar() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
}

export default function GlitchText({ text }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const [displayText, setDisplayText] = useState(text)
  const chars = useMemo(() => text.split(''), [text])

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    let frame = 0
    setDisplayText(chars.map((char) => (char === ' ' ? ' ' : randomChar())).join(''))

    const id = window.setInterval(() => {
      frame += 1

      const revealCount = Math.floor((frame / FRAME_COUNT) * chars.length)
      const nextText = chars
        .map((char, index) => {
          if (char === ' ') {
            return ' '
          }

          return index < revealCount ? char : randomChar()
        })
        .join('')

      setDisplayText(nextText)

      if (frame >= FRAME_COUNT) {
        window.clearInterval(id)
        setDisplayText(text)
      }
    }, FRAME_DELAY)

    return () => window.clearInterval(id)
  }, [chars, isInView, text])

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="font-mono text-2xl font-bold text-text"
    >
      {displayText}
    </motion.h2>
  )
}
