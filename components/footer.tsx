import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const footerLinks = [
  {
    titleKey: "links.title",
    links: [
      { nameKey: "links.product", url: "/#product" },
      { nameKey: "links.terms", url: "/terms" },
      { nameKey: "links.migration", url: "/migration" },
    ],
  },
  {
    titleKey: "legal.title",
    links: [
      { nameKey: "legal.privacy", url: "/privacy" },
      { nameKey: "legal.terms", url: "/terms" },
      { nameKey: "legal.acceptableUse", url: "/acceptable-use" },
      { nameKey: "legal.refunds", url: "/refunds" },
    ],
  },
  {
    titleKey: "contact.title",
    descriptionKey: "contact.description",
    buttonKey: "contact.button",
  },
];

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <section className="pt-30 section-container ">
      <div className="w-full max-w-7xl mx-auto flex gap-8 max-md:flex-col ">
        <div className="md:w-1/3 lg:w-2/5 flex flex-col">
          <div className="flex items-center">
            <Logo imgClassName="h-6" />
          </div>
          <div className="text-white/75 max-w-65 mt-10">{t("tagline")}</div>
        </div>
        <div className="md:w-2/3 lg:w-3/5 flex justify-between max-sm:flex-wrap max-md:gap-y-6 max-md:gap-x-6  text-sm">
          {footerLinks.map((section, index) => (
            <div key={index} className="">
              <h3 className=" font-semibold mb-5 text-white/40">
                {t(section.titleKey)}
              </h3>
              {section.descriptionKey && (
                <p className="text-white/75 mb-8 max-w-50">
                  {t(section.descriptionKey)}
                </p>
              )}
              {section.buttonKey && (
                <Button
                  variant="outline"
                  className=" border-white px-7 font-sf-pro text-sm  text-white/75  h-10 hover:border-primary rounded-md"
                >
                  {t(section.buttonKey)}
                </Button>
              )}
              {section.links && (
                <ul className="mt-5 flex flex-col gap-4.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-2">
                      <Link
                        href={link.url}
                        className="text-white/75 hover:text-white"
                      >
                        {t(link.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 mb-10 flex items-center flex-col justify-center gap-10">
        <div className="shrink bg-linear-to-r from-transparent via-border to-transparent h-px w-full" />
        <div className=" flex justify-between items-center w-full max-w-7xl max-md:flex-col max-md:gap-4">
          <p className="text-sm text-muted-foreground">{t("infra")}</p>
          <div className="md:hidden shrink bg-linear-to-r from-transparent via-border to-transparent h-px w-full" />

          <p className="text-sm text-muted-foreground">
            {t.rich("copyright", {
              bold: (chunk) => <span className="text-white">{chunk}</span>,
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
