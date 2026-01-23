import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const PricingCTA = () => {
  const t = useTranslations("pricingPage.cta");

  return (
    <section className="w-full font-sf-pro">
      <div className="max-w-5xl w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-3xl md:text-[40px]">{t("title")}</p>

          <p className="text-muted-foreground mt-6 max-w-lg ">
            {t("description")}
          </p>
          <Button className=" font-gilroy h-13.5 px-7 mt-10">
            {t("button")}
          </Button>
          <div className=" w-1/2 -top-20 blur-[100px] rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
