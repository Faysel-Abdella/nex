import { Plus, SendHorizonal } from "lucide-react";
import React from "react";

const AskAstrah = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className=" w-full  h-fit   ">
      <div
        className={
          " w-full h-full rounded-[26px] bg-linear-to-l shadow-xl from-primary/35  via-white/10 to-white/30 px-px pb-px   group-hover:-translate-y-1"
        }
      >
        <div className="w-full relative h-75 flex items-end rounded-[25px] shadow-[inset_0_0px_50px_rgba(255,255,255,0.1)]  bg-card p-5.5 ">
          <div className="absolute h-1/3 -top-1 left-0 w-full scale-x-105 bg-linear-to-b from-background via-background to-transparent" />

          <div className=" shadow-[inset_0_0px_50px_rgba(255,255,255,0.05)] bg-white/5 h-30 p-3 w-full  flex border rounded-2xl border-white/12 ">
            <div className="flex gap-3 w-full">
              <Plus size={26} />
              <p className="text-lg">{placeholder}</p>
            </div>
            <div className="w-full flex items-end justify-end">
              <button className=" bg-cyan-600 px-4.5 py-2 rounded-[8px] shadow-[inset_0_0px_20px_rgba(255,255,255,0.3)]   ">
                <SendHorizonal
                  size={22}
                  className="text-white rtl:rotate-180"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAstrah;
