import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const MigrationHero = () => {
  const t = useTranslations("migration.hero");
  const tHeader = useTranslations("header");

  return (
    <section className="section-container flex max-md:gap-10 max-md:flex-col  ">
      <div className="max-w-137.5 flex flex-col max-md:items-center max-md:text-center justify-center mx-auto ">
        <div className="flex text-muted-foreground ">
          <Dot size={26} /> <span>{t("badge")}</span>
        </div>
        <p className=" font-medium text-2xl md:text-4xl lg:text-[53px] mt-5">
          {t("title")}
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          {t("description")}
        </p>
        <div className="flex mt-10 gap-5 ">
          <Button className=" font-gilroy h-13.5 sm:px-7" asChild>
            <Link href="/contact">
              {tHeader.rich("talkToAstrah", {
                bold: (chunks) => <span className="font-bold">{chunks}</span>,
              })}
            </Link>
          </Button>
          <Button
            variant="outline"
            className=" border-white sm:px-7 font-sf-pro text-sm text-white/75 h-13.5 hover:border-primary rounded-md"
          >
            {t("cta")}
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 shrink-0">
        <div className="relative w-full ">
          <img src={"/feature/feature-1.png"} alt="Migration illustration" />
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
