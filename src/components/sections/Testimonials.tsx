import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Témoignages
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
            Ce qu&rsquo;ils en disent
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="text-center">
              <div className="mx-auto mb-6 h-px w-8 bg-accent/40" aria-hidden="true" />

              <p className="text-sm italic leading-relaxed text-muted sm:text-base sm:leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <footer className="mt-6">
                <cite className="text-xs font-medium not-italic uppercase tracking-[0.2em]">
                  {testimonial.name}
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
