import { cn } from "@/lib/utils";
import React from "react";
import { useTranslations } from "next-intl"; // Or your preferred i18n library

const PlanComparison = () => {
  const t = useTranslations("pricingPage.planComparison");

  const features = [
    {
      label: t("features.users_included"),
      values: ["1", "5", "15", t("values.custom_unlimited")],
    },
    {
      label: t("features.ask_astrah_business"),
      values: Array(4).fill(t("values.unlimited")),
    },
    {
      label: t("features.ask_astrah_general"),
      values: [
        `200 ${t("values.per_month")}`,
        `1,000 ${t("values.per_month")}`,
        `5,000 ${t("values.per_month")}`,
        `20,000 ${t("values.per_month")}`,
      ],
    },
    {
      label: t("features.ai_lead_generator"),
      values: [
        `100 ${t("values.per_month")}`,
        `500 ${t("values.per_month")}`,
        `2,000 ${t("values.per_month")}`,
        `5,000–10,000 ${t("values.per_month")}`,
      ],
    },
    {
      label: t("features.smart_close"),
      values: [
        t("values.no"),
        t("values.yes"),
        t("values.yes"),
        t("values.yes"),
      ],
    },
    {
      label: t("features.priority_support"),
      values: [
        t("values.no"),
        t("values.no"),
        `${t("values.yes")} (${t("values.sla_24h")})`,
        `${t("values.yes")} (${t("values.sla_24h")})`,
      ],
    },
    {
      label: t("features.onboarding"),
      values: ["-", "-", `1 ${t("values.hour")}`, t("values.custom")],
    },
    {
      label: t("features.custom_branding"),
      values: [t("values.no"), t("values.no"), t("values.no"), t("values.yes")],
    },
  ];

  const plans = [
    t("plans.starter"),
    t("plans.business"),
    t("plans.pro"),
    t("plans.enterprise"),
  ];

  return (
    <section className="section-container">
      <div className="section-content">
        <div className="flex w-full justify-center">
          <p className="font-semibold md:font-medium text-3xl md:text-[40px] text-center">
            {t("comparison_title")}
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="mt-12 min-w-full border-collapse text-start">
            <thead className="bg-card border-y">
              <tr>
                <th className="py-4 px-6"></th>
                {plans.map((plan) => (
                  <th key={plan} className="py-4 px-6 font-medium">
                    <span
                      className={
                        plan === t("plans.enterprise")
                          ? "bg-linear-to-bl text-xl from-white via-primary to-white bg-clip-text text-transparent"
                          : ""
                      }
                    >
                      {plan}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-card/50"
                >
                  <td className="py-5.5 px-6 font-medium text-sm">
                    {feature.label}
                  </td>
                  {feature.values.map((val, i) => (
                    <td
                      key={i}
                      className="py-5.5 px-6 text-muted-foreground text-sm"
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PlanComparison;
