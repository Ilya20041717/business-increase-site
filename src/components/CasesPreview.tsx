import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

const previewCards = [
  {
    title: "Юридические и финансы",
    subtitle: "ИИ-менеджер + кабинет клиента",
    accent: "210 100% 70%",
    visual: "line",
    dots: ["16%", "46%", "78%"],
  },
  {
    title: "E-commerce в Telegram",
    subtitle: "Каталог, карта доставки, повторные заказы",
    accent: "262 90% 72%",
    visual: "nodes",
    nodes: [
      { left: "18%", top: "42%", size: "14px" },
      { left: "52%", top: "30%", size: "20px" },
      { left: "78%", top: "60%", size: "16px" },
    ],
  },
  {
    title: "Лидогенерация",
    subtitle: "Парсинг и мгновенные уведомления",
    accent: "42 90% 62%",
    visual: "bars",
    bars: ["40%", "78%", "62%"],
  },
];

const CasesPreview = () => {
  return (
    <section className="py-section-lg bg-background section-aurora">
      <div className="section-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="js-reveal reveal">
            <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
              Кейсы
            </p>
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-6">
              8 проектов с измеримым эффектом
            </h2>
            <p className="text-text-secondary text-body-lg mb-8 max-w-2xl">
              Подробные кейсы с задачами, решениями, цифрами и метриками — на отдельной странице.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cases" className="button-premium">
                Смотреть кейсы
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="button-outline-premium">
                Обсудить задачу
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge-premium">
                <TrendingUp className="h-4 w-4" />
                Эффект в цифрах
              </span>
              <span className="badge-premium">
                <ShieldCheck className="h-4 w-4" />
                Конфиденциальность
              </span>
            </div>
          </div>

          <div className="js-reveal reveal reveal-delay-2">
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <div className="grid gap-4">
                {previewCards.map((card) => (
                  <div
                    key={card.title}
                    className="lux-card p-5"
                    style={{ "--case-accent": card.accent } as CSSProperties}
                  >
                    <div className={`case-visual case-visual--${card.visual} mb-4`} aria-hidden="true">
                      <div className="case-visual-line" />
                      {card.visual === "bars" && card.bars && (
                        <div className="case-visual-bars">
                          {card.bars.map((height, index) => (
                            <span
                              key={`${card.title}-bar-${index}`}
                              style={{ height, animationDelay: `${index * 0.2}s` }}
                            />
                          ))}
                        </div>
                      )}
                      {card.visual === "line" && card.dots && (
                        <>
                          <div className="case-visual-line-chart" />
                          {card.dots.map((left, index) => (
                            <span
                              key={`${card.title}-dot-${index}`}
                              className="case-visual-dot"
                              style={{ left, animationDelay: `${index * 0.25}s` }}
                            />
                          ))}
                        </>
                      )}
                      {card.visual === "nodes" && card.nodes && (
                        <>
                          <div className="case-visual-link" />
                          {card.nodes.map((node, index) => (
                            <span
                              key={`${card.title}-node-${index}`}
                              className="case-visual-node"
                              style={{
                                left: node.left,
                                top: node.top,
                                width: node.size,
                                height: node.size,
                                animationDelay: `${index * 0.3}s`,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </div>
                    <p className="text-foreground font-medium">{card.title}</p>
                    <p className="text-text-secondary text-body-sm mt-1">{card.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesPreview;
