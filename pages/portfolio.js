import Head from "next/head";
import { Container, SimpleGrid, Divider, Text } from "@chakra-ui/react";
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
      <Container maxW="container.sm" pt={14}>
        <Block delay={0.1} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            My Portfolio
          </Text>
        </Block>

        <SimpleGrid columns={[1, 1, 2]} spacingX={10}>
          <Block delay={0.2} mb={1}>
            <PortfolioItem
              id="mediacast"
              title="Mediacast Digital Group"
              thumb={MediacastURL}
            >
              Wordpress-based Next.js site for company catalogue
            </PortfolioItem>

            <PortfolioItem
              id="tagalogtransformer"
              title="Tagalog Transformer"
              thumb={TransformerURL}
            >
              React app to showcase a new Tagalog conversational model.
            </PortfolioItem>
            <PortfolioItem
              id="airshipapp"
              title="Airship Booking App"
              thumb={AirshipURL}
            >
              Booking App for Airship built with React Native (Internship @
              BotBros AI)
            </PortfolioItem>
          </Block>
          <Block delay={0.2}>
            <PortfolioItem
              id="melscollection"
              title="Mel's Collection"
              thumb={MelsURL}
            >
              E-commerce website with SMS and Email notifications
            </PortfolioItem>
            <PortfolioItem
              id="intercon"
              title="Intercon Regenerative Center"
              thumb={InterconURL}
            >
              A website for Blog / Service Catalogue built with Vue.js
            </PortfolioItem>
            <PortfolioItem
              id="website"
              title="Personal Website"
              thumb={WebsiteURL}
            >
              The website you are viewing right now! Built with Next.js
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
              id="cardsagainststupidity"
              title="Cards Against Stupidity"
              thumb={CasURL}
            >
              Flashcards for studying! A remake of my 2nd year college project.
            </PortfolioItem>
          </Block>
        </SimpleGrid>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
