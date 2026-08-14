import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 py-24">
        <div className="mx-auto max-w-xl">
          <p className="font-mono text-xs text-muted">404</p>
          <h1 className="mt-3 font-serif text-4xl">Esta página no está.</h1>
          <p className="mt-4 text-muted">
            Vuelve al inicio o escríbeme si buscabas algo concreto.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block text-accent hover:underline"
          >
            Ir al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
