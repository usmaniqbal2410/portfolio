export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-dim">
          © {year} Usman Iqbal. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/usmaniqbal2410" target="_blank" rel="noopener noreferrer" data-hover className="font-mono text-xs text-dim hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/usmaniqbal2410" target="_blank" rel="noopener noreferrer" data-hover className="font-mono text-xs text-dim hover:text-accent transition-colors">GitHub</a>
          <a href="mailto:usmaniqbal2410@gmail.com" data-hover className="font-mono text-xs text-dim hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
