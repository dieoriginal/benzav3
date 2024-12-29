import React, { forwardRef } from "react";
import { FlipWords } from "../ui/flip-words";

export const FlipWords2 = forwardRef((props, ref) => {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div ref={ref} className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
});