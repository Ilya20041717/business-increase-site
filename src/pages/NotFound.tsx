import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
          <p className="mb-6 text-body-lg text-muted-foreground">
            Такой страницы нет. Вернемся на главную?
          </p>
          <Link to="/" className="button-premium">
            На главную
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
