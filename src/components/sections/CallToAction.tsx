import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-serif text-3xl font-light tracking-wide sm:text-4xl md:text-5xl">
          Racontons votre histoire
        </h2>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base sm:leading-relaxed">
          Chaque mariage mérite d&rsquo;être raconté avec beauté et sincérité.
          Si mon univers vous parle, j&rsquo;aimerais beaucoup échanger avec vous.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block bg-foreground px-10 py-4 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
