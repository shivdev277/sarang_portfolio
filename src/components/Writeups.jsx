import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const GITHUB_USERNAME = 'shivdev277'

const tagColor = {
  default: 'cyan',
  Python: 'amber',
  JavaScript: 'red',
  'C++': 'purple',
  Solidity: '#7ec8ff',
}

export default function Writeups() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API request failed')
        return res.json()
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data.filter((r) => !r.fork) : [])
        setStatus('ok')
      })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <h2 className="font-mono text-2xl font-bold mb-2">Writeups & Repos</h2>
      <p className="text-dim text-sm mb-8">
        pulled live from{' '}
        <a
          className="text-cyan hover:underline"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
        >
          github.com/{GITHUB_USERNAME}
        </a>
      </p>

      {status === 'loading' && <p className="text-dim font-mono text-sm">fetching repos…</p>}

      {status === 'error' && (
        <p className="text-dim font-mono text-sm">
          couldn't load repos right now — check the{' '}
          <a className="text-cyan hover:underline" href={`https://github.com/${GITHUB_USERNAME}`}>
            GitHub profile
          </a>{' '}
          directly.
        </p>
      )}

      {status === 'ok' && repos.length === 0 && (
        <p className="text-dim font-mono text-sm">no public repos found yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo, i) => {
          const color = tagColor[repo.language] || tagColor.default
          return (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              className="block bg-surface border border-line rounded-xl p-5 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              style={{ '--tag': color }}
            >
              <span
                className="inline-block font-mono text-[11px] px-2 py-0.5 rounded mb-3 border"
                style={{ color, borderColor: color, backgroundColor: `${color}22` }}
              >
                {repo.language || 'REPO'}
              </span>
              <h3 className="text-[16px] font-semibold mb-1">{repo.name}</h3>
              <p className="text-dim text-[13px] leading-relaxed line-clamp-3">
                {repo.description || 'No description provided yet.'}
              </p>
              <div className="mt-3 text-[11px] font-mono text-dim">★ {repo.stargazers_count}</div>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
