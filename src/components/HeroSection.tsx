const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 sm:pt-24 overflow-hidden">
      <div className="absolute inset-0 hero-ambient" />
      <div className="absolute inset-0 hero-color-glow" aria-hidden="true" />
      <div className="absolute inset-0 animated-mesh" aria-hidden="true" />
      <div className="absolute inset-0 lux-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="hero-orb hero-orb-blue w-[420px] h-[420px] -top-32 -left-32 animate-float" />
      <div className="hero-orb hero-orb-violet w-[520px] h-[520px] -bottom-40 -right-40 animate-float-slow" />
      <div className="hero-orb hero-orb-gold w-[280px] h-[280px] top-24 right-10 animate-float" />

      <div className="section-container relative z-10 w-full min-w-0">
        <div className="grid gap-8 sm:gap-12 w-full min-w-0">
          <div className="min-w-0 w-full">
            <h1 className="text-[clamp(1.95rem,6vw,4.5rem)] font-semibold text-foreground mb-5 sm:mb-7 js-reveal reveal reveal-delay-1 text-balance hero-title leading-tight max-w-[28ch] sm:max-w-[34ch] lg:max-w-[40ch]">
              Системная автоматизация — бизнес{" "}
              <span className="text-gradient-accent">прибыльнее и эффективнее</span>
            </h1>

            <p className="text-text-secondary text-sm sm:text-base md:text-body-lg max-w-[44ch] mb-6 sm:mb-10 js-reveal reveal reveal-delay-2">
              Telegram-боты, AI-ассистенты и интеграции, которые берут на себя рутину и работают 24/7.
              Мы проектируем архитектуру под ваши цели и отвечаем за результат.
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 js-reveal reveal reveal-delay-3 w-full min-w-0">
              <a
                href="#contact"
                className="button-premium glow-ring flex justify-center md:inline-flex w-full md:w-auto min-w-0 px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-body-md"
              >
                Оставить заявку
              </a>
              <a
                href="#cases"
                className="button-outline-premium flex justify-center md:inline-flex w-full md:w-auto min-w-0 px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm md:text-body-md"
              >
                <span className="sm:hidden">Кейсы</span>
                <span className="hidden sm:inline">Посмотреть кейсы</span>
              </a>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 js-reveal reveal reveal-delay-4 min-w-0">
              <span className="badge-premium text-xs sm:text-body-sm px-3 py-2 sm:px-4 sm:py-2">
                Конфиденциальность и безопасность
              </span>
              <span className="badge-premium text-xs sm:text-body-sm px-3 py-2 sm:px-4 sm:py-2">
                Интеграции с вашими системами
              </span>
              <span className="badge-premium text-xs sm:text-body-sm px-3 py-2 sm:px-4 sm:py-2">
                Сопровождение после запуска
              </span>
            </div>

            <div className="mt-8 sm:mt-10 block js-reveal reveal reveal-delay-5">
              <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                  <span className="marquee-item">Недвижимость</span>
                  <span className="marquee-item">Медицина</span>
                  <span className="marquee-item">Автобизнес</span>
                  <span className="marquee-item">Маркетплейсы</span>
                  <span className="marquee-item">Сервисы</span>
                  <span className="marquee-item">B2B</span>
                  <span className="marquee-item">Финансы</span>
                  <span className="marquee-item">Образование</span>
                  <span className="marquee-item">Недвижимость</span>
                  <span className="marquee-item">Медицина</span>
                  <span className="marquee-item">Автобизнес</span>
                  <span className="marquee-item">Маркетплейсы</span>
                  <span className="marquee-item">Сервисы</span>
                  <span className="marquee-item">B2B</span>
                  <span className="marquee-item">Финансы</span>
                  <span className="marquee-item">Образование</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 js-reveal reveal reveal-delay-5">
        <div className="w-6 h-10 border border-border-strong rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
