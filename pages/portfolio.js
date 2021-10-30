import Head from "next/head";
import { Container, Box, Heading, Image, Text } from "@chakra-ui/react";
import Block from "../components/block";
import Footer from "../components/footer";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.sm" pt={14}>
        <Block delay={0.3} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            Portfolio
          </Text>
          <Text letterSpacing={0.5} fontWeight={300} lineHeight="tall">
            I design and develop modern systems for clients using common web and
            mobile technology. I specialize in frontend development with hopes
            of finding more opportunities to refine my backend skillset.
          </Text>
        </Block>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
