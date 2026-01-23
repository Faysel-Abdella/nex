import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const t = useTranslations("pricingPage.plans");
  const tGeneral = useTranslations("pricingPage.plans.general");

  const pricingPlans = [
    {
      id: "starter",
      name: t("starter.name"),
      price: 39,
      billingPeriod: tGeneral("month"),
      tagline: t("starter.tagline"),
      cta: t("starter.cta"),
      migration: {
        price: 199,
        type: "one-time",
        note: t("starter.migrationNote"),
      },
      inclusionLabel: t("starter.inclusionLabel"),
      features: t.raw("starter.features") as string[],
    },
    {
      id: "business",
      name: t("business.name"),
      price: 99,
      billingPeriod: tGeneral("month"),
      tagline: t("business.tagline"),
      cta: t("business.cta"),
      migration: {
        price: 0,
        type: "included",
        note: t("business.migrationNote"),
      },
      inclusionLabel: t("business.inclusionLabel"),
      features: t.raw("business.features") as string[],
    },
    {
      id: "pro",
      name: t("pro.name"),
      price: 199,
      billingPeriod: tGeneral("month"),
      tagline: t("pro.tagline"),
      cta: t("pro.cta"),
      migration: {
        price: 0,
        type: "included",
        note: t("pro.migrationNote"),
      },
      inclusionLabel: t("pro.inclusionLabel"),
      features: t.raw("pro.features") as string[],
    },
    {
      id: "enterprise",
      name: t("enterprise.name"),
      priceRange: {
        min: 599,
        max: 1500,
      },
      billingPeriod: tGeneral("month"),
      tagline: t("enterprise.tagline"),
      cta: t("enterprise.cta"),
      migration: null,
      inclusionLabel: t("enterprise.inclusionLabel"),
      features: t.raw("enterprise.features") as string[],
    },
  ];

  return (
    <section className=" section-container gap-5">
      <div className="section-content grid md:grid-cols-2 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "bg-card overflow-hidden relative shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] w-full border flex flex-col h-full p-8 justify-center rounded-3xl",
              plan.id === "enterprise" &&
                "border-primary shadow-[inset_0_0px_50px_rgba(255,255,255,0.15)]",
            )}
          >
            <div className="flex flex-col h-full">
              <p className="text-muted-foreground">{plan.name}</p>
              <div>
                <span className="font-medium text-[40px]">
                  {plan.priceRange
                    ? ` $${plan.priceRange.min} - $${plan.priceRange.max}`
                    : `$${plan.price}`}
                </span>
                /
                <span className="text-muted-foreground text-lg">
                  {plan.billingPeriod}
                </span>
              </div>
              <p className="text-muted-foreground mt-5">{plan.tagline}</p>
              <div className="h-px w-full bg-border shrink-0 mt-5"></div>
              <p className="text-muted-foreground mt-5">
                {plan.inclusionLabel}
              </p>
              <ul className="flex flex-col gap-3.5 mt-5">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground ">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" h-fit grow flex-col flex mt-6 ">
              <button
                className={cn(
                  "bg-third-background border border-white/10 w-full py-3 rounded-lg text-sm",
                  plan.id === "enterprise" &&
                    "bg-primary text-black border-transparent hover:bg-primary/90 mt-10",
                )}
              >
                {plan.cta}
              </button>
              {plan.migration && (
                <div className="mt-6">
                  <p className=" font-light">{tGeneral("migrationLabel")}</p>
                  <div className="flex items-end gap-1 mt-3">
                    {plan.migration.type === "included" ? (
                      <span className="text-3xl font-medium">
                        {tGeneral("included")}
                      </span>
                    ) : (
                      <div className="flex gap-1 items-end">
                        <span className="text-3xl font-medium">
                          ${plan.migration.price}
                        </span>
                        <span className="text-sm text-muted-foreground pb-0.5">
                          {tGeneral("oneTime")}
                        </span>
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm pb-0.5">
                      ({plan.migration.note})
                    </p>
                  </div>
                </div>
              )}
            </div>

            {plan.id === "enterprise" && (
              <div className="absolute -bottom-1/3 w-1/2 left-1/4 h-60 bg-primary mx-auto blur-[100px]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
