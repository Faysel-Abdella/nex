import React from "react";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const MigrationCTA = () => {
  const t = useTranslations("landing.migration");

  return (
    <section className="section-container w-full font-sf-pro">
      <div className="max-w-2xl text-center items-center flex flex-col justify-center mx-auto ">
        <p className=" font-semibold md:font-medium text-3xl md:text-[40px] tracking-tight">
          {t("title")}
        </p>
        <p className="text-muted-foreground mt-6 max-w-xl ">{t("desc-1")}</p>
        <p className="text-muted-foreground  max-w-xl ">{t("desc-2")}</p>

        <Button className="mt-8   h-11.5 px-7" asChild>
          <Link href="/migration">{t("cta")}</Link>
        </Button>
      </div>
    </section>
  );
};

export default MigrationCTA;
