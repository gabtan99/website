import Head from "next/head";
import { Container, SimpleGrid, Divider, Text } from "@chakra-ui/react";
import Block from "../components/block";
import Footer from "../components/footer";
import PortfolioItem from "../components/portfolio-item";

import TransformerURL from "../public/media/transformer.png";

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.sm" pt={14}>
        <Block delay={0.1} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            Portfolio
          </Text>
        </Block>

        <SimpleGrid columns={[1, 1, 2]} spacingX={10}>
          <Block delay={0.2} mb={1}>
            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              A next.js website for showcasing new NLP models
            </PortfolioItem>
            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              A next.js website for showcasing new NLP models
            </PortfolioItem>
          </Block>
          <Block delay={0.2}>
            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              A next.js website for showcasing new NLP models
            </PortfolioItem>
            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              A next.js website for showcasing new NLP models
            </PortfolioItem>
          </Block>
        </SimpleGrid>

        <Block delay={0.3} mb={7} mt={10}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            To be finished
          </Text>
        </Block>
        <SimpleGrid columns={[1, 1, 2]} spacingX={10}>
          <Block delay={0.4} mb={1}>
            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              A next.js website for showcasing new NLP models
            </PortfolioItem>
          </Block>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
