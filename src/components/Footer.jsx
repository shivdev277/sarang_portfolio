export default function Footer() {
  return (
    <footer className="relative z-10 text-center py-14 px-6 text-dim text-[12px] font-mono border-t border-line">
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
    </footer>
  )
}
