import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          También existe un{" "}
          <a
            href={site.personalSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            sitio personal
          </a>{" "}
          — más libre, menos carta.
        </p>
      </div>
    </footer>
  );
}
