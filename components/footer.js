import { Text, Container, Box, Link } from "@chakra-ui/react";
import Block from "./block";
import { useColorModeValue } from "@chakra-ui/color-mode";

const Footer = () => {
  return (
    <Block delay={0.7} my={7}>
      <Container maxW="container.lg">
        <Text fontSize={14} mt={12} align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Gabriel Tan. All Rights Reserved.
        </Text>
      </Container>
    </Block>
  );
};

export default Footer;
