import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const ContactUsCTA = () => {
  const t = useTranslations("contactUs.cta");

  return (
    <section className="w-full font-sf-pro">
      <div className="max-w-5xl w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background pb-10 section-container relative overflow-hidden pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-3xl md:text-[40px] lg:text-5xl tracking-tighter">
            {t("title")}
          </p>

          <div className="flex mt-10 gap-5 ">
            <Button className=" font-gilroy h-13.5 px-7">
              {t("primaryButton")}
            </Button>
            <Button
              variant="outline"
              className=" border-white px-7 shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)] font-sf-pro text-sm text-white/75 h-13.5 hover:border-primary rounded-md"
            >
              {t("secondaryButton")}
            </Button>
          </div>
          <div className="w-1/3 -top-40 blur-[150px] rounded-full absolute h-40 bg-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsCTA;
