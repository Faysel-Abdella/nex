import { Button } from "@/components/ui/button";
import { Dot, PhoneCall, Send } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import ContactUsForm from "./contact-us-form";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("contactUs.hero");

  return (
    <section className="section-container flex max-md:gap-10 max-md:flex-col  ">
      <div className="grid lg:grid-cols-2 section-content gap-10">
        <div className="max-lg:mx-auto md:max-w-137.5 flex flex-col max-lg:items-center max-lg:text-center max-lg:justify-center  ">
          <div className="flex font-light ">
            <Dot size={26} />{" "}
            <span className="text-muted-foreground">{t("badge")}</span>
          </div>
          <p className=" font-medium text-2xl md:text-4xl lg:text-[53px] mt-5">
            {t("title")}
          </p>
          <p className="text-muted-foreground mt-5 max-w-xl ">
            {t("description")}
          </p>
          <div className="flex mt-10 gap-5 ">
            <Button className=" font-gilroy h-13.5 sm:px-7">
              {t("primaryCta")}
            </Button>
            <Button
              variant="outline"
              className=" border-white sm:px-7 font-sf-pro shadow-[inset_0_0px_20px_rgba(0,179,198,0.1)] text-sm text-white/75 h-13.5 hover:border-primary rounded-md"
              asChild
            >
              <Link href="/pricing">{t("secondaryCta")}</Link>
            </Button>
          </div>
        </div>
        <div className="w-full h-full row-span-2 shrink-0">
          <ContactUsForm />
        </div>
        <div>
          <div>
            <p className="font-semibold text-2xl mb-2 text-white ">
              {t("direct.title")}
            </p>
            <p className="text-muted-foreground text-sm">
              {t("direct.description")}
            </p>
          </div>
          <div className="flex max-w-md mt-8">
            <div className=" flex-1 shrink-0 max-w-1 rounded-full bg-white"></div>
            <div>
              <div className="ps-5">
                <p className="font-medium text-base">
                  {t("direct.emailLabel")}
                </p>
                <div className=" text-sm leading-relaxed items-center flex mt-3 gap-2 max-w-72">
                  <Send size={18} />{" "}
                  <p className="text-muted-foreground">hello@astrah.net</p>
                </div>
              </div>
              <div className="ps-5 mt-10">
                <p className="font-medium text-base">
                  {t("direct.whatsappLabel")}
                </p>
                <div className=" text-sm leading-relaxed items-center flex mt-3 gap-2 max-w-72">
                  <PhoneCall size={18} />{" "}
                  <p className="text-muted-foreground">+251947344248</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-8">{t("direct.footer")}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
