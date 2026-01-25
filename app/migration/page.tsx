import Comparison from "./_components/comparison";
import LiveProgress from "./_components/live-progress";
import MigrationCTA from "./_components/migration-cta";
import MigrationFaq from "./_components/migration-faq";
import MigrationHero from "./_components/migration-hero";
import MigrationPlan from "./_components/migration-plan";
import MigrationSafety from "./_components/migration-safety";
import Requirments from "./_components/requirments";

const MigrationPage = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden space-y-16 lg:space-y-30 pt-24 md:pt-32">
      <MigrationHero />
      <Comparison />
      <LiveProgress />
      <Requirments />
      <MigrationPlan />
      <MigrationSafety />
      <MigrationFaq />
      <MigrationCTA />
    </main>
  );
};

export default MigrationPage;
