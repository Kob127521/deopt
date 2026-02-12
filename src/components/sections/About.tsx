import Link from "next/link";

export default function About() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">
        {/* Portrait placeholder */}
        <div className="relative">
          <div
            className="aspect-[3/4] w-full bg-[#C8BFB4]"
            role="img"
            aria-label="Portrait du photographe"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            À propos
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light tracking-wide sm:text-4xl">
            L&rsquo;histoire derrière l&rsquo;objectif
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base sm:leading-relaxed">
            <p>
              Je m&rsquo;appelle Aurélien, photographe de mariage basé en France et
              disponible partout dans le monde. Mon approche est simple : capturer ce
              qui est vrai, dans une lumière qui transcende l&rsquo;instant.
            </p>
            <p>
              Chaque mariage est une histoire unique. Je m&rsquo;attache à la raconter
              avec un regard éditorial, une sensibilité fine art et une direction
              naturelle qui vous permet d&rsquo;être pleinement vous-mêmes.
            </p>
            <p>
              Mon travail s&rsquo;inspire de la photographie de film, de la lumière
              naturelle et de l&rsquo;élégance discrète. Je crois que les plus belles
              images naissent de la confiance et de la connexion.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-block border border-foreground px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Découvrir mon approche
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
