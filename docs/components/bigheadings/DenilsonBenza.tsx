import { GradientHeading } from "@/components/ui/gradient-heading"
import { Container, Section, ArticleArticle, Layout, Main } from "@/components/craft";
import { forwardRef } from "react";

export default forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <section> 
          <Container>
            <GradientHeading variant="default" size="xxl" weight="bold" className="w-fit h-fit max-h-full w-full h-full -right-3/4">
              DENILSON<br />BENZA
            </GradientHeading>
          </Container>
        </section>
      </div>
    )
});
