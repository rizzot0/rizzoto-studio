import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects, site } from "@/data/content";

export function generateStaticParams() {
  return projects.filter((p) => p.study).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.study);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug && p.study);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
          <Link
            href="/#trabajo"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
          >
            <ArrowLeft size={16} />
            Trabajo
          </Link>

          <p className="mt-10 font-mono text-xs text-accent">
            {project.number} · {project.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/90">
            {project.summary}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <section className="mt-14">
            <h2 className="font-serif text-2xl">El problema</h2>
            <p className="mt-4 leading-relaxed text-ink/90">{project.problem}</p>
          </section>

          <section className="mt-12">
            <h2 className="font-serif text-2xl">Cómo lo abordé</h2>
            <ol className="mt-4 space-y-4">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-4 leading-relaxed">
                  <span className="font-mono text-xs text-muted pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink/90">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12 border-t border-line pt-8">
            <h2 className="font-serif text-2xl">Enlaces</h2>
            <ul className="mt-4 space-y-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    {link.label}
                    <ArrowUpRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <p className="mt-16 font-serif text-xl text-muted">
            {site.name}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
