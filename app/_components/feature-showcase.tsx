import { useTranslations } from "next-intl";
import React from "react";

const FeatureShowcase = () => {
  const t = useTranslations("landing.featureShowcase");

  return (
    <section className="relative section-container  font-sf-pro">
      <div className="section-content  flex flex-col gap-30 items-center ">
        <div className="flex max-md:gap-10 max-md:flex-col  ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("demand.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("demand.desc")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("demand.list1")}</li>
              <li>{t("demand.list2")}</li>
              <li>{t("demand.list3")}</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-1.png"} />
            </div>
          </div>
        </div>
        <div className="flex  max-md:gap-10  flex-row-reverse max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("revenue.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("revenue.desc")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("revenue.list1")}</li>
              <li>{t("revenue.list2")}</li>
              <li>{t("revenue.list3")}</li>
            </ul>
            <p className="text-muted-foreground mt-6">{t("revenue.footer")}</p>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-2.png"} />
            </div>
          </div>
        </div>
        <div className="flex max-md:gap-10  max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium text-3xl md:text-[40px]">
              {t("inbox.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("inbox.desc")}</p>
            <p className="font-medium text-3xl md:text-[40px]">
              {t("cash.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("cash.desc")}</p>
            <ul className="text-muted-foreground list-disc ps-5 mt-4 max-md:max-w-sm text-start">
              <li>{t("cash.list1")}</li>
              <li>{t("cash.list2")}</li>
              <li>{t("cash.list3")}</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-3.png"} />
            </div>
          </div>
        </div>
        <div className="flex  max-md:gap-10 flex-row-reverse max-md:flex-col ">
          <div className="md:w-1/2 flex flex-col  justify-center  ">
            <p className="font-medium  text-3xl md:text-[40px]">
              {t("alive.title")}
            </p>
            <p className="text-muted-foreground mt-6">{t("alive.desc1")}</p>
            <p className="text-muted-foreground mt-6">{t("alive.desc2")}</p>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full ">
              <img src={"/feature/feature-4.png"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
