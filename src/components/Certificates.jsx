import { motion } from 'framer-motion'

const placeholders = new Array(4).fill(null)

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative z-10 mx-auto max-w-5xl scroll-mt-20 border-t border-line px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="font-mono text-2xl font-bold text-text">Certificates</h2>
        <p className="mt-2 text-sm text-dim">
          Placeholder cards are ready for your certificate titles, issuers, and links.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {placeholders.map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
            className="rounded-2xl border-2 border-dashed border-line bg-surface/75 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-line bg-[#171d2b] font-mono text-xl text-amber">
                ?
              </div>
              <div className="space-y-2">
                <h3 className="font-mono text-sm text-text">[ Certificate name ]</h3>
                <p className="text-sm leading-6 text-dim">
                  Add the issuer, completion date, and credential link here when you are
                  ready to replace the placeholder.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
