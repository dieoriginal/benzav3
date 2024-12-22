import { useEffect, useRef, useState } from "react";
import SoftwareDevBone from "@/components/ui/sofwaredevbone";

export function BenzaH1() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div ref={ref}>
      {isVisible && (
        <SoftwareDevBone
          className="font-display text-sm font-bold -tracking-widest text-black dark:text-white italic"
          text="Frontend Engineer"
        />
      )}
    </div>
  );
}
