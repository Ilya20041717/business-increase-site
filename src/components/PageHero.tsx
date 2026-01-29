interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

const PageHero = ({ eyebrow, title, description, align = "left" }: PageHeroProps) => {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 hero-color-glow opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 animated-mesh opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 lux-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="section-container relative z-10">
        <div className={`max-w-3xl ${alignment}`}>
          <div className="badge-premium mb-6 js-reveal reveal">
            {eyebrow}
          </div>
          <h1 className="text-3xl sm:text-display-md md:text-display-lg font-semibold text-foreground mb-6 js-reveal reveal reveal-delay-1 hero-title text-balance">
            {title}
          </h1>
          <p className="text-text-secondary text-body-lg js-reveal reveal reveal-delay-2">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
