"use client";

import { GradientHeading } from "@/components/ui/gradient-heading";
import {
  Container,
  Section,
  ArticleArticle,
  Layout,
  Main,
} from "@/components/craft";
import { forwardRef } from "react";
import { motion } from "framer-motion";

export default forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <GradientHeading
              variant="default"
              size="xxl"
              weight="bold"
              className="w-fit h-fit max-h-full w-full h-full -right-3/4"
            >
              DENILSON
              <br />
              BENZA
            </GradientHeading>
          </motion.div>
        </Container>
      </section>
    </div>
  );
});
