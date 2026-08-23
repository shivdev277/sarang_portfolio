import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const GITHUB_USERNAME = 'shivdev277'
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`

const languageStyles = {
  default: { color: '#5ee6d0', backgroundColor: 'rgba(94, 230, 208, 0.12)' },
  JavaScript: { color: '#ffb454', backgroundColor: 'rgba(255, 180, 84, 0.14)' },
  TypeScript: { color: '#7ec8ff', backgroundColor: 'rgba(126, 200, 255, 0.14)' },
  Python: { color: '#5ee6d0', backgroundColor: 'rgba(94, 230, 208, 0.12)' },
  HTML: { color: '#ff8f40', backgroundColor: 'rgba(255, 143, 64, 0.14)' },
  CSS: { color: '#8fb8ff', backgroundColor: 'rgba(143, 184, 255, 0.14)' },
}

export default function Writeups() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function loadRepos() {
      setStatus('loading')

      try {
        const response = await fetch(GITHUB_API_URL)

        if (!response.ok) {
          throw new Error('GitHub API request failed')
        }

        const data = await response.json()

        if (cancelled) {
          return
        }

        const publicRepos = Array.isArray(data) ? data.filter((repo) => !repo.fork) : []
        setRepos(publicRepos)
        setStatus('ok')
      } catch {
        if (!cancelled) {
          setRepos([])
          setStatus('error')
        }
      }
    }

    loadRepos()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section
      id="writeups"
      className="relative z-10 mx-auto max-w-5xl scroll-mt-20 border-t border-line px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <h2 className="font-mono text-2xl font-bold text-text">Writeups</h2>
        <p className="mt-2 text-sm text-dim">
          Public repositories pulled live from
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-cyan transition-colors hover:text-amber"
          >
            github.com/{GITHUB_USERNAME}
          </a>
        </p>
      </motion.div>

      {status === 'loading' && (
        <p className="mt-8 font-mono text-sm text-dim">Loading public repositories...</p>
      )}

      {status === 'error' && (
        <p className="mt-8 max-w-xl text-sm leading-6 text-dim">
          The GitHub API could not be reached right now. Review the profile directly at
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-cyan transition-colors hover:text-amber"
          >
            github.com/{GITHUB_USERNAME}
          </a>
          .
        </p>
      )}

      {status === 'ok' && repos.length === 0 && (
        <p className="mt-8 font-mono text-sm text-dim">No public repositories found yet.</p>
      )}

      {status === 'ok' && repos.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo, index) => {
            const languageStyle = languageStyles[repo.language] || languageStyles.default

            return (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: 'easeOut' }}
                className="flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[11px]"
                    style={languageStyle}
                  >
                    {repo.language || 'Repo'}
                  </span>
                  <span className="font-mono text-[11px] text-dim">Stars: {repo.stargazers_count}</span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-text">{repo.name}</h3>
                <p className="mt-3 text-sm leading-6 text-dim">
                  {repo.description || 'No description provided yet.'}
                </p>
              </motion.a>
            )
          })}
        </div>
      )}
    </section>
  )
}
