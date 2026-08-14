import Link from "next/link";
import { nav, site } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-serif text-lg tracking-tight text-ink">
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden transition-colors hover:text-ink sm:inline"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
