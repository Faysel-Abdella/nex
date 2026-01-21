import React from "react";
import { Button } from "../../components/ui/button";

const MigrationCTA = () => {
  return (
    <section className="section-container w-full font-sf-pro">
      <div className="max-w-2xl text-center items-center flex flex-col justify-center mx-auto ">
        <p className=" font-medium text-3xl md:text-[40px]">
          Go live in days, not weeks.
        </p>
        <p className="text-muted-foreground mt-6 max-w-xl ">
          Most standard migrations go live in ~72 hours.Complex environments are
          scoped separately.
        </p>
        <Button className="mt-8 font-gilroy h-11.5 px-7">View Migration</Button>
      </div>
    </section>
  );
};

export default MigrationCTA;
