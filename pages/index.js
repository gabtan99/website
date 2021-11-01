import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Container, Box, Heading, Image, Text } from "@chakra-ui/react";
import Block from "../components/block";
import BioEntry from "../components/bio-entry";
import Footer from "../components/footer";
import TitleTypewriter from "../components/Title-typewriter";
import NoSSR from "../components/no-ssr";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gab Tan - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={"container.sm"} pt={14}>
        <Block mb={10}>
          <Box
            mb={3}
            align="center"
            color={useColorModeValue("#000000", "#ffffff")}
          >
            <Image
              alt="profile pic"
              src="/media/dp.jpg"
              maxW={150}
              borderRadius="full"
              my={5}
            />
            <Heading as="h1" size="3xl" fontWeight={500}>
              Hi, I&apos;m <b>Gab</b>!
            </Heading>
            <NoSSR>
              <TitleTypewriter />
            </NoSSR>
          </Box>
        </Block>

        <Block delay={0.5} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            About me
          </Text>
          <Text letterSpacing={0.5} fontWeight={300} lineHeight="tall">
            I design and develop modern systems using common web and mobile
            technology. I currently specialize in frontend development but I am
            very much interested in learning backend frameworks. To fund my
            interests, I like to do freelance work which usually involves a
            combination of UI/UX Design, full-stack development, and business
            analysis.
          </Text>
        </Block>

        <Block delay={0.6} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            Bio
          </Text>
          <Box>
            <BioEntry year="1999">Born in Manila, Philippines</BioEntry>
            <BioEntry year="2017">
              Graduated from Xavier School San Juan
            </BioEntry>
            <BioEntry year="2020">
              Internship at BotBros AI Cloud Solutions
            </BioEntry>
            <BioEntry year="2021">
              Graduated from De La Salle University Manila with a Bachelor’s
              degree in Computer Science
            </BioEntry>
            <BioEntry year="Now">Freelancing</BioEntry>
          </Box>
        </Block>

        <Block delay={0.7} mb={7}>
          <Text mb={2} fontSize="lg" fontWeight={600}>
            Interests
          </Text>
          <Text letterSpacing={0.5} fontWeight={300} lineHeight="tall">
            I spend most of my my free time either playing video games,
            swimming, exercising, playing the guitar or managing our e-commerce
            business with my dad.
          </Text>
        </Block>
      </Container>
      <Footer />
    </div>
  );
}
