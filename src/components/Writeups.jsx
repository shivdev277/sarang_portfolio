import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText.jsx'

const GITHUB_USERNAME = 'shivdev277'
const WRITEUPS_REPO = 'Writeups'
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_USERNAME}/${WRITEUPS_REPO}/contents`

export default function Writeups() {
  const [folders, setFolders] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function loadWriteups() {
      setStatus('loading')

      try {
        const response = await fetch(GITHUB_API_URL)

        if (response.status === 404) {
          throw new Error('not-found')
        }

        if (!response.ok) {
          throw new Error('request-failed')
        }

        const data = await response.json()

        if (cancelled) {
          return
        }

        const writeupFolders = Array.isArray(data)
          ? data.filter((item) => item.type === 'dir')
          : []

        setFolders(writeupFolders)
        setStatus('ok')
      } catch (error) {
        if (!cancelled) {
          setFolders([])
          setStatus(error.message === 'not-found' ? 'not-found' : 'error')
        }
      }
    }

    loadWriteups()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section
      id="writeups"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line px-4 py-20 sm:px-8 lg:px-14 xl:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <GlitchText text="Writeups" />
        <p className="mt-2 text-sm text-dim">
          Folder entries pulled from
          <a
            href={`https://github.com/${GITHUB_USERNAME}/${WRITEUPS_REPO}`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-cyan transition-colors hover:text-amber"
          >
            github.com/{GITHUB_USERNAME}/{WRITEUPS_REPO}
          </a>
        </p>
      </motion.div>

      {status === 'loading' && (
        <p className="mt-8 font-mono text-sm text-dim">Loading writeup folders...</p>
      )}

      {status === 'not-found' && (
        <p className="mt-8 max-w-xl text-sm leading-6 text-dim">
          The writeups repository was not found. Check the
          <span className="mx-1 font-mono text-amber">WRITEUPS_REPO</span>
          constant in this file and confirm the repository name is correct.
        </p>
      )}

      {status === 'error' && (
        <p className="mt-8 max-w-xl text-sm leading-6 text-dim">
          The GitHub Contents API could not be reached right now. Review the repository directly at
          <a
            href={`https://github.com/${GITHUB_USERNAME}/${WRITEUPS_REPO}`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-cyan transition-colors hover:text-amber"
          >
            github.com/{GITHUB_USERNAME}/{WRITEUPS_REPO}
          </a>
          .
        </p>
      )}

      {status === 'ok' && folders.length === 0 && (
        <p className="mt-8 font-mono text-sm text-dim">
          No writeup folders were found in this repository yet.
        </p>
      )}

      {status === 'ok' && folders.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {folders.map((folder, index) => (
            <motion.a
              key={folder.path}
              href={folder.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: 'easeOut' }}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-[rgba(94,230,208,0.12)] px-2.5 py-1 font-mono text-[11px] text-cyan">
                  Folder
                </span>
                <span className="font-mono text-[11px] text-dim">Open on GitHub</span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-text">{folder.name}</h3>
              <p className="mt-3 text-sm leading-6 text-dim">
                Explore this writeup folder in the {WRITEUPS_REPO} repository.
              </p>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  )
}
