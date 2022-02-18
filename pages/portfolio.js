import Head from "next/head";
import {
  Container,
  SimpleGrid,
  Divider,
  Text,
  Heading,
} from "@chakra-ui/react";
import Block from "../components/block";
import Footer from "../components/footer";
import PortfolioItem from "../components/portfolio-item";

import TransformerURL from "../public/media/transformer.png";
import AirshipURL from "../public/media/airship.png";
import CasURL from "../public/media/cas.png";
import InterconURL from "../public/media/intercon.png";
import MediacastURL from "../public/media/mediacast.png";
import WebsiteURL from "../public/media/website.png";
import MelsURL from "../public/media/mels.png";

const Portfolio = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW="container.lg" mt={{ base: "5vh", md: "8vh" }}>
        <Block delay={0.1} mb={7}>
          <Heading
            fontSize="18"
            color="accent"
            fontWeight={600}
            fontFamily="Manrope"
          >
            Welcome to my
          </Heading>
          <Heading fontSize="48" color="textPrimary">
            Portfolio
          </Heading>
        </Block>

        <SimpleGrid columns={[1, 1, 2]} spacingX={10}>
          <Block delay={0.2} mb={1}>
            <PortfolioItem
              id="mediacast"
              title="Mediacast Digital Group"
              thumb={MediacastURL}
            ></PortfolioItem>

            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            ></PortfolioItem>
            <PortfolioItem
              id="airshipapp"
              title="Airship Booking App"
              thumb={AirshipURL}
            ></PortfolioItem>
          </Block>
          <Block delay={0.2}>
            <PortfolioItem
              id="cardsagainststupidity"
              title="Cards Against Stupidity"
              thumb={CasURL}
            ></PortfolioItem>
            <PortfolioItem
              id="intercon"
              title="Intercon Regenerative Center"
              thumb={InterconURL}
            ></PortfolioItem>
            <PortfolioItem
              id="website"
              title="Personal Website"
              thumb={WebsiteURL}
            ></PortfolioItem>
          </Block>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
