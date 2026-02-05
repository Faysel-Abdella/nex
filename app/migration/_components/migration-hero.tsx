import ScrollToButton from "@/components/scroll-to-button";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const MigrationHero = () => {
  const t = useTranslations("migration.hero");
  const tHeader = useTranslations("header");

  return (
    <section className="section-container flex gap-10 flex-col  ">
      <div className="max-w-137.5 flex flex-col items-center text-center justify-center mx-auto ">
        <div className="flex text-muted-foreground ">
          <Dot size={26} /> <span>{t("badge")}</span>
        </div>
        <p className=" font-medium text-2xl md:text-4xl lg:text-[53px] mt-5">
          {t("title")}
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          {t("description-1")}
        </p>
        <p className="text-muted-foreground  max-w-xl ">{t("description-2")}</p>
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
            className=" border-white sm:px-7 font-sf-pro shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)] text-sm text-white/75 h-13.5 hover:border-primary rounded-md"
            asChild
          >
            <ScrollToButton
              sectionId="migration-included"
              sourcePath="/migration"
            >
              {t("cta")}
            </ScrollToButton>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
