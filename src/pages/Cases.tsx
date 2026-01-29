import PageHero from "@/components/PageHero";
import CasesSection from "@/components/CasesSection";
import SiteLayout from "@/components/SiteLayout";
import { Link } from "react-router-dom";

const metrics = [
  { value: "до 80%", label: "снижение ручной нагрузки" },
  { value: "< 1 мин", label: "время реакции на события" },
  { value: "24/7", label: "непрерывная работа системы" },
];

const Cases = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Кейсы"
        title="Результаты в цифрах"
        description="Собрали проекты, где автоматизация дала ощутимый эффект: скорость, контроль, конверсия и экономия ресурсов."
      />

      <section className="py-section bg-background section-ambient">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="lux-card p-6 text-center js-reveal reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-3xl font-semibold text-foreground mb-2">{metric.value}</p>
                <p className="text-text-secondary text-body-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CasesSection showHeader={false} />

      <section className="py-section bg-surface-elevated section-ambient">
        <div className="section-container">
          <div className="glass-panel rounded-3xl p-8 md:p-12 js-reveal reveal">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Хотите похожий результат?
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  Разберем ваш кейс и покажем, где можно выиграть в цифрах
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

export default Cases;
