import PageHero from "@/components/PageHero";
import ProcessSection from "@/components/ProcessSection";
import SiteLayout from "@/components/SiteLayout";
import WhyUsSection from "@/components/WhyUsSection";

const principles = [
  {
    title: "От бизнес-целей к логике",
    description: "Сначала фиксируем эффект и метрики, потом собираем архитектуру.",
  },
  {
    title: "Прозрачные этапы",
    description: "Планируем работу по шагам и держим вас в курсе прогресса.",
  },
  {
    title: "Поддержка после запуска",
    description: "Следим за системой и масштабируем, когда бизнес растет.",
  },
];

const Approach = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Подход"
        title="Строим автоматизацию как систему, а не набор скриптов"
        description="Комбинируем аналитику, архитектуру и внедрение, чтобы ваши процессы стали устойчивыми и управляемыми."
      />

      <section className="py-section bg-surface-elevated section-ambient">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-3">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className="lux-card p-6 js-reveal reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-text-secondary text-body-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection showHeader={false} />
      <ProcessSection showHeader={false} />
    </SiteLayout>
  );
};

export default Approach;
