import ContactForm from "./ContactForm";

interface ContactSectionProps {
  showHeader?: boolean;
}

const ContactSection = ({ showHeader = true }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-section-lg bg-background section-ambient">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {showHeader && (
            <div className="text-center mb-12 js-reveal reveal">
              <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-4">
                Контакт
              </p>
              <h2 className="text-display-sm md:text-display-md font-semibold text-foreground mb-4">
                Опишите задачу
              </h2>
              <p className="text-text-secondary text-body-lg">
                Расскажите о вашей ситуации, и мы покажем, как её автоматизировать
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="glass-panel rounded-2xl p-8 md:p-10 js-reveal reveal">
              <ContactForm />
            </div>

            <div className="space-y-6 js-reveal reveal reveal-delay-2">
              <div className="lux-card p-6">
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Что вы получите
                </p>
                <ul className="space-y-3 text-text-secondary text-body-sm">
                  <li>Аудит процессов и узких мест</li>
                  <li>План автоматизации с приоритетами</li>
                  <li>Оценку бюджета и сроков</li>
                  <li>Прогноз эффекта в цифрах</li>
                </ul>
              </div>
              <div className="lux-card p-6">
                <p className="text-muted-foreground text-body-sm uppercase tracking-wider mb-3">
                  Свяжемся за 24 часа
                </p>
                <p className="text-text-secondary text-body-sm mb-4">
                  После отправки формы мы уточним детали и предложим формат встречи или созвона.
                </p>
                <div className="space-y-2 text-body-sm">
                  <a href="mailto:BINC7@yandex.com" className="block text-foreground hover:text-primary transition-colors">
                    BINC7@yandex.com
                  </a>
                  <a href="tel:+79777772770" className="block text-foreground hover:text-primary transition-colors">
                    +7 (977) 777-27-70
                  </a>
                  <a href="https://t.me/Business_increase" target="_blank" rel="noopener noreferrer" className="block text-foreground hover:text-primary transition-colors">
                    Telegram: @Business_increase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
