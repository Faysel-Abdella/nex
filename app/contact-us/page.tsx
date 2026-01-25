import ContactUsCTA from "./_components/contact-us-cta";
import Hero from "./_components/hero";
import NextSteps from "./_components/next-steps";

const ContactUsPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-16 lg:space-y-30 pt-32 md:pt-45">
      <Hero />
      <NextSteps />
      <ContactUsCTA />
    </main>
  );
};

export default ContactUsPage;
