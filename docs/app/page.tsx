import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";
import DenilsonBenza from "@/components/bigheadings/DenilsonBenza";

export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <div className="flex justify-center"></div>
          <DenilsonBenza />
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1></h1>
    </article>
  );
};
