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

const SystemModules = () => {
  const modules = [
    {
      id: 1,
      icon: "/icons/WhatsappLogo.svg",
      iconSelected: "/icons/WhatsappLogoSelected.svg",
      title: "WhatsApp Intelligence",
      description:
        "Turns WhatsApp threads into structured CRM activity (summaries, signals, follow-ups)",
      output: {
        Icon: TriangleAlert,
        title: "Thread requires follow-up",
        evidence: <div>Pricing & timeline mentioned </div>,
        suggestion: "Suggested: clarify scope + send offer",
      },
    },
    {
      id: 2,
      icon: Activity,
      title: "Deal Health",
      description:
        "Detects risk early (silence + stagnation) and recommends the next best action.",
      output: {
        Icon: TriangleAlert,
        title: "Silence detected",
        evidence: <div>Last inbound WhatsApp: 6 days ago</div>,
        suggestion: "Suggested: draft follow-up",
      },
    },
    {
      id: 3,
      icon: "/icons/sms-tracking.svg",
      iconSelected: "/icons/sms-tracking-selected.svg",
      title: "AI Inbox Zero",
      description:
        "Unified view that triages conversations and produces next steps.",
      output: {
        Icon: TriangleAlert,
        title: "High-intent lead detected",
        evidence: <div>Match score: 84/100 · High intent signals</div>,
        suggestion: "Suggested: draft outreach message",
      },
    },
    {
      id: 4,
      icon: List,
      title: "AI Priority Queue",
      description:
        "Ranks what to do now across deals and chats so nothing slips.",
      output: {
        Icon: TriangleAlert,
        title: "Pricing inquiry detected",
        evidence: <div>Client asked about pricing + timeline</div>,
        suggestion: "Suggested: clarify scope + send offer",
      },
    },
    {
      id: 5,
      icon: "/icons/lamp-charge.svg",
      iconSelected: "/icons/lamp-charge-selected.svg",
      title: "Smart Close",
      description: "Offer + payment request + embedded e-sign to close faster.",
      output: {
        Icon: TriangleAlert,
        title: "Payment Request",
        evidence: <div>Amount: 50,000 AED</div>,
        suggestion: "Suggested: send secure payment link",
      },
    },

    {
      id: 6,
      icon: MessageCircleQuestion,
      title: "Ask Astrah (Orb AI Assistant)",
      description:
        "Answers across CRM + WhatsApp + docs, with optional general knowledge mode.",
      output: "/feature/ask-ai.png",
    },
    {
      id: 7,
      icon: Binoculars,
      title: "AI Lead Generator",
      description:
        "Finds and ranks target companies using GCC-tuned signals and enrichment.",
      output: {
        Icon: TriangleAlert,
        title: "High-intent lead detected",
        evidence: <div>Match score: 84/100 · High intent signals</div>,
        suggestion: "Suggested: draft outreach message",
      },
    },
  ];
  const [visibleModuleIndex, setVisibleModuleIndex] = useState(0);
  const visibleModule = modules[visibleModuleIndex];

  return (
    <section id="product" className="section-container w-full font-sf-pro">
      <div className="  section-content  flex flex-col items-center">
        <p className=" font-medium  text-3xl md:text-[40px] text-center">
          System Modules
        </p>
        <p className="text-muted-foreground mt-6 text-center ">
          One operating layer. Each module produces signals you can act on.
        </p>
        <div className=" max-lg:hidden grid grid-cols-2 w-full mt-14 gap-30">
          <div className=" flex flex-col">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={cn(
                  "relative w-full h-full rounded-[21px]  from-white/10 via-primary/30 to-white/10 p-px   overflow-hidden",
                  index == visibleModuleIndex && "bg-linear-to-br ",
                )}
              >
                <button
                  className={cn(
                    "h-fit w-full  flex items-center gap-4 rounded-[20px] p-5 transition-all bg-background border border-background",
                    index == visibleModuleIndex && "bg-card ",
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
                        "w-6 h-6  opacity-80",
                        visibleModule.id === module.id && "text-primary",
                      )}
                    />
                  )}
                  {module.title}
                </button>
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-2xl font-medium">{visibleModule.title}</p>
            <p className="text-white/60 mt-6">{visibleModule.description}</p>
            <div className="mt-14">
              {typeof visibleModule.output == "string" ? (
                <AskAstrah />
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

        <Carousel className=" lg:hidden w-full  mt-15">
          <CarouselContent className="h-fit ">
            {modules.map((module) => (
              <CarouselItem key={module.id} className="h-fit">
                <p className="text-2xl font-medium">{module.title}</p>
                <p className="text-white/60 mt-6">{module.description}</p>
                <div className="mt-14 flex justify-center max-w-96 pb-10 mx-auto">
                  {typeof module.output == "string" ? (
                    <img src={module.output} className="w-full mx-auto h-fit" />
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
          <CarouselPrevious className=" start-10" />
          <CarouselNext className="end-10" />
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
};

export default SystemModules;
