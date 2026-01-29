const FinalCTA = () => {
  return (
    <section className="py-section-lg bg-background section-ambient">
      <div className="section-container">
        <div className="glass-panel rounded-3xl p-8 md:p-12 lg:p-14 js-reveal reveal">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="badge-premium mb-6">
                Telegram-канал связи
              </div>
              <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-6">
                Удобнее обсудить задачу в Telegram?
              </h2>
              <p className="text-text-secondary text-body-lg mb-10 max-w-xl">
                Напишите нам напрямую — покажем возможные сценарии автоматизации и оценим эффект в цифрах.
                Ответим быстро и без бюрократии.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/Business_increase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-premium"
                >
                  Написать в Telegram
                </a>
                <a href="#contact" className="button-outline-premium">
                  Заполнить бриф
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="lux-card p-6">
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Что обсудим
                </p>
                <ul className="space-y-3 text-text-secondary text-body-sm">
                  <li>Какие процессы автоматизировать в первую очередь</li>
                  <li>Как быстро увидеть эффект и окупаемость</li>
                  <li>Какие интеграции нужны вашей команде</li>
                </ul>
              </div>
              <div className="lux-card p-6">
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Формат работы
                </p>
                <p className="text-text-secondary text-body-sm">
                  Можем начать с короткого созвона или мини-аудита — выберем комфортный формат.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
