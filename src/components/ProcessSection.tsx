const steps = [
  {
    number: "01",
    title: "Бриф",
    description: "Разбираемся в вашем бизнесе, процессах и целях автоматизации",
  },
  {
    number: "02",
    title: "Анализ",
    description: "Изучаем текущие процессы, находим узкие места и точки роста",
  },
  {
    number: "03",
    title: "Архитектура",
    description: "Проектируем решение: логику, интеграции, сценарии использования",
  },
  {
    number: "04",
    title: "Разработка",
    description: "Создаём и тестируем решение, настраиваем интеграции",
  },
  {
    number: "05",
    title: "Запуск",
    description: "Внедряем в работу, обучаем команду, обеспечиваем поддержку",
  },
];

interface ProcessSectionProps {
  showHeader?: boolean;
}

const ProcessSection = ({ showHeader = true }: ProcessSectionProps) => {
  return (
    <section id="process" className="py-section-lg bg-background section-ambient">
      <div className="section-container">
        {showHeader && (
          <div className="mb-16 js-reveal reveal">
            <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
              Процесс
            </p>
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground max-w-2xl">
              Как мы работаем
            </h2>
            <p className="text-text-secondary text-body-md mt-4 max-w-2xl">
              Прозрачный цикл работы: от диагностики до внедрения и сопровождения.
            </p>
          </div>
        )}

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-border-subtle ml-6" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative js-reveal reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                {/* Step number */}
                <div className="flex lg:flex-col items-start gap-6 lg:gap-4">
                  <div className="relative z-10 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground text-body-sm font-medium shadow-[0_12px_30px_-24px_rgba(255,255,255,0.5)]">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-body-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
