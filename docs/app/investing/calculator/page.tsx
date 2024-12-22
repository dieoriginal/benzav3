import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";

export default function Home() {
  return (

    <div className="w-full h-full">
      <FloatingPanelComponent />
    </div>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1>
      </h1>
    </article>
  );
};
