import { type CSSProperties } from "react";
import {
  Brain,
  FileText,
  Boxes,
  ShieldCheck,
  Gift,
  ShoppingCart,
  Radar,
  Bot,
  Search,
  TrendingDown,
  Clock,
  ListChecks,
  Timer,
  Layers,
  Calculator,
  Database,
  Users,
  ScanLine,
  Sliders,
  Repeat,
  MousePointerClick,
  Globe,
  Puzzle,
  Target,
  Shield,
  type LucideIcon,
} from "lucide-react";

type CaseVisualType = "bars" | "line" | "nodes";

interface CaseMetric {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface CaseVisualNode {
  left: string;
  top: string;
  size: string;
}

interface CaseItem {
  title: string;
  niche: string;
  task: string;
  solution: string;
  result: string;
  status: string;
  type: string;
  accent: string;
  icon: LucideIcon;
  visual: CaseVisualType;
  bars?: string[];
  lineDots?: string[];
  nodes?: CaseVisualNode[];
  metrics: CaseMetric[];
}

const cases: CaseItem[] = [
  {
    title: "Автоответчик и кабинет клиента",
    niche: "Банкротство физических лиц",
    task: "Снизить нагрузку на менеджеров, ускорить первичную консультацию, дать прозрачность по статусу дела.",
    solution:
      "Telegram-бот + ИИ-менеджер + личный кабинет клиента, запись на услуги, передача тёплых лидов, интеграция с CRM.",
    result: "Снижение нагрузки, рост конверсии в договор и меньше вопросов по статусу.",
    status: "Запущено",
    type: "AI + CRM",
    accent: "210 100% 70%",
    icon: Brain,
    visual: "bars",
    bars: ["48%", "82%", "64%"],
    metrics: [
      { value: "−40–60%", label: "нагрузка менеджеров", icon: TrendingDown },
      { value: "24/7", label: "консультация ИИ", icon: Clock },
      { value: "3 сценария", label: "запись на услуги", icon: ListChecks },
    ],
  },
  {
    title: "Автоматизация коммерческих предложений",
    niche: "Металлопрокат",
    task: "Быстро отвечать на запросы клиентов, учитывать остатки и актуальные цены, исключить ошибки.",
    solution:
      "ИИ-обработка запроса, подключение к базе склада, автогенерация КП в PDF/Excel с расчётом НДС, доставки и скидок.",
    result: "КП за минуты вместо часов, рост скорости продаж и меньше пересчётов.",
    status: "Под ключ",
    type: "Ценообразование",
    accent: "42 90% 62%",
    icon: FileText,
    visual: "line",
    lineDots: ["12%", "42%", "72%", "92%"],
    metrics: [
      { value: "1–2 мин", label: "подготовка КП", icon: Timer },
      { value: "3 канала", label: "Telegram/WhatsApp/сайт", icon: Layers },
      { value: "3 параметра", label: "НДС/доставка/скидки", icon: Calculator },
    ],
  },
  {
    title: "Контроль неснижаемых остатков",
    niche: "Сеть табачных магазинов",
    task: "Не допускать пустых полок и потери выручки.",
    solution:
      "Учёт остатков по каждому магазину, пороги по SKU, уведомления о минимуме, автозаявки на пополнение, аналитика.",
    result: "Стабильное наличие ходовых позиций и меньше потерь продаж.",
    status: "Внедрено",
    type: "Склад/ERP",
    accent: "160 80% 55%",
    icon: Boxes,
    visual: "nodes",
    nodes: [
      { left: "18%", top: "38%", size: "18px" },
      { left: "46%", top: "64%", size: "14px" },
      { left: "76%", top: "36%", size: "20px" },
    ],
    metrics: [
      { value: "1 система", label: "вся сеть магазинов", icon: Database },
      { value: "24/7", label: "контроль остатков", icon: Clock },
      { value: "2 отчёта", label: "дефицит/неликвид", icon: FileText },
    ],
  },
  {
    title: "Контроль обходов через NFC",
    niche: "Охранное предприятие",
    task: "Контроль фактического присутствия охранников на объектах.",
    solution:
      "Telegram-бот + NFC-метки + журнал событий, фиксация статуса, фото при замечаниях, отчёты для руководства.",
    result: "Прозрачные обходы, дисциплина персонала и доказательная база для клиентов.",
    status: "Контроль",
    type: "NFC/Безопасность",
    accent: "262 90% 72%",
    icon: ShieldCheck,
    visual: "bars",
    bars: ["42%", "78%", "58%"],
    metrics: [
      { value: "2 режима", label: "админ/охранник", icon: Users },
      { value: "1 скан", label: "фиксация точки", icon: ScanLine },
      { value: "24/7", label: "журнал событий", icon: Clock },
    ],
  },
  {
    title: "B2B-конструктор леденцов",
    niche: "Персонализированные подарки",
    task: "Создать кастомный продукт под бренд клиента и автоматизировать заказы.",
    solution:
      "Онлайн-конструктор, автопросчёт стоимости, оформление заказа в производство, управление партиями и статусы.",
    result: "Рост B2B-заказов, сокращение времени обработки и масштабируемая модель.",
    status: "Производство",
    type: "B2B-кастомизация",
    accent: "330 80% 68%",
    icon: Gift,
    visual: "line",
    lineDots: ["16%", "44%", "68%", "90%"],
    metrics: [
      { value: "4 параметра", label: "логотип/форма/цвет/вкус", icon: Sliders },
      { value: "1 поток", label: "заказ → производство", icon: Repeat },
      { value: "24/7", label: "приём заказов", icon: Clock },
    ],
  },
  {
    title: "Telegram-магазин с картой доставки",
    niche: "Овощи и фрукты",
    task: "Продажи без сайта и маркетплейсов с удобной доставкой.",
    solution:
      "Каталог, корзина, выбор района на карте, уведомления о статусе, повторные заказы в 1 клик.",
    result: "Быстрый запуск онлайн-продаж и удобство для клиентов.",
    status: "E-commerce",
    type: "Telegram Mini App",
    accent: "210 100% 70%",
    icon: ShoppingCart,
    visual: "nodes",
    nodes: [
      { left: "20%", top: "36%", size: "16px" },
      { left: "52%", top: "56%", size: "22px" },
      { left: "80%", top: "40%", size: "14px" },
    ],
    metrics: [
      { value: "1 клик", label: "повторный заказ", icon: MousePointerClick },
      { value: "24/7", label: "приём заказов", icon: Clock },
      { value: "0 сайта", label: "вся продажа в Telegram", icon: Globe },
    ],
  },
  {
    title: "Лидогенерация для недвижимости",
    niche: "Агентство недвижимости",
    task: "Получать горячие объявления раньше конкурентов.",
    solution:
      "Парсинг ЦИАН/Авито/ДомКлик, фильтрация по параметрам, мгновенная отправка риелтору и история объявлений.",
    result: "Лиды в первые минуты публикации и рост сделок.",
    status: "Лидогенерация",
    type: "Парсинг",
    accent: "262 90% 72%",
    icon: Radar,
    visual: "bars",
    bars: ["58%", "86%", "62%"],
    metrics: [
      { value: "3 источника", label: "ЦИАН/Авито/ДомКлик", icon: Radar },
      { value: "минуты", label: "первый доступ", icon: Timer },
      { value: "24/7", label: "мониторинг", icon: Clock },
    ],
  },
  {
    title: "Универсальные Telegram-боты B2B",
    niche: "Сервисы и агентства",
    task: "Типовые бизнес-процессы: запись, FAQ, приём заявок, аналитика.",
    solution:
      "Базовый бот + доработки под бизнес, ИИ-консультант, интеграция с CRM и аналитика.",
    result: "Быстрый запуск и масштабирование под задачи компании.",
    status: "B2B",
    type: "Автоматизация",
    accent: "42 90% 62%",
    icon: Bot,
    visual: "line",
    lineDots: ["18%", "48%", "78%"],
    metrics: [
      { value: "6 модулей", label: "FAQ/запись/ИИ/заявки/CRM/аналитика", icon: Puzzle },
      { value: "1 база", label: "единая логика", icon: Layers },
      { value: "24/7", label: "обслуживание клиентов", icon: Clock },
    ],
  },
];

interface CasesSectionProps {
  showHeader?: boolean;
}

const CasesSection = ({ showHeader = true }: CasesSectionProps) => {
  return (
    <section id="cases" className="py-section-lg bg-background section-aurora">
      <div className="section-container relative z-10">
        {showHeader && (
          <div className="mb-16 js-reveal reveal">
            <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
              Кейсы
            </p>
            <h2 className="text-display-sm md:text-display-md font-semibold text-foreground max-w-3xl">
              Реальные проекты, измеримые результаты
            </h2>
            <p className="text-text-secondary text-body-md mt-4 max-w-2xl">
              Показываем, как автоматизация снижает издержки и ускоряет процессы.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const CaseIcon = caseItem.icon;
            return (
              <article
                key={caseItem.title}
                className="group p-6 md:p-10 case-card js-reveal reveal"
                style={
                  {
                    "--case-accent": caseItem.accent,
                    transitionDelay: `${index * 120}ms`,
                  } as CSSProperties
                }
              >
                {/* Header */}
                <div className="case-header mb-6">
                  <div className="flex items-start gap-4">
                  <div className="case-icon-3d">
                      <CaseIcon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <span className="text-muted-foreground text-body-sm">
                        {caseItem.niche}
                      </span>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground mt-2">
                        {caseItem.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="case-pill">{caseItem.status}</span>
                    <span className="case-pill case-pill-outline">{caseItem.type}</span>
                  </div>
                </div>

                <div className={`case-visual case-visual--${caseItem.visual} mb-6`} aria-hidden="true">
                  <div className="case-visual-line" />
                  {caseItem.visual === "bars" && caseItem.bars && (
                    <div className="case-visual-bars">
                      {caseItem.bars.map((height, barIndex) => (
                        <span
                          key={`${caseItem.title}-bar-${barIndex}`}
                          style={{ height, animationDelay: `${barIndex * 0.2}s` }}
                        />
                      ))}
                    </div>
                  )}
                  {caseItem.visual === "line" && caseItem.lineDots && (
                    <>
                      <div className="case-visual-line-chart" />
                      {caseItem.lineDots.map((left, dotIndex) => (
                        <span
                          key={`${caseItem.title}-dot-${dotIndex}`}
                          className="case-visual-dot"
                          style={{ left, animationDelay: `${dotIndex * 0.25}s` }}
                        />
                      ))}
                    </>
                  )}
                  {caseItem.visual === "nodes" && caseItem.nodes && (
                    <>
                      <div className="case-visual-link" />
                      {caseItem.nodes.map((node, nodeIndex) => (
                        <span
                          key={`${caseItem.title}-node-${nodeIndex}`}
                          className="case-visual-node"
                          style={{
                            left: node.left,
                            top: node.top,
                            width: node.size,
                            height: node.size,
                            animationDelay: `${nodeIndex * 0.3}s`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-2">
                      Задача
                    </p>
                    <p className="text-text-secondary text-body-md">
                      {caseItem.task}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-2">
                      Решение
                    </p>
                    <p className="text-text-secondary text-body-md">
                      {caseItem.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-2">
                      Эффект
                    </p>
                    <p className="text-foreground text-body-md font-medium">
                      {caseItem.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {caseItem.metrics.map((metric) => {
                    const MetricIcon = metric.icon;
                    return (
                      <div
                        key={`${metric.value}-${metric.label}`}
                        className="badge-premium case-metric gap-2"
                      >
                        <span className="case-metric-icon">
                          <MetricIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-foreground font-semibold">{metric.value}</span>
                        <span className="text-muted-foreground">{metric.label}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
