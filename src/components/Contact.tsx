import { letter, site } from "@/data/content";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <div className="max-w-2xl border-t border-line pt-16">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Contacto
        </p>
        <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
          Si encaja, hablemos
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/90">
          Trabajo, prácticas o un encargo concreto. Respondo a mail; GitHub es
          el mejor lugar para ver el código.
        </p>

        <p className="mt-12 font-serif text-2xl">{letter.signoff}</p>
        <p className="mt-1 font-serif text-2xl">{site.name}</p>

        <div className="mt-10 flex flex-col gap-2 text-lg">
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:underline"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink"
          >
            github.com/rizzot0
          </a>
        </div>
      </div>
    </section>
  );
}
