import { letter, site } from "@/data/content";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-8 sm:pt-24">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
        <span className="rounded-full border border-line bg-accent-soft/50 px-3 py-1 text-accent">
          {site.availability}
        </span>
        <span>{site.location}</span>
        <span className="text-line">·</span>
        <span className="font-mono text-xs">{site.handle}</span>
      </div>

      <h1 className="mt-8 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
        {site.name}
      </h1>
      <p className="mt-3 font-serif text-2xl text-muted sm:text-3xl">{site.role}</p>

      <div className="mt-12 max-w-2xl space-y-5 text-lg leading-relaxed text-ink/90">
        <p className="font-serif text-2xl text-ink">{letter.greeting}</p>
        {letter.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#trabajo"
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-opacity hover:opacity-80"
        >
          Ver trabajo
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink"
        >
          Escribirme
        </a>
      </div>
    </section>
  );
}
