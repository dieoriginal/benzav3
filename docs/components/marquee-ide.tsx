
import MarqueeEffect from "@/components/ui/marquee-effect";
import React, { FC } from 'react';

interface MarqueeEffectExampleProps {}

const MarqueeEffectIDE: FC<MarqueeEffectExampleProps> = () => {
  return <MarqueeEffect baseVelocity={-3}>Integrated Development Environments</MarqueeEffect>;
}

export default MarqueeEffectIDE;