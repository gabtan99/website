import { EmailIcon } from "@chakra-ui/icons";
import { Text, Container, Box, Link } from "@chakra-ui/react";
import Block from "./block";
import { FacebookIcon, GithubIcon, LinkedInIcon } from "./icons/socials";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Footer = () => {
  return (
    <Block delay={1} my={7}>
      <Container maxW="container.sm">
        <Text mb={2} fontSize="lg" fontWeight={600}>
          Find me
        </Text>
        <Box>
          <Link mr={3} href="https://www.linkedin.com/in/gabtan99">
            <LinkedInIcon
              width={6}
              height={6}
              color={useColorModeValue("#000000", "#ffffff")}
            />
          </Link>
          <Link mr={3} href="https://github.com/gabtan99">
            <GithubIcon
              width={6}
              height={6}
              color={useColorModeValue("#000000", "#ffffff")}
            />
          </Link>
          <Link mr={3} href="mailto: gabtan99@gmail.com">
            <EmailIcon
              width={6}
              height={6}
              color={useColorModeValue("#000000", "#ffffff")}
            />
          </Link>
          <Link mr={3} href="https://www.facebook.com/gabtann/">
            <FacebookIcon
              width={6}
              height={6}
              color={useColorModeValue("#000000", "#ffffff")}
            />
          </Link>
        </Box>
        <Text fontSize={14} mt={12}>
          &copy; {new Date().getFullYear()} Gabriel Tan. All Rights Reserved.
        </Text>
      </Container>
    </Block>
  );
};

export default Footer;
