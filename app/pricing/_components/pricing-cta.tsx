import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const PricingCTA = () => {
  const t = useTranslations("pricingPage.cta");

  return (
    <section className="w-full font-sf-pro">
      <div className="max-w-5xl w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-semibold md:font-medium text-3xl md:text-[40px] lg:text-5xl tracking-tighter">
            {t("title")}
          </p>

          <p className="text-muted-foreground mt-6 max-w-150 ">
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
