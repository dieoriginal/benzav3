import { Main, Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { FloatingPanelComponent } from "@/components/FloatingPanel";
import { CompoundPERCountries } from "@/components/CompoundPERCountries";


export default function Home() {
  return (
    <Main>
      <Section>
        <Container>
          <ExampleJsx />
          
        </Container>
      </Section>
    </Main>
  );
}

const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      <h1 className="text-9xl font-extrabold text-center space-tighter">
        Commodities
      </h1>

      <div className="prose-m-none prose-p:text-zinc-500 dark:prose-p:text-zinc-400 pb-10">
          <p className="text-center"> 
            Minor investments in commodities.
          </p>
      </div>

      
      

      



     


    </article>
  );
};
