import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const MigrationHero = () => {
  const tHeader = useTranslations("header");
  return (
    <section className="section-container flex max-md:gap-10 max-md:flex-col  ">
      <div className="    max-w-137.5  flex flex-col  max-md:items-center max-md:text-center justify-center  mx-auto ">
        <div className="flex text-muted-foreground ">
          <Dot size={26} /> <span>MIGRATION</span>
        </div>
        <p className=" font-medium text-2xl md:text-4xl lg:text-[53px] mt-5">
          Go live in days, not weeks.
        </p>
        <p className="text-muted-foreground mt-5 max-w-xl ">
          Most standard migrations go live in ~72 hours. Complex environments
          are scoped separately.
        </p>
        <div className="flex mt-10 gap-5 ">
          <Button className=" font-gilroy h-13.5 sm:px-7">
            {tHeader.rich("talkToAstrah", {
              bold: (chunks) => <span className="font-bold">{chunks}</span>,
            })}
          </Button>{" "}
          <Button
            variant="outline"
            className=" border-white sm:px-7 font-sf-pro text-sm  text-white/75  h-13.5 hover:border-primary rounded-md"
          >
            See what&apos;s included
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 shrink-0">
        <div className="relative w-full ">
          <img src={"/feature/feature-1.png"} />
        </div>
      </div>
    </section>
  );
};

export default MigrationHero;
