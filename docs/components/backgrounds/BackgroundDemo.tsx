"use client";

import React, { forwardRef } from "react";

export const DotBackgroundDemo = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0"></div>
    </div>
  );
});
