import FAQAccordion from "@/components/faq-accordion";
import { Dot } from "lucide-react";

const PricingFaq = () => {
  const faqData = [
    {
      id: "faq1",
      question: "Is Astrah available outside the GCC?",
      answer:
        "Yes. We support MENA markets and offer regional pricing based on country and operating model. Talk to us.",
    },
    {
      id: "faq2",
      question: "What are “External AI tokens”?",
      answer:
        "External AI tokens are used when Astrah integrates with external AI services. These tokens are separate from the internal AI usage included in your plan.",
    },
    {
      id: "faq3",
      question: "Is migration included?",
      answer:
        " Migration support varies by plan. The Starter plan includes a one-time migration fee, while the Business and Pro plans include migration support at no additional cost.",
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

export default PricingFaq;
