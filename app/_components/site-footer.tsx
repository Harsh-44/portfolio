import { profile } from "@/app/_data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 px-4 py-6 text-sm text-[var(--color-muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name}</p>
        <p>Editorial homepage direction with an original portfolio structure.</p>
      </div>
    </footer>
  );
}
