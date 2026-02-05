import FAQAccordion from "@/components/faq-accordion";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";

const PricingFaq = () => {
  const t = useTranslations("pricingPage.faq");
  const faqData = t.raw("questions");

  return (
    <div className="section-container">
      <div className="flex flex-col items-center">
        <div className="flex text-muted-foreground ">
          <Dot size={26} className="text-white" /> <span>{t("badge")}</span>
        </div>
        <p className=" font-semibold md:font-medium text-3xl md:text-4xl lg:text-[40px] tracking-tighter mt-5 text-center">
          {t("title")}
        </p>
        <div className=" max-w-3xl w-full mt-12">
          <FAQAccordion faqData={faqData} />
        </div>
      </div>
    </div>
  );
};

export default PricingFaq;
