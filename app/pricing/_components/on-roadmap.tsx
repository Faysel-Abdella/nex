import DepthCard from "@/components/depth-card";

const OnTheRoadmap = () => {
  const roadmapContents = [
    "AI Agents (Sales / Support / Analyst)",
    "Voice & call intelligence",
    "Campaigns (Email + WhatsApp)",
    "Advanced workflow engine",
    "Full audit logging / SSO",
  ];
  return (
    <section className="section-container">
      <div className="section-content ">
        <div className="flex w-full justify-center">
          <p className="font-medium text-3xl md:text-[40px] text-start">
            On the Roadmap
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {roadmapContents.map((content, index) => (
            <DepthCard
              key={index}
              className="flex items-start h-fit w-full bg-card border rounded-2xl gap-3 p-5 flex-col"
            >
              <div className="bg-third-background size-6 rounded-full shrink-0 flex items-center justify-center mt-1 border-t border-white/25"></div>
              <p className="text-lg text-muted-foreground">{content}</p>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnTheRoadmap;
