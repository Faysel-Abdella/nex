import React from "react";

const PlanComparison = () => {
  const features = [
    { label: "Users included", values: ["1", "5", "15", "Custom/Unlimited"] },
    {
      label: "Ask Astrah (business data)",
      values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
    },
    {
      label: "Ask Astrah (general AI)",
      values: [
        "200 per month",
        "1,000 per month",
        "5,000 per month",
        "20,000 per month",
      ],
    },
    {
      label: "AI Lead Generator",
      values: [
        "100 per month",
        "500 per month",
        "2,000 per month",
        "5,000–10,000 per month",
      ],
    },
    { label: "Smart Close", values: ["No", "Yes", "Yes", "Yes"] },
    {
      label: "Priority support",
      values: ["No", "No", "Yes (24h SLA)", "Yes (24h SLA)"],
    },
    { label: "Onboarding session", values: ["-", "-", "1 hour", "Custom"] },
    { label: "Custom branding", values: ["No", "No", "No", "Yes"] },
  ];

  const plans = ["Starter", "Business", "Pro", "Enterprise"];
  return (
    <section className="section-container">
      <div className="section-content ">
        <div className="flex w-full justify-center">
          <p className="font-medium text-3xl md:text-[40px] text-center">
            Comparison Table
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="mt-12 min-w-full border-collapse text-left ">
            <thead className="bg-card border-y">
              <tr className="">
                <th className="py-4 px-6"></th>
                {plans.map((plan) => (
                  <th key={plan} className="py-4 px-6 font-medium text-sm">
                    {plan}
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
                  <td className="py-5.5 px-6 font-medium  text-sm">
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
