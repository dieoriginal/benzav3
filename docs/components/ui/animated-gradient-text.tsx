import React, { FC } from 'react';

interface AnimatedGradientTextProps {
  text: string;
}

const AnimatedGradientText: FC<AnimatedGradientTextProps> = ({ text }) => {
  return (
    <span className="inline-flex animate-text-gradient bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] text-4xl font-extrabold italic text-center text-transparent font-medium bg-clip-text">
      {text}
    </span>
  );
}

export default AnimatedGradientText;