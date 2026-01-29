import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
