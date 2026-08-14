import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";

export function Work() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <section id="trabajo" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <div className="flex items-end justify-between gap-4 border-b border-line pb-4">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            Trabajo seleccionado
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
            Cosas que construí
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-muted sm:block">
          Tres piezas reales y un estudio. Sin placeholders.
        </p>
      </div>

      <article className="mt-10 grid gap-8 border-b border-line pb-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-xs text-accent">{featured.number}</p>
          <h3 className="mt-2 font-serif text-4xl tracking-tight">{featured.title}</h3>
          <p className="mt-2 text-sm text-muted">{featured.eyebrow}</p>
        </div>
        <div>
          <p className="text-lg leading-relaxed">{featured.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {featured.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <Link
              href={`/trabajo/${featured.slug}`}
              className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
            >
              Caso de estudio
              <ArrowUpRight size={16} />
            </Link>
            {featured.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-ink"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </article>

      <ul className="divide-y divide-line">
        {rest.map((project) => (
          <li key={project.slug} className="grid gap-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline">
            <span className="font-mono text-xs text-muted">{project.number}</span>
            <div>
              <h3 className="font-serif text-2xl tracking-tight">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.eyebrow}</p>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/85">{project.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-2.5 py-0.5 text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
              {project.study ? (
                <Link
                  href={`/trabajo/${project.slug}`}
                  className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                >
                  Caso
                  <ArrowUpRight size={14} />
                </Link>
              ) : null}
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-muted hover:text-ink"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
