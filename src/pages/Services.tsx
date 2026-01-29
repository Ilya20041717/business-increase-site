import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

const focusAreas = [
  {
    title: "Коммуникации и лиды",
    description: "Автоматизируем входящие запросы, квалификацию и распределение заявок.",
  },
  {
    title: "Операционные процессы",
    description: "Убираем рутину, настраиваем контроль и ускоряем принятие решений.",
  },
  {
    title: "Данные и аналитика",
    description: "Сводим данные в единую картину и даем понятные отчеты.",
  },
];

const Services = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Услуги"
        title="Автоматизация бизнес процессов"
        description="Проектируем решения под ваши процессы и KPI. Берем ответственность за внедрение, качество и результат."
      />

      <section className="py-section bg-background section-ambient">
        <div className="section-container">
          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((item, index) => (
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

      <ServicesSection showHeader={false} />

      <section className="py-section bg-surface-elevated section-ambient">
        <div className="section-container">
          <div className="glass-panel rounded-3xl p-8 md:p-12 js-reveal reveal">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Готовы обсудить?
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Подберем сценарий автоматизации под ваш бизнес
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="button-premium">
                  Оставить заявку
                </Link>
                <a
                  href="https://t.me/Business_increase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline-premium"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Services;
