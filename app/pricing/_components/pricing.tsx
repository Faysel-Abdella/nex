import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";
import PlanModal from "./plan-modal";
import { PricingPlan } from "@/types";

export const isEnterprisePlan = (id: string) => id == "enterprise";
const Pricing = () => {
  const t = useTranslations("pricingPage.plans");
  const tGeneral = useTranslations("pricingPage.plans.general");

  const pricingPlans: PricingPlan[] = [
    {
      id: "starter",
      name: "STARTER",
      price: 39,
      billingPeriod: "/month",
      tagline: "For Solo Operators And Small Service Teams.",
      team: "1 user included.",
      cta: "Start Free Trial",
      migration: {
        price: 199,
        type: "one-time",
        note: "Standard",
      },
      inclusionLabel: "Core:",
      modalInclusionLabel: "Includes",
      summarizedFeatures: [
        "CRM (contacts, companies, deals, tasks, calendar)",
        "Pipeline views + basic KPIs",
        "Roles & permissions (basic)",
      ],
      featureCategories: [
        {
          title: "Core:",
          features: [
            "CRM (contacts, companies, deals, tasks, calendar)",
            "Pipeline views + basic KPIs",
            "Roles & permissions (basic)",
          ],
        },
        {
          title: "Communication:",
          features: [
            "Unified Inbox (WhatsApp + Email)",
            "Arabic/English UI (RTL)",
          ],
        },
        {
          title: "Intelligence (Lite):",
          features: [
            "WhatsApp Intelligence (Lite)",
            "Deal Health (Lite)",
            "AI Inbox Zero (Lite)",
            "AI Lead Generator: 100 leads/month",
          ],
        },
        {
          title: "Ask Astrah:",
          features: [
            "Unlimited for your business data",
            "General knowledge queries: 200/month",
          ],
        },
      ],
    },
    {
      id: "business",
      name: "BUSINESS",
      price: 99,
      billingPeriod: "/month",
      tagline: "For solo operators and small service teams.",
      team: "Up to 5 users included",
      cta: "Start Free Trial",
      migration: {
        price: 0,
        type: "included",
        note: "~72 hours standard",
      },
      inclusionLabel: "Everything in Starter, Plus:",

      summarizedFeatures: [
        "WhatsApp Intelligence (Full)",
        "Automations(Basic)",
        "Make.com integration (Basic)",
        "Expanded multilingual support",
      ],
      featureCategories: [
        {
          title: "Intelligence (Full):",
          features: [
            "WhatsApp Intelligence (Full)",
            "Deal Health (Full)",
            "AI Inbox Zero (Full)",
            "AI Priority Queue",
            "AI Lead Generator: 500 leads/month",
          ],
        },
        {
          title: "Smart Close:",
          features: ["Offer + payment request", "Embedded e-sign (BoldSign)"],
        },
        {
          title: "Automations:",
          features: [
            "Rules + reminders + notifications",
            "Make.com integration (standard)",
          ],
        },
        {
          title: "Ask Astrah:",
          features: [
            "Unlimited for your business data",
            "General knowledge queries: 1,000/month",
          ],
        },
      ],
    },
    {
      id: "pro",
      name: "PRO",
      price: 199,
      billingPeriod: "/month",
      tagline: "For Established Teams.",
      team: "For established teams.",
      cta: "Start Free Trial",
      migration: {
        price: 0,
        type: "included",
        note: "~72 hours standard",
      },
      inclusionLabel: "Everything in Business, Plus:",
      summarizedFeatures: [
        "Management dashboards & KPIs ",
        "Advanced integrations",
        "Advanced migration support",
        "Advanced migration support",
      ],
      featureCategories: [
        {
          title: "Management & Control:",
          features: [
            "Role-based access control",
            "Manager visibility + permissions",
            "Management dashboards & KPIs",
          ],
        },
        {
          title: "Advanced Integrations:",
          features: ["Integrations (Make.com + Webhooks)"],
        },
        {
          title: "Support:",
          features: [
            "Priority support (24h response SLA)",
            "1-hour onboarding session",
            "Advanced migration support",
          ],
        },
        {
          title: "Ask Astrah:",
          features: [
            "Unlimited for your business data",
            "General knowledge queries: 5,000/month",
          ],
        },
        {
          title: "Lead Generator:",
          features: ["2,000 leads/month"],
        },
      ],
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      priceRange: { min: 599, max: "1,500" },
      price: 599,
      billingPeriod: "/month",
      tagline: "For Large Organizations And Holding Groups.",
      team: "organizations and holding groups.",
      cta: "Talk to Astrah",
      migration: {
        price: 0,
        type: "included",
        note: "~72 hours standard",
      },
      inclusionLabel: "Everything in Pro, Plus:",
      summarizedFeatures: [
        "Organization-wide controls",
        "Dedicated success manager",
        "Custom onboarding & workshops",
        "Advanced integrations support (Make.com + Webhooks)",
        "Custom branding options (domain/login/branding)",
      ],
      featureCategories: [
        {
          title: "",
          features: [
            "Organization-wide controls",
            "Dedicated success manager",
            "Custom onboarding & workshops",
            "Advanced integrations support (Make.com + Webhooks)",
            "Custom branding options (domain/login/branding)",
          ],
        },
        {
          title: "Ask Astrah:",
          features: [
            "Unlimited for your business data",
            "General knowledge queries: 20,000/month",
          ],
        },
        {
          title: "AI Lead Generator:",
          features: ["5,000-10,000 leads/month"],
        },
      ],
    },
  ];

  return (
    <section className="section-container gap-5">
      <div className=" max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4  gap-5">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "bg-card overflow-hidden relative shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] w-full border flex flex-col h-full p-6 justify-between rounded-2xl",
              plan.id === "enterprise" &&
                "border-primary shadow-[inset_0_0px_50px_rgba(255,255,255,0.15)]",
              plan.id === "starter" &&
                "bg-background shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)]",
            )}
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

              <button
                className={cn(
                  "bg-third-background border mt-5 border-white/10 w-full py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5",
                  isEnterprisePlan(plan.id) &&
                    "bg-primary text-black border-transparent max-md:mt-37 hover:bg-primary/90",
                )}
              >
                {plan.cta}
              </button>
              <div className="h-px w-full bg-border shrink-0 my-5"></div>

              <p className="text-muted-foreground w-full text-start text-sm font-light ">
                {plan.inclusionLabel}
              </p>

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
                  <p className="font-light  text-muted-foreground">Migration</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    {plan.migration.type === "included" ? (
                      <span className="text-xl font-medium text-white">
                        Included
                      </span>
                    ) : (
                      <div className="flex gap-1 items-baseline">
                        <span className="text-xl font-medium text-white">
                          ${plan.migration.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {plan.migration.type}
                        </span>
                      </div>
                    )}
                    <span className="text-muted-foreground text-sm">
                      ({plan.migration.note})
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
