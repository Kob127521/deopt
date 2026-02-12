import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background — in production, replace with next/image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #2C2824 0%, #3D3530 30%, #4A3F38 60%, #2C2824 100%)",
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="font-serif text-5xl font-light leading-tight tracking-wide text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Photographe de mariage
        </h1>

        <p className="mt-6 text-sm font-light uppercase tracking-[0.35em] text-white/80 sm:text-base">
          Fine art &bull; Éditorial &bull; Intemporel
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/portfolio"
            className="inline-block border border-white px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Voir les reportages
          </Link>

          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white/80 underline underline-offset-4 transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Réserver une date
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="h-12 w-px bg-white/40" />
      </div>
    </section>
  );
}
