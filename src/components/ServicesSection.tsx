import { type CSSProperties } from "react";
import { Bot, Brain, Database, Bell, Search, Smartphone } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Telegram-боты для бизнеса",
    description: "Автоматизация общения с клиентами, сбор заявок, уведомления и интеграции с вашими системами",
    accent: "210 100% 70%",
  },
  {
    icon: Brain,
    title: "AI-ассистенты",
    description: "Интеллектуальные помощники для консультаций, обработки запросов и поддержки клиентов",
    accent: "262 90% 72%",
  },
  {
    icon: Database,
    title: "CRM и базы данных",
    description: "Интеграция с CRM-системами, Google Sheets, автоматизация работы с данными",
    accent: "42 90% 62%",
  },
  {
    icon: Bell,
    title: "Уведомления и триггеры",
    description: "Мгновенные оповещения о важных событиях, автоматические действия по условиям",
    accent: "160 80% 55%",
  },
  {
    icon: Search,
    title: "Парсинг и мониторинг",
    description: "Отслеживание данных с сайтов, мониторинг изменений, сбор информации",
    accent: "262 90% 72%",
  },
  {
    icon: Smartphone,
    title: "Telegram Mini Apps",
    description: "Полноценные веб-приложения внутри Telegram для сложных бизнес-задач",
    accent: "210 100% 70%",
  },
];

interface ServicesSectionProps {
  showHeader?: boolean;
}

const ServicesSection = ({ showHeader = true }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-section bg-surface-elevated section-ambient">
      <div className="section-container">
        {showHeader && (
          <div className="mb-16 js-reveal reveal">
            <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
              Услуги
            </p>
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground max-w-3xl">
              Что мы автоматизируем
            </h2>
            <p className="text-text-secondary text-body-md mt-4 max-w-2xl">
              Берем на себя критичные цепочки — от первого касания клиента до аналитики и контроля.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 lux-card js-reveal reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="icon-3d mb-6"
                style={{ "--icon-accent": service.accent } as CSSProperties}
              >
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary text-body-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
