import AboutUsCTA from "./_components/about-us-cta";
import AboutUsHero from "./_components/about-us-hero";
import Founder from "./_components/founder";
import OperatingPrinciples from "./_components/operating-principles";
import Principles from "./_components/principles";
import RegionalFit from "./_components/regional-fit";

const AboutUsPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-16 lg:space-y-30 pt-24 md:pt-32">
      <AboutUsHero />
      <Principles />
      <RegionalFit />
      <Founder />
      <OperatingPrinciples />
      <AboutUsCTA />
    </main>
  );
};

export default AboutUsPage;
