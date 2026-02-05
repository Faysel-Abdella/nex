import DepthCard from "@/components/depth-card";
import GlowCard, { GlowCardDirections } from "@/components/glow-card";
import { useTranslations } from "next-intl";

const OnTheRoadmap = () => {
  const t = useTranslations("pricingPage.onRoadmap");
  const roadmapContents = t.raw("roadmap") as string[];

  return (
    <section className="section-container">
      <div className="section-content">
        <div className="flex w-full justify-center">
          <p className="font-semibold md:font-semibold md:font-medium text-3xl md:text-[40px] text-center">
            {t("title")}
          </p>
        </div>

        {/* The parent container uses flex-wrap and justify-center */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
          {roadmapContents.map((content, index) => (
            <GlowCard
              key={index}
              outerClassName="
                h-full
                w-full 
                md:w-[calc(50%-12px)] 
                lg:w-[calc(33.33%-16px)]
                md:min-h-30 lg:min-h-35 ltr:xl:min-h-10
              "
              className="flex items-start flex-col gap-3 p-5 md:min-h-30 lg:min-h-35 ltr:xl:min-h-10"
              glowDirection={index == 1 ? "bottom" : "top"}
            >
              <div className="bg-third-background size-6 rounded-full shrink-0 flex items-center justify-center mt-1 border-t border-white/25"></div>
              <p className="text-lg text-muted-foreground">{content}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnTheRoadmap;
