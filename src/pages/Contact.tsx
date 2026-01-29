import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import SiteLayout from "@/components/SiteLayout";

const Contact = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Контакты"
        title="Давайте обсудим вашу задачу"
        description="Расскажите, какой процесс хотите усилить — предложим решение и план внедрения."
        align="center"
      />

      <ContactSection showHeader={false} />
    </SiteLayout>
  );
};

export default Contact;
