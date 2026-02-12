const features = [
  {
    label: "Expérience haut de gamme",
    description: "Un accompagnement sur-mesure, du premier échange à la livraison de votre galerie.",
  },
  {
    label: "Guidance & direction naturelle",
    description: "Des poses guidées avec douceur pour des images authentiques et élégantes.",
  },
  {
    label: "Images intemporelles",
    description: "Un style fine art pensé pour traverser les années sans prendre une ride.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:grid-cols-3 sm:gap-8">
        {features.map((feature) => (
          <div key={feature.label} className="text-center">
            <h3 className="font-serif text-xl font-normal tracking-wide sm:text-2xl">
              {feature.label}
            </h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
