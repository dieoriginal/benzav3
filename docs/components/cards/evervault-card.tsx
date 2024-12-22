import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Python1 } from "@/components/img/languages/python";
import { Javascript1 } from "@/components/img/languages/javascript";
import { Typescript1 } from "@/components/img/languages/typescript";
import { Html51 } from "@/components/img/languages/HTML5";

export function LanguagesRow() {   
  return (
    <div className="flex flex-row justify-center mr-[2cm] gap-2">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-[298px] h-[303px] mx-auto p-2 relative">
        <Icon className="absolute h-5 w-5 -top-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -top-2 -right-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -right-2 dark:text-white text-black" />
        <EvervaultCard text="Python"/>
        <div className="absolute inset-0 flex justify-center items-center">
          <Python1 className="w-4 h-4" /> {/* Decreased size */}
        </div>
      </div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-[298px] h-[303px] mx-auto p-2 relative">
        <Icon className="absolute h-5 w-5 -top-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -top-2 -right-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -right-2 dark:text-white text-black" />
        <EvervaultCard text="Javascript" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Javascript1 className="w-4 h-4" /> {/* Decreased size */}
        </div>
      </div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-[298px] h-[303px] mx-auto p-2 relative">
        <Icon className="absolute h-5 w-5 -top-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -top-2 -right-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -right-2 dark:text-white text-black" />
        <EvervaultCard text="Typescript" />
        <div className="absolute inset-0 flex justify-center items-center">
          <Typescript1 className="w-4 h-4" /> {/* Decreased size */}
        </div>
      </div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-[298px] h-[303px] mx-auto p-2 relative">
        <Icon className="absolute h-5 w-5 -top-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -left-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -top-2 -right-2 dark:text-white text-black" />
        <Icon className="absolute h-5 w-5 -bottom-2 -right-2 dark:text-white text-black" />
        <EvervaultCard text="HTML5" />
        <div className="absolute inset-0 flex justify-center items-center">
            <Html51 className="w-4 h-4" /> {/* Decreased size */}
        </div>
      </div>
    </div>
  );
}
