"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { PricingPlan } from "@/types";
import { Check, InfoIcon, X } from "lucide-react";
import React from "react";
import { isEnterprisePlan } from "./pricing";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface PlanModalProps {
  pricingPlan: PricingPlan;
}
const PlanModal = ({
  pricingPlan: {
    billingPeriod,
    cta,
    featureCategories,
    id,
    inclusionLabel,
    modalInclusionLabel,
    migration,
    name,
    price,
    tagline,
    priceRange,
    team,
  },
}: PlanModalProps) => {
  const t = useTranslations("pricingPage.modal");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen =
    !!searchParams.get("priceModal") && searchParams.get("id") === id;

  const handleClose = () => {
    router.back();
  };

  const onOpenChange = (open: boolean, openingId?: string) => {
    if (open) {
      router.push(`${pathname}?priceModal=true&id=${id}`, { scroll: false });
    } else {
      handleClose();
    }
  };
  return (
    <>
      <button
        className="text-sm font-light mx-auto text-muted-foreground mt-6"
        onClick={() => onOpenChange(true, id)}
      >
        {t("modalOpenButton")}
      </button>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className=" max-w-278 w-full  overflow-y-auto max-h-dvh min-h-9/10 p-0 rounded-none xl:rounded-[20px] scrollbar1"
        >
          <DialogHeader className="hidden">
            <DialogTitle className="sr-only">Pricing plan modal</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-5 w-full  overflow-hidden p-5">
            <div className="md:w-2/5 relative  flex flex-col justify-between">
              <button
                className="md:hidden absolute top-0 end-0"
                onClick={handleClose}
              >
                <X size={24} />
              </button>

              <div>
                <div className="flex flex-col  ">
                  <p className="text-muted-foreground uppercase   font-light tracking-widest mb-4">
                    {name}
                  </p>
                  <div className=" flex flex-wrap items-end ">
                    <div className="font-medium text-3xl">
                      {priceRange
                        ? `$${priceRange.min} - $${priceRange.max}`
                        : `$${price}`}
                    </div>

                    <div className="text-muted-foreground text-lg">
                      {billingPeriod}
                    </div>
                  </div>

                  <p className="text-muted-foreground font-light mt-5 ">
                    {tagline}
                  </p>
                </div>
                <div className="h-px shrink-0 w-full bg-white/10 mt-5" />
                <div className="mt-5 text-muted-foreground flex gap-5">
                  <div className="min-w-5">
                    <img
                      src={"/icons/UsersThree.svg"}
                      className="size-5 opacity-80 shrink-0"
                    />
                  </div>
                  <div>
                    <p className=" font-semibold">{t("team")}</p>
                    <p className=" font-light mt-2">{team}</p>
                  </div>
                </div>
                <div className="mt-5 text-muted-foreground flex gap-5">
                  <div className="min-w-5">
                    <img
                      src={"/icons/WhatsappLogo.svg"}
                      className="size-5 shrink-0 "
                    />
                  </div>
                  <div>
                    <p className=" font-semibold">WhatsApp</p>
                    <p className=" font-light mt-2">{t("whatsappDesc")}</p>
                  </div>
                </div>
              </div>

              <div className="max-md:hidden">
                {isEnterprisePlan(id) ? (
                  <div className="flex gap-3">
                    <InfoIcon className="size-5 text-muted-foreground shrink-0" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("creditsAndResults")}
                    </p>
                  </div>
                ) : (
                  <div className="h-fit flex-col flex mt-5 z-10">
                    <p className="font-light  text-muted-foreground">
                      {t("migration")}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      {migration.type === "included" ? (
                        <span className="text-xl font-medium text-white">
                          {t("included")}
                        </span>
                      ) : (
                        <div className="flex gap-1 items-baseline">
                          <span className="text-xl font-medium text-white">
                            ${migration.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {migration.type}
                          </span>
                        </div>
                      )}
                      <span className="text-muted-foreground text-sm">
                        ({migration.note})
                      </span>
                    </div>
                  </div>
                )}

                <div className="h-px w-full bg-border shrink-0 my-6"></div>

                <button
                  className={cn(
                    "bg-third-background border  border-white/10 w-full py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5",
                    id === "enterprise" &&
                      "bg-primary text-black border-transparent max-md:mt-37 hover:bg-primary/90",
                  )}
                >
                  {cta}
                </button>
              </div>

              {isEnterprisePlan(id) && (
                <>
                  <div
                    className={
                      "absolute opacity-30 max-md:hidden -bottom-1/3 w-1/2 left-1/4 h-60 bg-primary/80 mx-auto blur-[100px] pointer-events-none"
                    }
                  />
                  <div className="w-1/2 max-md:hidden left-1/4 h-px -bottom-5 absolute bg-linear-to-r from-transparent via-white/50 to-transparent z-0"></div>{" "}
                </>
              )}
            </div>
            <div className=" md:w-3/5 bg-white/3 rounded-2xl p-4 md:p-6 lg:p-8 relative">
              <div className="flex flex-col gap-5 ">
                <p className="  md:text-xl font-semibold  leading-relaxed  ">
                  {modalInclusionLabel ? modalInclusionLabel : inclusionLabel}
                </p>
                {featureCategories.map((category, idx) => (
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
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                className="absolute top-5 end-5 max-md:hidden"
                onClick={handleClose}
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative md:hidden">
              <div>
                {isEnterprisePlan(id) ? (
                  <div className="flex gap-3">
                    <InfoIcon className="size-5 text-muted-foreground shrink-0" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t("creditsAndResults")}
                    </p>
                  </div>
                ) : (
                  <div className="h-fit flex-col flex mt-5 z-10">
                    <p className="font-light  text-muted-foreground">
                      {t("migration")}
                    </p>
                    <div className="flex items-baseline gap-2 mt-1">
                      {migration.type === "included" ? (
                        <span className="text-xl font-medium text-white">
                          {t("included")}
                        </span>
                      ) : (
                        <div className="flex gap-1 items-baseline">
                          <span className="text-xl font-medium text-white">
                            ${migration.price}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {migration.type}
                          </span>
                        </div>
                      )}
                      <span className="text-muted-foreground text-sm">
                        ({migration.note})
                      </span>
                    </div>
                  </div>
                )}

                <div className="h-px w-full bg-border shrink-0 my-6"></div>

                <button
                  className={cn(
                    "bg-third-background border  border-white/10 w-full py-3 rounded-lg text-sm font-medium transition-colors hover:bg-white/5",
                    id === "enterprise" &&
                      "bg-primary text-black border-transparent  hover:bg-primary/90",
                  )}
                >
                  {cta}
                </button>
              </div>

              {isEnterprisePlan(id) && (
                <>
                  <div
                    className={
                      "absolute opacity-40 -bottom-1/3 w-1/2 left-1/4 h-60 bg-primary/80 mx-auto blur-[100px] pointer-events-none"
                    }
                  />
                  <div className="w-1/2 left-1/4 h-px -bottom-5 absolute bg-linear-to-r from-transparent via-white/50 to-transparent z-0"></div>{" "}
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlanModal;
