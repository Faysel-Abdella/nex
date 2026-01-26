import React from "react";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

const BottomCTA = () => {
  const t = useTranslations("landing.bottomCta");

  return (
    <section className="w-full  font-sf-pro">
      <div className="max-w-5xl  w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden  pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-3xl md:text-[40px]">{t("title")}</p>
          <p className="text-muted-foreground mt-6 max-w-xl ">
            {t("description")}
          </p>
          <Button className="mt-8 font-gilroy h-11.5 px-7" asChild>
            <Link href="/contact-us">
              {t("talkTo")} <span className="font-bold">{t("brand")}</span>
            </Link>
          </Button>
          <div className="  w-1/3 -top-20 blur-[100px]  rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
