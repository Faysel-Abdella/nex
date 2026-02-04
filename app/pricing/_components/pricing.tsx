import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import PlanModal from "./plan-modal";
import { PricingPlan } from "@/types";
import GlowCard from "@/components/glow-card";
import Link from "next/link";

export const isEnterprisePlan = (id: string) => id == "enterprise";

const Pricing = () => {
  const t = useTranslations("pricingPage.plans");

  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: t("starter.name"),
      price: 39,
      billingPeriod: t("starter.billingPeriod"),
      tagline: t("starter.tagline"),
      team: t("starter.team"),
      cta: t("starter.cta"),
      migration: {
        price: 199,
        type: "one-time",
        note: t("starter.migrationNote"),
      },
      // inclusionLabel: t("starter.inclusionLabel"),
      modalInclusionLabel: t("starter.modalInclusionLabel"),
      summarizedFeatures: [
        t("starter.summarizedFeatures.0"),
        t("starter.summarizedFeatures.1"),
        t("starter.summarizedFeatures.2"),
        t("starter.summarizedFeatures.3"),
        t("starter.summarizedFeatures.4"),
        t("starter.summarizedFeatures.5"),
      ],
      featureCategories: [
        {
          title: t("starter.featureCategories.0.title"),
          features: [
            t("starter.featureCategories.0.features.0"),
            t("starter.featureCategories.0.features.1"),
            t("starter.featureCategories.0.features.2"),
          ],
        },
        {
          title: t("starter.featureCategories.1.title"),
          features: [
            t("starter.featureCategories.1.features.0"),
            t("starter.featureCategories.1.features.1"),
          ],
        },
        {
          title: t("starter.featureCategories.2.title"),
          features: [
            t("starter.featureCategories.2.features.0"),
            t("starter.featureCategories.2.features.1"),
            t("starter.featureCategories.2.features.2"),
            t("starter.featureCategories.2.features.3"),
          ],
        },
        {
          title: t("starter.featureCategories.3.title"),
          features: [
            t("starter.featureCategories.3.features.0"),
            t("starter.featureCategories.3.features.1"),
          ],
        },
      ],
    },
    {
      id: "business",

      name: t("business.name"),
      price: 99,
      billingPeriod: t("business.billingPeriod"),
      tagline: t("business.tagline"),
      team: t("business.team"),
      cta: t("business.cta"),
      migration: {
        price: 0,
        type: "included",
        note: t("business.migrationNote"),
      },
      inclusionLabel: t("business.inclusionLabel"),
      summarizedFeatures: [
        t("business.summarizedFeatures.0"),
        t("business.summarizedFeatures.1"),
        t("business.summarizedFeatures.2"),
        t("business.summarizedFeatures.3"),
        t("business.summarizedFeatures.4"),
        t("business.summarizedFeatures.5"),
      ],
      featureCategories: [
        {
          title: t("business.featureCategories.0.title"),
          features: [
            t("business.featureCategories.0.features.0"),
            t("business.featureCategories.0.features.1"),
            t("business.featureCategories.0.features.2"),
            t("business.featureCategories.0.features.3"),
            t("business.featureCategories.0.features.4"),
          ],
        },
        {
          title: t("business.featureCategories.1.title"),
          features: [
            t("business.featureCategories.1.features.0"),
            t("business.featureCategories.1.features.1"),
          ],
        },
        {
          title: t("business.featureCategories.2.title"),
          features: [
            t("business.featureCategories.2.features.0"),
            t("business.featureCategories.2.features.1"),
          ],
        },
        {
          title: t("business.featureCategories.3.title"),
          features: [
            t("business.featureCategories.3.features.0"),
            t("business.featureCategories.3.features.1"),
          ],
        },
      ],
    },
    {
      id: "pro",
      name: t("pro.name"),
      price: 199,
      billingPeriod: t("pro.billingPeriod"),
      tagline: t("pro.tagline"),
      team: t("pro.team"),
      cta: t("pro.cta"),
      migration: {
        price: 0,
        type: "included",
        note: t("pro.migrationNote"),
      },
      inclusionLabel: t("pro.inclusionLabel"),
      summarizedFeatures: [
        t("pro.summarizedFeatures.0"),
        t("pro.summarizedFeatures.1"),
        t("pro.summarizedFeatures.2"),
        t("pro.summarizedFeatures.3"),
        t("pro.summarizedFeatures.4"),
      ],
      featureCategories: [
        {
          title: t("pro.featureCategories.0.title"),
          features: [
            t("pro.featureCategories.0.features.0"),
            t("pro.featureCategories.0.features.1"),
            t("pro.featureCategories.0.features.2"),
          ],
        },
        {
          title: t("pro.featureCategories.1.title"),
          features: [t("pro.featureCategories.1.features.0")],
        },
        {
          title: t("pro.featureCategories.2.title"),
          features: [
            t("pro.featureCategories.2.features.0"),
            t("pro.featureCategories.2.features.1"),
            t("pro.featureCategories.2.features.2"),
          ],
        },
        {
          title: t("pro.featureCategories.3.title"),
          features: [
            t("pro.featureCategories.3.features.0"),
            t("pro.featureCategories.3.features.1"),
          ],
        },
        {
          title: t("pro.featureCategories.4.title"),
          features: [t("pro.featureCategories.4.features.0")],
        },
      ],
    },
    {
      id: "enterprise",
      name: t("enterprise.name"),
      priceRange: { min: 599, max: "1,500" },
      price: 599,
      billingPeriod: t("enterprise.billingPeriod"),
      tagline: t("enterprise.tagline"),
      team: t("enterprise.team"),
      cta: t("enterprise.cta"),
      migration: {
        price: 0,
        type: "included",
        note: t("enterprise.migrationNote"),
      },
      inclusionLabel: t("enterprise.inclusionLabel"),
      summarizedFeatures: [
        t("enterprise.summarizedFeatures.0"),
        t("enterprise.summarizedFeatures.1"),
        t("enterprise.summarizedFeatures.2"),
        t("enterprise.summarizedFeatures.3"),
        t("enterprise.summarizedFeatures.4"),
        t("enterprise.summarizedFeatures.5"),
        t("enterprise.summarizedFeatures.6"),
        t("enterprise.summarizedFeatures.7"),
      ],
      featureCategories: [
        {
          title: "",
          features: [
            t("enterprise.featureCategories.0.features.0"),
            t("enterprise.featureCategories.0.features.1"),
            t("enterprise.featureCategories.0.features.2"),
            t("enterprise.featureCategories.0.features.3"),
            t("enterprise.featureCategories.0.features.4"),
          ],
        },
        {
          title: t("enterprise.featureCategories.1.title"),
          features: [
            t("enterprise.featureCategories.1.features.0"),
            t("enterprise.featureCategories.1.features.1"),
          ],
        },
        {
          title: t("enterprise.featureCategories.2.title"),
          features: [t("enterprise.featureCategories.2.features.0")],
        },
      ],
    },
  ];

  return (
    <section className="section-container gap-5">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4  gap-5">
        {pricingPlans.map((plan) => (
          <GlowCard
            key={plan.id}
            className={cn(
              " relative shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)]  flex flex-col  p-6 justify-between rounded-2xl",
              plan.id === "enterprise" &&
                "border-primary shadow-[inset_0_0px_50px_rgba(255,255,255,0.15)]",
              plan.id === "starter" &&
                "bg-background shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)]",
            )}
            hasGlow={plan.id !== "starter"}
            outerClassName={cn(
              "overflow-hidden w-full h-full",
              plan.id == "starter" && "via-white/10 rounded-2xl",
              plan.id == "enterprise" && "bg-primary/80 rounded-2xl",
            )}
            glowDirection={plan.id == "pro" ? "bottom" : undefined}
          >
            <div className="flex flex-col items-center text-center h-full">
              <p className="text-muted-foreground uppercase  text-sm font-light tracking-widest mb-4">
                {plan.name}
              </p>

              <div className=" flex flex-wrap items-end justify-center">
                <div className="font-medium text-3xl">
                  {plan.priceRange
                    ? `$${plan.priceRange.min} - $${plan.priceRange.max}`
                    : `$${plan.price}`}
                </div>

                <div className="text-muted-foreground text-lg">
                  {plan.billingPeriod}
                </div>
              </div>

              <p className="text-muted-foreground font-light mt-5 ">
                {plan.tagline}
              </p>

              <Link href={"/contact"} className={cn("mt-5 w-full")}>
                <button
                  className={cn(
                    "bg-third-background border  border-white/10 w-full py-3 rounded-lg text-sm transition-colors hover:bg-white/5",
                    isEnterprisePlan(plan.id) &&
                      "bg-primary text-black border-transparent  hover:bg-primary/90",
                  )}
                >
                  {plan.cta}
                </button>
              </Link>
              <div className="h-px w-full bg-border shrink-0 my-5"></div>
              {plan.inclusionLabel && (
                <p className="text-muted-foreground w-full text-start text-sm font-light ">
                  {plan.inclusionLabel}
                </p>
              )}

              <ul className="flex flex-col gap-3.5 mt-4 items-start w-full">
                {plan.summarizedFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-start gap-3 ">
                    <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center mt-0.5">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <PlanModal pricingPlan={plan} />

            {!isEnterprisePlan(plan.id) && (
              <div className="h-fit flex-col flex mt-5 z-10">
                <div className="h-px shrink-0 w-full bg-white/10 " />
                <div className="mt-6  ">
                  <p className="font-light  text-muted-foreground">
                    {t("labels.migration")}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    {plan.migration.type === "included" ? (
                      <span className="text-xl font-medium text-white">
                        {t("labels.included")}
                      </span>
                    ) : (
                      <div className="flex gap-1 items-baseline">
                        <span className="text-xl font-medium text-white">
                          ${plan.migration.price}
                        </span>
                      </div>
                    )}
                    <span className="text-muted-foreground text-sm">
                      {plan.migration.note}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {isEnterprisePlan(plan.id) && (
              <div
                className={
                  "absolute opacity-40 -bottom-1/3 w-1/2 left-1/4 h-60 bg-primary mx-auto blur-[100px] pointer-events-none"
                }
              />
            )}
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
