
import MarqueeEffect from "@/components/ui/marquee-effect";
import React, { FC } from 'react';

interface MarqueeEffectExampleProps {}

const MarqueeEffectLanguages: FC<MarqueeEffectExampleProps> = () => {
  return <MarqueeEffect baseVelocity={-3}>PROGRAMMING LANGUAGES</MarqueeEffect>;
}

export default MarqueeEffectLanguages;