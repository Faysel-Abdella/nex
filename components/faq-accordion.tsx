"use client";
import { useState } from "react";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import GlowCard from "./glow-card";

interface FAQAccordionProps {
  faqData: {
    id: string;
    question: string;
    answer: string;
  }[];
}
const FAQAccordion = ({ faqData }: FAQAccordionProps) => {
  const [value, setValue] = useState(faqData[0]?.id || "");

  return (
    <Accordion
      type="single"
      className="w-full "
      value={value}
      onValueChange={setValue}
    >
      {faqData.map((faq) => {
        const isOpen = value === faq.id;
        return (
          <AccordionItem
            value={faq.id}
            key={faq.id}
            className={cn(
              "w-full    rounded-[18px] overflow-hidden transition-all  mb-4  shadow-lg",
              isOpen ? "bg-[#1E242D] border-white/5" : "bg-card",
            )}
          >
            <GlowCard className="p-5" hasGlow={isOpen}>
              <AccordionTrigger
                hasIcon={false}
                className="flex w-full group items-center justify-between   py-0 hover:no-underline cursor-pointer"
              >
                <div className=" flex items-start ">
                  <p
                    className={cn(
                      " text-lg group-hover:underline font-medium",
                      isOpen && "font-semibold",
                    )}
                  >
                    {faq.question}
                  </p>
                </div>
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center ",
                  )}
                >
                  {isOpen ? <Minus /> : <Plus />}
                </div>
              </AccordionTrigger>

              <AccordionContent className="flex flex-col  p-0 pt-4">
                <p className="text-start text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </GlowCard>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
