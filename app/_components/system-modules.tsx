"use client";
import { useTranslations } from "next-intl";
import StyledIcon from "@/components/styled-icon";
import {
  Activity,
  Binoculars,
  Languages,
  List,
  MessageCircleQuestion,
  ToggleLeft,
  TriangleAlert,
} from "lucide-react";
import GlowCard from "@/components/glow-card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/glass-card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AskAstrah from "@/components/ask-astrah";
import { useIsMobile } from "@/hooks/use-mobile";

const SystemModules = () => {
  const t = useTranslations("landing.SystemModules");
  const [visibleModuleIndex, setVisibleModuleIndex] = useState(0);
  const isMobile = useIsMobile();

  const modules = [
    {
      id: 1,
      key: "whatsapp",
      icon: "/icons/WhatsappLogo.svg",
      iconSelected: "/icons/WhatsappLogoSelected.svg",
      title: t("modules.whatsapp.title"),
      buttonTitle: t("modules.whatsapp.buttonTitle"),
      description: t("modules.whatsapp.description"),
      output: {
        Icon: TriangleAlert,
        title: t("modules.whatsapp.output.title"),
        evidence: <div>{t("modules.whatsapp.output.evidence")}</div>,
        suggestion: t("modules.whatsapp.output.suggestion"),
      },
    },
    {
      id: 2,
      key: "dealHealth",
      icon: Activity,
      title: t("modules.dealHealth.title"),
      buttonTitle: t("modules.dealHealth.buttonTitle"),
      description: t("modules.dealHealth.description"),
      output: {
        Icon: TriangleAlert,
        title: t("modules.dealHealth.output.title"),
        evidence: <div>{t("modules.dealHealth.output.evidence")}</div>,
        suggestion: t("modules.dealHealth.output.suggestion"),
      },
    },
    {
      id: 3,
      key: "inboxZero",
      icon: "/icons/sms-tracking.svg",
      iconSelected: "/icons/sms-tracking-selected.svg",
      title: t("modules.inboxZero.title"),
      buttonTitle: t("modules.inboxZero.buttonTitle"),
      description: t("modules.inboxZero.description"),
      output: {
        Icon: TriangleAlert,
        title: t("modules.inboxZero.output.title"),
        evidence: <div>{t("modules.inboxZero.output.evidence")}</div>,
        suggestion: t("modules.inboxZero.output.suggestion"),
      },
    },
    {
      id: 4,
      key: "priorityQueue",
      icon: List,
      title: t("modules.priorityQueue.title"),
      buttonTitle: t("modules.priorityQueue.buttonTitle"),
      description: t("modules.priorityQueue.description"),
      output: {
        Icon: TriangleAlert,
        title: t("modules.priorityQueue.output.title"),
        evidence: <div>{t("modules.priorityQueue.output.evidence")}</div>,
        suggestion: t("modules.priorityQueue.output.suggestion"),
      },
    },
    {
      id: 5,
      key: "smartClose",
      icon: "/icons/lamp-charge.svg",
      iconSelected: "/icons/lamp-charge-selected.svg",
      title: t("modules.smartClose.title"),
      buttonTitle: t("modules.smartClose.buttonTitle"),
      description: t.rich("modules.smartClose.description", {
        bold: (chunk) => (
          <span className="font-bold text-white/95">{chunk}</span>
        ),
      }),
      output: {
        Icon: TriangleAlert,
        title: t("modules.smartClose.output.title"),
        evidence: <div>{t("modules.smartClose.output.evidence")}</div>,
        suggestion: t("modules.smartClose.output.suggestion"),
      },
    },
    {
      id: 6,
      key: "askAstrah",
      icon: MessageCircleQuestion,
      title: t("modules.askAstrah.title"),
      buttonTitle: t("modules.askAstrah.buttonTitle"),
      description: t("modules.askAstrah.description"),
      output: t("modules.askAstrah.placeholder"),
    },
    {
      id: 7,
      key: "leadGen",
      icon: Binoculars,
      title: t("modules.leadGen.title"),
      buttonTitle: t("modules.leadGen.buttonTitle"),
      description: t("modules.leadGen.description"),
      output: {
        Icon: TriangleAlert,
        title: t("modules.leadGen.output.title"),
        evidence: <div>{t("modules.leadGen.output.evidence")}</div>,
        suggestion: t("modules.leadGen.output.suggestion"),
      },
    },
  ];

  const visibleModule = modules[visibleModuleIndex];

  return (
    <section id="product" className="section-container w-full font-sf-pro">
      <div className="section-content flex flex-col items-center">
        <p className="font-medium text-3xl md:text-[40px] text-center">
          {t("sectionTitle")}
        </p>
        <p className="text-muted-foreground mt-6 text-center">
          {t("sectionSubtitle")}
        </p>
        {isMobile ? (
          <Carousel
            opts={{ loop: true, duration: 20 }}
            className="lg:hidden w-full mt-15"
            dir="ltr"
          >
            <CarouselContent className="h-min">
              {modules.map((module) => (
                <CarouselItem key={module.id} className="h-fit transform-gpu">
                  <p className="text-2xl font-medium text-center">
                    {module.title}
                  </p>
                  <p className="text-white/60 mt-6 text-center">
                    {module.description}
                  </p>
                  <div className="mt-14 flex justify-center max-w-96 pb-10 mx-auto">
                    {typeof module.output == "string" ? (
                      <AskAstrah placeholder={module.output} />
                    ) : (
                      <GlassCard
                        Icon={module.output.Icon}
                        evidence={module.output.evidence}
                        suggestion={module.output.suggestion}
                        title={module.output.title}
                        glowDirection={module.id % 2 == 0 ? "top" : "bottom"}
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="start-10 size-10 left-8 rtl:rotate-180  z-10" />
            <CarouselNext className="end-10 size-10 right-8 rtl:rotate-180 z-10" />
            <CarouselDots className="-bottom-1" />
          </Carousel>
        ) : (
          <div className="max-lg:hidden grid grid-cols-2 w-full mt-14 gap-30">
            <div className="flex flex-col">
              {modules.map((module, index) => (
                <div
                  key={module.id}
                  className={cn(
                    "relative w-full h-full rounded-[21px] from-white/10 via-primary/30 to-white/10 p-px overflow-hidden",
                    index == visibleModuleIndex && "bg-linear-to-br",
                  )}
                >
                  <button
                    className={cn(
                      "h-fit w-full flex items-center gap-4 rounded-[20px] p-5 transition-all bg-background border border-background text-start",
                      index == visibleModuleIndex && "bg-card",
                    )}
                    onClick={() => setVisibleModuleIndex(index)}
                  >
                    {typeof module.icon === "string" ? (
                      <img
                        src={
                          visibleModule.id == module.id
                            ? module.iconSelected
                            : module.icon
                        }
                        alt=""
                        className="w-6 h-6"
                      />
                    ) : (
                      <module.icon
                        className={cn(
                          "w-6 h-6 opacity-80 shrink-0",
                          visibleModule.id === module.id && "text-primary",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        visibleModule.id == module.id
                          ? "text-foreground text-xl font-medium"
                          : "text-muted-foreground text-lg",
                      )}
                    >
                      {module.buttonTitle}
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="">
              <p className="text-2xl font-medium">{visibleModule.title}</p>
              <p className="text-white/60 mt-6">{visibleModule.description}</p>
              <div className="mt-14">
                {typeof visibleModule.output == "string" ? (
                  <AskAstrah placeholder={visibleModule.output} />
                ) : (
                  <GlassCard
                    Icon={visibleModule.output.Icon}
                    evidence={visibleModule.output.evidence}
                    suggestion={visibleModule.output.suggestion}
                    title={visibleModule.output.title}
                    glowDirection={visibleModule.id % 2 == 0 ? "top" : "bottom"}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SystemModules;
