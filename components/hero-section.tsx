"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative font-sf-pro min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-background pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10 w-full">
        <div className=" gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center md:pr-4 relative z-20 ">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="inline-block w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-white rounded-full shrink-0" />
              <span
                className="text-xs md:text-base text-white/80 font-light font-sf-pro tracking-[0.44px] uppercase"
                style={{ letterSpacing: "4%" }}
              >
                {t("tagline")}
              </span>
            </div>

            {/* Main Heading - 56px with 120% line height (no forced line breaks) */}
            <h1 className="text-[1.67rem] md:text-[2.67rem] lg:text-[3.35rem]  tracking-tight font-medium font-sf-pro mb-5 md:mb-6 md:leading-[120%] text-white">
              {t("mainHeading")}
            </h1>
            <h1 className="-mt-10 max-lg:-mt-9 rtl:-mt-6 rtl:max-md:-mt-7 text-[1.67rem] md:text-[2.67rem] lg:text-[3.35rem]  tracking-tight font-medium font-sf-pro mb-5 md:mb-6 md:leading-[120%] text-white">
              {t("mainHeading2")}
            </h1>

            {/* Sub Heading - 16px with 160% line height */}
            <p className="text-white/80 text-sm md:text-base font-light mb-8 md:mb-10 md:leading-[160%] max-w-xl">
              {t("subHeading")}
            </p>

            {/* Feature Box */}
            <div className="flex  max-w-md">
              <div className=" flex-1 max-w-1 rounded-full bg-white"></div>
              <div className="ps-5">
                <p className="font-medium mb-2 text-white text-base">
                  {t.rich("featureLabel", {
                    highlight: (chunk) => (
                      <span className="text-[#00B3C6]">{chunk}</span>
                    ),
                  })}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed max-lg:leading-snug max-w-72">
                  {t("featureText")}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="cursor-pointer inline-block px-7 py-4  rounded-lg font-gilroy text-black md:border-0 transition-all hover:opacity-90 w-fit mt-16 "
              style={{ backgroundColor: "#00B3C6" }}
            >
              {t.rich("buttonText", {
                bold: (chunk) => <span className="font-semibold">{chunk}</span>,
              })}
            </button>
          </div>

          {/* Right visual - anchored bottom-right */}
          <div className="lg:relative h-36 lg:h-full w-full lg:ltr:-mr-16  xl:ltr:-mr-32 top-0  lg:-top-4 lg:pb-0  max-lg:justify-center max-lg:items-center max-lg:flex max-lg:my-5">
            <div
              className="lg:absolute lg:bottom-0 ltr:right-0 rtl:left-0 w-full max-w-40
             lg:max-w-88"
            >
              {/* Brain visualization */}
              <div className="relative w-full aspect-square rounded-full overflow-hidden animate-pulse">
                <Image
                  src="/brain.png"
                  alt="Neural network brain visualization"
                  fill
                  className="object-cover object-bottom opacity-75"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Box - Mobile only (below brain) */}
        {/* <div className="lg:hidden border-s-4 ps-4 border-white">
          <p className="font-medium mb-2 text-white text-sm">
            {t.rich("featureLabel", {
              highlight: (chunk) => (
                <span className="text-[#00B3C6]">{chunk}</span>
              ),
            })}
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            {t("featureText")}
          </p>
        </div> */}
      </div>
    </section>
  );
}
