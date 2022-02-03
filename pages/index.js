import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";
import Block from "../components/block";
import Footer from "../components/footer";
import { GithubIcon, LinkedInIcon } from "./../components/icons/socials";
import { EmailIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gab Tan - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={"container.lg"} mt={{ base: "10vh", md: "14vh" }}>
        <Flex>
          <Block mb={3} color={useColorModeValue("#000000", "#ffffff")}>
            <Heading
              fontSize="medium"
              fontWeight={600}
              color="accent"
              fontFamily="Manrope"
            >
              Hi! My name is
            </Heading>
            <Heading fontSize="big" fontWeight={900}>
              Gabriel Tan
            </Heading>
            <Heading
              mt={3}
              fontSize="medium"
              color="textSecondary"
              fontWeight={400}
            >
              <Box fontWeight={600} color="white" as="span">
                Software Developer{" "}
              </Box>
              based in BC, Canada.
            </Heading>

            <Box mt={12}>
              <Link mr={3} href="https://www.linkedin.com/in/gabtan99">
                <Button
                  mb={3}
                  leftIcon={
                    <LinkedInIcon
                      width={6}
                      height={6}
                      color={useColorModeValue("#000000", "#ffffff")}
                    />
                  }
                  position="static"
                  color="textPrimary"
                >
                  LinkedIn
                </Button>
              </Link>
              <Link mr={3} href="https://github.com/gabtan99">
                <Button
                  mb={3}
                  leftIcon={
                    <GithubIcon
                      width={6}
                      height={6}
                      color={useColorModeValue("#000000", "#ffffff")}
                    />
                  }
                  position="static"
                  color="textPrimary"
                >
                  GitHub
                </Button>
              </Link>
              <Link mr={3} href="mailto: gabtan99@gmail.com">
                <Button
                  mb={3}
                  leftIcon={
                    <EmailIcon
                      width={6}
                      height={6}
                      color={useColorModeValue("#000000", "#ffffff")}
                    />
                  }
                  position="static"
                  color="textPrimary"
                >
                  Email
                </Button>
              </Link>
            </Box>
          </Block>
          <Block flex="1">
            <Image
              src="/media/curly.png"
              w={{ sm: "0px", md: "350px", lg: "400px" }}
              zIndex={0}
              alt=""
            ></Image>
          </Block>
        </Flex>
        <Flex
          mb={8}
          mt={{ base: "1vh", md: "8vh" }}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Block delay={0.5} maxW={{ base: "100%", sm: "600px" }}>
            <Text
              mb={3}
              fontSize={18}
              fontFamily="Manrope"
              color="textPrimary"
              fontWeight={600}
            >
              About me
            </Text>
            <Text fontWeight={400}>
              Hi! I am Gabriel Tan. I am a fresh graduate of{" "}
              <Box as="span" color="textPrimary">
                Computer Science
              </Box>{" "}
              from{" "}
              <Box as="span" color="textPrimary">
                De La Salle University Manila.
              </Box>
              <br /> <br /> During my studies, I was fortunate enough to take an
              internship at a startup company which sparked my passion for
              software development. Since then, I’ve been constantly updating
              myself with newer technologies to enhance my craft. <br /> <br />{" "}
              To fund my interests in video games, I also like to do freelance
              work which usually involves a combination of UI/UX Design,
              full-stack development, and QA testing.
            </Text>
            <Link href="portfolio">
              <Text fontWeight={600} color="accent" mt={7} flex={1}>
                Explore My Work →
              </Text>
            </Link>
          </Block>

          <Flex flex="1" justify="center" align="center">
            <Block delay={0.5}>
              <Image
                alt="profile pic"
                src="/media/dp.png"
                maxW="200px"
                borderColor="white"
                border="2px"
                borderRadius="full"
                mt={5}
                mb={8}
                mx={5}
              />
            </Block>
          </Flex>
        </Flex>
        <Block
          delay={0.7}
          mb="10vh"
          mt={{ base: "10vh", md: "14vh" }}
          align="center"
        >
          <Heading fontSize={24} fontWeight={800} fontFamily="Manrope">
            Get in Touch
          </Heading>
          <Text maxW={320} fontSize={18}>
            I'm currently looking for opportunities for a{" "}
            <Box as="span" color="textPrimary">
              Web Developer
            </Box>{" "}
            role.
          </Text>
          <Link href="/resume.pdf">
            <Text fontWeight={600} color="accent" mt={7}>
              View Resume →
            </Text>
          </Link>
        </Block>
      </Container>
      <Footer />
    </div>
  );
}
