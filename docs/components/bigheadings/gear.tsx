import { GradientHeading } from "@/components/ui/gradient-heading";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { forwardRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const Gear = forwardRef((props, ref) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            gsap.fromTo(ref.current, 
                { opacity: 0, y: -20 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 80%", // Trigger when the top of the element is 80% from the top of the viewport
                        toggleActions: "play none none reverse",
                    },
                    duration: 0.5 
                }
            );
        }
    }, []);

    return (
      <>
        <div ref={ref}>
          <GradientHeading variant="default" size="xxxl" weight="bold">
            Books
          </GradientHeading>
        </div>
        <div ref={ref}>
          <GradientHeading variant="pink" size="xs" weight="bold">
            Books I&apos;ve read
          </GradientHeading>
        </div>
      </>
    );
});
