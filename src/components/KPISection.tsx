const kpis = [
  {
    value: "80%",
    label: "снижение ручной работы",
    description: "Рутинные операции выполняются автоматически",
  },
  {
    value: "24/7",
    label: "работа без выходных",
    description: "Автоматизация не требует отдыха и внимания",
  },
  {
    value: "< 1 сек",
    label: "время реакции",
    description: "Мгновенные уведомления и обработка событий",
  },
  {
    value: "100%",
    label: "контроль процессов",
    description: "Прозрачность и управляемость на каждом этапе",
  },
];

const KPISection = () => {
  return (
    <section className="py-section bg-surface-elevated section-ambient">
      <div className="section-container">
        <div className="mb-16 text-center js-reveal reveal">
          <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
            Результаты
          </p>
          <h2 className="text-display-sm md:text-display-md font-semibold text-foreground">
            Что получает бизнес
          </h2>
          <p className="text-text-secondary text-body-md mt-4 max-w-2xl mx-auto">
            Ключевые эффекты, которые фиксируем после внедрения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center p-8 lux-card js-reveal reveal"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <p className="text-display-md md:text-display-lg font-semibold text-foreground mb-2">
                {kpi.value}
              </p>
              <p className="text-foreground font-medium mb-2">{kpi.label}</p>
              <p className="text-text-secondary text-body-sm">
                {kpi.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
