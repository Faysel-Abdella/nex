import DepthCard from "@/components/depth-card";

const OnTheRoadmap = () => {
  const roadmapContents = [
    "AI Agents (Sales / Support / Analyst)",
    "Advanced workflow engine",
    "Voice & call intelligence",
    "Full audit logging / SSO",
    "Campaigns (Email + WhatsApp)",
  ];

  return (
    <section className="section-container">
      <div className="section-content">
        <div className="flex w-full justify-center">
          <p className="font-medium text-3xl md:text-[40px] text-center">
            On the Roadmap
          </p>
        </div>

        {/* The parent container uses flex-wrap and justify-center */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
          {roadmapContents.map((content, index) => (
            <DepthCard
              key={index}
              className="
                flex items-start flex-col bg-card border rounded-2xl gap-3 p-5
                w-full 
                md:w-[calc(50%-12px)] 
                lg:w-[calc(33.33%-16px)]
                md:min-h-30 lg:min-h-35 xl:min-h-10
              "
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
