import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";
export const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    price: 39,
    billingPeriod: "month",
    tagline: "For Freelancers And Small Service Teams.",
    cta: "Start Free Trial",

    migration: {
      price: 199,
      type: "one-time",
      note: "Standard",
    },
    inclusionLabel: "Includes:",
    features: [
      "Core CRM (contacts, companies, deals, tasks, calendar)",
      "WhatsApp Intelligence (Lite)",
      "AI Deal Intelligence (Lite)",
      "AI Inbox Zero (Lite)",
      "AI Lead Generator: 100 leads / month",
      "Internal AI Intelligence: Included",
      "External AI usage: 200 tokens / month",
      "Multilingual UI: English + Arabic (RTL)",
      "Orb Intelligence: Standard",
    ],
  },
  {
    id: "business",
    name: "Business",
    price: 99,
    billingPeriod: "month",
    tagline: "For Growing Teams (3-15 Users).",
    cta: "Start Free Trial",
    migration: {
      price: 0,
      type: "included",
      note: "Standard",
    },
    inclusionLabel: "Everything in Starter, plus:",
    features: [
      "Everything in Starter",
      "WhatsApp Intelligence (Full)",
      "AI Deal Intelligence (Full)",
      "AI Inbox Zero (Full)",
      "AI Priority Queue",
      "AI Data Enhancer",
      "Campaigns (Email + WhatsApp)",
      "Automations (Basic)",
      "Make.com integration (Basic)",
      "External AI usage: 1,000 tokens / month",
      "Expanded multilingual support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 199,
    billingPeriod: "month",
    tagline: "For Established Teams (15-50 Users).",
    cta: "Start Free Trial",
    migration: {
      price: 0,
      type: "included",
      note: "Advanced",
    },
    inclusionLabel: "Everything in Business, plus:",
    features: [
      "Everything in Business",
      "Advanced automations",
      "AI Meeting Notes",
      "AI Action Planner",
      "AI Campaign Optimizer",
      "Advanced analytics & dashboards",
      "AI Lead Generator: 2,000 leads / month",
      "External AI usage: 5,000 tokens / month",
      "Advanced permissions & audit trail",
      "Orb Intelligence: Enhanced",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceRange: {
      min: 599,
      max: 1500,
    },
    billingPeriod: "month",
    tagline: "For Large Organizations And Holding Groups.",
    cta: "Talk to Astrah",

    migration: null,
    inclusionLabel: "Everything in Pro, plus:",
    features: [
      "Everything in Pro",
      "Custom workflows & automations",
      "Organization-wide logic",
      "Dedicated success management",
      "Custom branding (domain, login)",
      "Private cloud deployment (optional)",
      "AI Lead Generator: 5,000–10,000 leads / month",
      "External AI usage: 20,000 tokens / month",
    ],
  },
];

const Pricing = () => {
  return (
    <section className=" section-container gap-5">
      <div className="section-content grid md:grid-cols-2 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "bg-card overflow-hidden relative shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] w-full border flex flex-col h-full p-8 justify-center  rounded-3xl",
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
            <div className=" h-fit  grow  flex-col   flex mt-6 ">
              <button
                className={cn(
                  "  bg-third-background border border-white/10 w-full py-3 rounded-lg text-sm ",
                  plan.id === "enterprise" &&
                    "bg-primary text-black border-transparent hover:bg-primary/90 mt-10",
                )}
              >
                {plan.cta}
              </button>
              {plan.migration && (
                <div className="mt-6">
                  <p className=" font-light">Migration</p>
                  <div className="flex items-end gap-1 mt-3">
                    {plan.migration.type === "included" ? (
                      <span className="text-3xl font-medium">Included</span>
                    ) : (
                      <div className="flex gap-1 items-end">
                        <span className="text-3xl font-medium">
                          ${plan.migration.price}
                        </span>
                        <span className="text-sm text-muted-foreground pb-0.5">
                          one-time
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
