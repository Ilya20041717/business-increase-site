import { MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border-subtle">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold mb-1">Business Increase</p>
            <p className="text-muted-foreground text-body-sm">
              Автоматизация, которая масштабирует бизнес
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/Business_increase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-body-sm"
              aria-label="Telegram"
            >
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span>Telegram</span>
            </a>
            <a
              href="mailto:BINC7@yandex.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-body-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 shrink-0" />
              <span>Email</span>
            </a>
            <a
              href="tel:+79777772770"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-body-sm"
              aria-label="Позвонить"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span>+7 (977) 777-27-70</span>
            </a>
          </div>

          <p className="text-muted-foreground text-body-sm">
            © {currentYear} Business Increase
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
