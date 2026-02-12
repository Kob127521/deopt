import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Prestations
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
            Ce que je propose
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border p-8 text-center transition-colors duration-300 hover:border-accent/40 sm:p-10"
            >
              <h3 className="font-serif text-2xl font-normal tracking-wide">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-block border border-foreground px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Voir les prestations
          </Link>
        </div>
      </div>
    </section>
  );
}
