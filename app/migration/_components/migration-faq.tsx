import FAQAccordion from "@/components/faq-accordion";
import { Dot } from "lucide-react";
import React from "react";

const MigrationFaq = () => {
  const faqData = [
    {
      id: "faq1",
      question: "Is ~72 hours guaranteed?",
      answer:
        "It applies to standard migrations where exports are available and workflows are not heavily customized. Complex environments are scoped separately.",
    },
    {
      id: "faq2",
      question: "Can you migrate WhatsApp history?",
      answer:
        "Yes, we can migrate WhatsApp history if the data export is available from your current CRM or messaging platform.",
    },
    {
      id: "faq3",
      question: "Will my team need training?",
      answer:
        "Most teams adapt quickly to Astrah's intuitive interface. We provide documentation and optional training sessions to ensure a smooth transition.",
    },
  ];
  return (
    <div className="section-container">
      <div className="flex flex-col items-center">
        <div className="flex text-muted-foreground ">
          <Dot size={26} className="text-white" /> <span>FAQ</span>
        </div>
        <p className=" font-medium text-2xl md:text-4xl lg:text-[40px] mt-5">
          Frequently asked questions
        </p>
        <div className=" max-w-3xl mt-12">
          <FAQAccordion faqData={faqData} />
        </div>
      </div>
    </div>
  );
};

export default MigrationFaq;
