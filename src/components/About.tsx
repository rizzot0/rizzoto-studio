import { about, stack } from "@/data/content";

const groups = [
  { label: "Lenguajes", items: stack.languages },
  { label: "Frontend", items: stack.frontend },
  { label: "Backend", items: stack.backend },
  { label: "Datos", items: stack.data },
  { label: "Herramientas", items: stack.tools },
];

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            Sobre mí
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/90">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p className="font-mono text-xs tracking-widest text-muted uppercase">
            Stack
          </p>
          <p className="mt-2 text-sm text-muted">
            Lo que uso de verdad, sin barras de porcentaje.
          </p>
          <dl className="mt-8 space-y-6">
            {groups.map((group) => (
              <div key={group.label}>
                <dt className="text-xs tracking-wide text-muted uppercase">
                  {group.label}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
