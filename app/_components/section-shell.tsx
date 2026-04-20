import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  index: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  index,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="section-anchor grid gap-10 py-18 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:py-24"
    >
      <div className="space-y-3">
        <p className="eyebrow text-xs font-medium">{index}</p>
        <div className="section-rule" />
        <div className="space-y-2">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xs text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
