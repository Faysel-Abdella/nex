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
      name: "STARTER",
      price: 39,
      billingPeriod: "/month",
      tagline: "For Solo Operators And Small Service Teams.",
      team: "Team: 1 user included",
      cta: "Start Free Trial",
      migration: {
        price: 199,
        type: "one-time",
        note: "Standard",
      },
      inclusionLabel: "includes:",
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
      team: "For Growing Teams.",
      cta: "Start Free Trial",
      migration: {
        price: 0,
        type: "included",
        note: "~72 hours standard",
      },
      inclusionLabel: "Everything in Starter, Plus:",
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
      team: "Team scale: up to 15 users included (Business includes 5)",
      cta: "Start Free Trial",
      migration: {
        price: 0,
        type: "included",
        note: "Advanced",
      },
      inclusionLabel: "Everything in Business, Plus:",
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
      cta: "Talk to Astrah",
      migration: null,
      inclusionLabel: "Everything in Pro, Plus:",
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
      <div className="section-content grid md:grid-cols-2  gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "bg-card overflow-hidden relative shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] w-full border flex flex-col h-full p-6 justify-between rounded-3xl",
              plan.id === "enterprise" &&
                "border-primary shadow-[inset_0_0px_50px_rgba(255,255,255,0.15)]",
            )}
          >
            <div className="flex flex-col h-full">
              <p className="text-muted-foreground uppercase  font-light tracking-widest mb-4">
                {plan.name}
              </p>

              <div className="">
                <span className="font-medium text-3xl">
                  {plan.priceRange
                    ? `$${plan.priceRange.min} - $${plan.priceRange.max}`
                    : `$${plan.price}`}
                </span>
                <span className="text-muted-foreground text-sm">
                  {plan.billingPeriod}
                </span>
              </div>

              <p className="text-muted-foreground font-light mt-5 ">
                {plan.tagline}
              </p>
              {plan.team && (
                <p className="text-muted-foreground font-semibold mt-5">
                  {plan.team}
                </p>
              )}

              <div className="h-px w-full bg-border shrink-0 my-5"></div>

              <p className="text-muted-foreground  font-light ">
                {plan.inclusionLabel}
              </p>

              <div className="flex flex-col gap-5 mt-5">
                {plan.featureCategories.map((category, idx) => (
                  <div key={idx}>
                    {category.title && (
                      <p className="text-muted-foreground text-sm font-light ">
                        {category.title}
                      </p>
                    )}
                    <ul className="flex flex-col gap-3.5 mt-3">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 ">
                          <div className="bg-primary/25 size-5 rounded-full shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="size-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground ">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {plan.id !== "enterprise" && (
              <>
                <div className="h-px shrink-0 w-full bg-white/10 mt-5" />
                <div className="mt-5 text-muted-foreground">
                  <p className=" font-semibold">WhatsApp</p>
                  <p className=" font-light">
                    includes allowance; usage beyond allowance is metered.
                  </p>
                </div>
              </>
            )}

            <div className="h-fit flex-col flex mt-6 z-10">
              <button
                className={cn(
                  "bg-third-background border border-white/10 w-full py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5",
                  plan.id === "enterprise" &&
                    "bg-primary text-black border-transparent max-md:mt-37 hover:bg-primary/90",
                )}
              >
                {plan.cta}
              </button>

              {plan.migration && (
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
              )}
            </div>

            {plan.id === "enterprise" && (
              <div
                className={
                  "absolute max-md:opacity-40 -bottom-1/3 w-1/2 left-1/4 h-60 bg-primary mx-auto blur-[100px] pointer-events-none"
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
