import Link from "next/link";
import { portfolios } from "@/lib/data";

export default function PortfolioGrid() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
            Reportages
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-muted">
            Sélection de mariages récents
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundColor: item.coverColor }}
                  role="img"
                  aria-label={`Photo du mariage de ${item.title} à ${item.location}`}
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-serif text-xl font-normal tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {item.location} &mdash; {item.year}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-block border border-foreground px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Voir tous les reportages
          </Link>
        </div>
      </div>
    </section>
  );
}
