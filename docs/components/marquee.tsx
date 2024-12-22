
import MarqueeEffect from "@/components/ui/marquee-effect";
import React, { FC } from 'react';

interface MarqueeEffectExampleProps {}

const MarqueeEffectExample: FC<MarqueeEffectExampleProps> = () => {
  return <MarqueeEffect baseVelocity={-3}>FRAMEWORKS</MarqueeEffect>;
}

export default MarqueeEffectExample;