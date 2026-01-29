import { useTranslations } from "next-intl";

const YourCRM = () => {
  const t = useTranslations("landing.crm");

  return (
    <section className="section-container bg-[#070B13] py-20 w-full  font-sf-pro">
      <div className="max-w-2xl text-center mx-auto">
        <p className=" font-medium text-3xl md:text-[40px]">{t("title")}</p>
        <p className="text-muted-foreground mt-6">
          {t("p1")}
          <br /> {t("p2")}
          <br></br> {t("p3")}
        </p>
        <p className="font-semibold mt-5">{t("astrahDoes")}</p>
      </div>
    </section>
  );
};

export default YourCRM;
