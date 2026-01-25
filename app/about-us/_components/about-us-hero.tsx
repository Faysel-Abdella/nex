import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";

const AboutUsHero = () => {
  const t = useTranslations("about.hero");
  const tHeader = useTranslations("header");

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="    max-w-2xl text-center items-center flex flex-col justify-center mx-auto ">
        <div className="flex text-muted-foreground text-base items-center">
          <Dot size={26} /> <span>{t("tagline")}</span>
        </div>
        <p className=" font-medium text-3xl md:text-[40px] mt-5">
          {t("title")}
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          {t("description")}
        </p>
        <div className="flex mt-10 gap-5 ">
          <Button className=" font-gilroy h-13.5 px-7">
            {tHeader.rich("talkToAstrah", {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </Button>{" "}
          <Button
            variant="outline"
            className=" border-white px-7 font-sf-pro text-sm  text-white/75  h-13.5 hover:border-primary rounded-md"
          >
            {t("viewProduct")}
          </Button>
        </div>
      </div>
      <div className="max-w-2xl text-center mx-auto mt-30">
        <p className=" font-medium text-3xl md:text-[40px]">
          {t("secondaryTitle")}
        </p>
        <p className="text-muted-foreground mt-6">{t("p1")}</p>
        <p className="text-muted-foreground mt-6">{t("p2")}</p>
        <p className="text-muted-foreground mt-6">{t("p3")}</p>
      </div>
    </section>
  );
};

export default AboutUsHero;
