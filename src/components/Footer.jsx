export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-14 font-mono text-[12px] text-dim">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-8 lg:px-14 xl:px-20">
        <p className="mb-3">
          <a href="mailto:devsarang2004@gmail.com" className="text-cyan hover:underline">
            devsarang2004@gmail.com
          </a>{' '}
          ·{' '}
          <a
            href="https://github.com/shivdev277"
            target="_blank"
            rel="noreferrer"
            className="text-cyan hover:underline"
          >
            github.com/shivdev277
          </a>
        </p>
        <p>© {new Date().getFullYear()} Sarang Dev — built with React & Tailwind</p>
      </div>
    </footer>
  )
}
