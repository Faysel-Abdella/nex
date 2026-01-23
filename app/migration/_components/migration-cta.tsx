import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const MigrationCTA = () => {
  const tHeader = useTranslations("header");

  return (
    <section className="w-full  font-sf-pro">
      <div className="max-w-5xl  w-full mx-auto pt-px bg-linear-to-r from-transparent via-border to-transparent">
        <div className="bg-background section-container relative overflow-hidden  pt-20 text-center items-center flex flex-col justify-center  ">
          <p className=" font-medium text-3xl md:text-[40px]">
            Ready to migrate without chaos?
          </p>
          <p className="text-muted-foreground mt-6 max-w-lg ">
            If you want a controlled, fast migration into a real operating
            system, talk to Astrah.
          </p>
          <div className="flex mt-10 gap-5 ">
            <Button className=" font-gilroy h-13.5 px-7">
              {tHeader.rich("talkToAstrah", {
                bold: (chunks) => <span className="font-bold">{chunks}</span>,
              })}
            </Button>{" "}
            <Button
              variant="outline"
              className=" border-white px-7 font-sf-pro text-sm  text-white/75  h-13.5 hover:border-primary rounded-md"
            >
              Back to Home
            </Button>
          </div>
          <div className="  w-1/3 -top-20 blur-[100px]  rounded-full absolute h-40 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

export default MigrationCTA;
