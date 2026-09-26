import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import GlitchText from './GlitchText.jsx'

const GITHUB_USERNAME = 'shivdev277'
const WRITEUPS_REPO = 'Writeups'
const CACHE_KEY = `writeups-cache-${GITHUB_USERNAME}-${WRITEUPS_REPO}`
const CACHE_TTL_MS = 60 * 60 * 1000

const folderColor = {
  tryhackme: 'red',
  TryHackMe: 'red',
  hackthebox: 'cyan',
  HackTheBox: 'cyan',
  htb: 'cyan',
  vulnhub: 'amber',
  Vulnhub: 'amber',
  default: 'purple',
}

export default function Writeups() {
  const [entries, setEntries] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          setEntries(parsed.entries)
          setStatus('ok')
          return
        }
      }
    } catch {
      // sessionStorage unavailable or corrupted cache, fall through to fetch
    }

    fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${WRITEUPS_REPO}/contents`)
      .then(async (res) => {
        if (res.status === 404) throw new Error('notfound')
        if (res.status === 403) throw new Error('ratelimited')
        if (!res.ok) throw new Error('error')
        return res.json()
      })
      .then((data) => {
        const dirs = Array.isArray(data) ? data.filter((item) => item.type === 'dir') : []
        setEntries(dirs)
        setStatus('ok')
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ entries: dirs, timestamp: Date.now() }))
        } catch {
          // ignore storage errors, caching is a nice-to-have only
        }
      })
      .catch((err) =>
        setStatus(
          err.message === 'notfound' ? 'notfound' : err.message === 'ratelimited' ? 'ratelimited' : 'error'
        )
      )
  }, [])

  return (
    <section id="writeups" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 xl:px-20 py-20 border-t border-line scroll-mt-20">
      <GlitchText text="Writeups" />

      <p className="text-dim text-sm mb-8">
        pulled live from <a className="text-cyan hover:underline" href={`https://github.com/${GITHUB_USERNAME}/${WRITEUPS_REPO}`} target="_blank" rel="noreferrer">github.com/{GITHUB_USERNAME}/{WRITEUPS_REPO}</a>
      </p>

      {status === 'loading' && (
        <p className="text-dim font-mono text-sm">fetching writeups</p>
      )}

      {status === 'notfound' && (
        <p className="text-dim font-mono text-sm">
          could not find a repo named "{WRITEUPS_REPO}" on GitHub. Update WRITEUPS_REPO
          in src/components/Writeups.jsx to match your actual repo name.
        </p>
      )}

      {status === 'ratelimited' && (
        <p className="text-dim font-mono text-sm">
          GitHub's public API has a temporary request limit on this network. Browse the
          writeups directly at <a className="text-cyan hover:underline" href={`https://github.com/${GITHUB_USERNAME}/${WRITEUPS_REPO}`} target="_blank" rel="noreferrer">github.com/{GITHUB_USERNAME}/{WRITEUPS_REPO}</a> in the meantime, this section will load normally again shortly.
        </p>
      )}

      {status === 'error' && (
        <p className="text-dim font-mono text-sm">
          could not load writeups right now, check the <a className="text-cyan hover:underline" href={`https://github.com/${GITHUB_USERNAME}/${WRITEUPS_REPO}`}>repo</a> directly.
        </p>
      )}

      {status === 'ok' && entries.length === 0 && (
        <p className="text-dim font-mono text-sm">no folders found in this repo yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {entries.map((entry, i) => {
          const color = folderColor[entry.name] || folderColor.default
          return (
            <motion.a
              key={entry.sha}
              href={entry.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="block bg-surface border border-line rounded-xl p-5 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
            >
              <span
                className="inline-block font-mono text-[11px] px-2 py-0.5 rounded mb-3 border"
                style={{ color, borderColor: color, backgroundColor: `${color}22` }}
              >
                FOLDER
              </span>
              <h3 className="text-[16px] font-semibold mb-1">{entry.name}</h3>
              <p className="text-dim text-[13px] leading-relaxed">
                Open this folder on GitHub to see the writeups inside.
              </p>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}