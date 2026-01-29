import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/services", label: "Услуги" },
    { to: "/cases", label: "Кейсы" },
    { to: "/approach", label: "Подход" },
    { to: "/contact", label: "Контакт" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border-subtle shadow-[0_16px_40px_-24px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Основная навигация">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            Business Increase
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative transition-colors duration-200 text-body-sm after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-foreground/70 after:transition-all hover:after:w-full ${
                    isActive ? "text-foreground after:w-full" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="button-premium px-5 py-2 text-body-sm">
              Оставить заявку
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4 rounded-lg border border-border-subtle bg-card/80 p-4 backdrop-blur">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-200 text-body-md py-2 ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="button-premium px-5 py-3 text-body-sm text-center mt-2"
              >
                Оставить заявку
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
