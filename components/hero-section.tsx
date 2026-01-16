"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-background pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16 pt-24 md:pt-32 pb-12 md:pb-20 relative z-10 w-full">
        <div className=" gap-8 items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center md:pr-4 relative z-20">
            {/* Tagline */}
            <div className="flex items-center gap-2.5 mb-7">
              <span className="inline-block w-1.5 h-1.5 md:w-1.5 md:h-1.5 bg-white rounded-full shrink-0" />
              <span
                className="text-xs md:text-base text-white/80 font-normal font-sf-pro tracking-[0.44px] uppercase"
                style={{ letterSpacing: "4%" }}
              >
                {t("tagline")}
              </span>
            </div>

            {/* Main Heading - 56px with 120% line height (no forced line breaks) */}
            <h1
              className="text-3xl md:text-7xl  font-medium font-sf-pro mb-5 md:mb-6 md:leading-[120%] text-white"
              style={{ fontWeight: 400 }}
            >
              {t("mainHeading")}
            </h1>

            {/* Sub Heading - 16px with 160% line height */}
            <p className="text-white/80 text-sm md:text-base font-normal mb-8 md:mb-10 md:leading-[160%] max-w-xl">
              {t("subHeading")}
            </p>

            {/* CTA Button */}
            <button
              className="inline-block px-7 py-4 font-bold rounded-lg font-gilroy text-black md:border-0 transition-all hover:opacity-90 w-fit"
              style={{ backgroundColor: "#00B3C6" }}
            >
              {t("buttonText")}
            </button>

            {/* Feature Box - Desktop only */}
            <div className="hidden md:block mt-16 border-s-4 ps-5 border-white max-w-md">
              <p className="font-medium mb-2 text-white text-base">
                {t("featureLabelPart1")}{" "}
                <span style={{ color: "#00d4ff" }}>
                  {t("featureLabelPart2")}
                </span>
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("featureText")}
              </p>
            </div>
          </div>

          {/* Right visual - anchored bottom-right */}
          <div className="relative h-72 md:h-full flex items-end justify-end w-full md:-mr-16 lg:-mr-32 md:top-42 md:pb-0">
            <div className="absolute bottom-0 right-0 w-full max-w-sm md:max-w-xl">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full filter blur-3xl opacity-40"
                style={{ backgroundColor: "rgba(0, 212, 255, 0.2)" }}
              />

              {/* Brain visualization */}
              <div className="relative w-full  aspect-square rounded-full overflow-hidden">
                <Image
                  src="/brain.png"
                  alt="Neural network brain visualization"
                  fill
                  className="object-cover object-bottom"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Box - Mobile only (below brain) */}
        <div className="md:hidden mt-8 border-s-4 ps-4 border-white">
          <p className="font-medium mb-2 text-white text-sm">
            {t("featureLabelPart1")}{" "}
            <span style={{ color: "#00d4ff" }}>{t("featureLabelPart2")}</span>
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            {t("featureText")}
          </p>
        </div>
      </div>
    </section>
  );
}
