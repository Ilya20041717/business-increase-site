import { type CSSProperties } from "react";
import { Building2, Globe, Store, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Сервисный бизнес",
    description: "Салоны, клиники, охранные предприятия, управляющие компании",
    accent: "210 100% 70%",
  },
  {
    icon: Globe,
    title: "Онлайн-бизнес",
    description: "Маркетплейсы, инфобизнес, онлайн-школы, digital-агентства",
    accent: "262 90% 72%",
  },
  {
    icon: Store,
    title: "Офлайн-компании",
    description: "Недвижимость, строительство, производство, логистика",
    accent: "42 90% 62%",
  },
  {
    icon: Users,
    title: "Агентства и эксперты",
    description: "Консалтинг, юридические услуги, финансовые консультанты",
    accent: "160 80% 55%",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-section bg-background section-ambient">
      <div className="section-container">
        <div className="mb-16 js-reveal reveal">
          <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
            Кому подходит
          </p>
          <h2 className="text-display-sm md:text-display-md font-semibold text-foreground max-w-2xl">
            Работаем с бизнесом, который готов масштабироваться
          </h2>
          <p className="text-text-secondary text-body-md mt-4 max-w-2xl">
            Ускоряем рост, когда процессам нужен порядок, а команде — свобода от рутины.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="group p-8 lux-card js-reveal reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="icon-3d mb-6"
                style={{ "--icon-accent": item.accent } as CSSProperties}
              >
                <item.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-text-secondary text-body-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
