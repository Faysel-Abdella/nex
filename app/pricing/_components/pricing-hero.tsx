import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const PricingHero = () => {
  const t = useTranslations("pricingPage.hero");
  const tHeader = useTranslations("header");

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="max-w-2xl text-center items-center flex flex-col justify-center mx-auto ">
        <div className="flex text-muted-foreground text-base items-center">
          <Dot size={26} className="text-white" /> <span>{t("badge")}</span>
        </div>
        <p className=" font-semibold md:font-medium text-3xl md:text-[40px] lg:text-5xl tracking-tighter mt-5">
          {t("title")}
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          {t("description")}
        </p>
        <div className="flex mt-10 gap-5 ">
          <Button className=" font-gilroy h-13.5 px-7">
            {t("primaryCta")}
          </Button>
          <Button
            variant="outline"
            className=" border-white px-7  shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)] font-sf-pro text-sm text-white/75 h-13.5 hover:border-primary rounded-md"
            asChild
          >
            <Link href="/contact"> {t("secondaryCta")}</Link>
          </Button>
        </div>
        <div className="text-muted-foreground mt-16">
          {t.rich("footer", {
            bold: (chunk) => (
              <div className="text-xl font-medium text-foreground">{chunk}</div>
            ),
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
