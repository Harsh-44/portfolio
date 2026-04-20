const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[var(--color-cream)] text-[var(--color-ink)]">
      <div className="mx-auto grid w-full max-w-[110rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-display text-4xl font-bold tracking-[-0.08em] text-[var(--color-ink)]"
        >
          H.
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.95rem] text-[var(--color-ink)]/80 hover:text-[var(--color-accent-strong)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Featured Work
          </a>
          <a
            href="#contact"
            className="hidden rounded-xl border border-black/20 px-4 py-2.5 text-sm font-medium text-[var(--color-ink)] lg:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
