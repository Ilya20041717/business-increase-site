import { type CSSProperties } from "react";
import { Target, Layers, MessageSquare, Puzzle, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Системный подход",
    description: "Не разовые скрипты, а продуманные решения, которые растут вместе с бизнесом",
    accent: "210 100% 70%",
  },
  {
    icon: Target,
    title: "Бизнес-логика важнее кода",
    description: "Начинаем с понимания задачи, а не с выбора технологий",
    accent: "262 90% 72%",
  },
  {
    icon: MessageSquare,
    title: "Telegram как интерфейс",
    description: "Привычный мессенджер становится панелью управления бизнесом",
    accent: "42 90% 62%",
  },
  {
    icon: Puzzle,
    title: "Решения под задачи",
    description: "Каждый проект уникален, шаблонные решения не работают",
    accent: "160 80% 55%",
  },
  {
    icon: BarChart3,
    title: "Измеримый результат",
    description: "Фокус на метриках: время, конверсия, нагрузка на команду",
    accent: "330 80% 68%",
  },
];

interface WhyUsSectionProps {
  showHeader?: boolean;
}

const WhyUsSection = ({ showHeader = true }: WhyUsSectionProps) => {
  return (
    <section className="py-section bg-surface-elevated section-ambient">
      <div className="section-container">
        {showHeader && (
          <div className="mb-16 js-reveal reveal">
            <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
              Подход
            </p>
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground max-w-3xl">
              Почему Business Increase
            </h2>
            <p className="text-text-secondary text-body-md mt-4 max-w-2xl">
              Мы встраиваем автоматизацию в бизнес-модель и отвечаем за результат.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="lux-card p-6 md:p-8 js-reveal reveal" style={{ transitionDelay: `${index * 90}ms` }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="icon-3d"
                    style={{ "--icon-accent": reason.accent } as CSSProperties}
                  >
                    <reason.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary text-body-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
