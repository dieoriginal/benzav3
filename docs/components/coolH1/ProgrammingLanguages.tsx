
import { useEffect, useRef, useState } from "react";
import GradualSpacing from "@/components/ui/gradual-spacing";

export function ProgrammingLanguageH1() {
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
        <GradualSpacing
          className="text-center font-extrabold -tracking-widest text-black dark:text-white italic m-0 p-0 text-sm" // Decreased font size
          text="Technical Competencies"
        />
      )}
    </div>
  );
}
