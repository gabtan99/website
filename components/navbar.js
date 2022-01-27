import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Heading,
  Flex,
  Spacer,
  Stack,
  Header,
} from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import ToggleButton from "./toggle-button";

const Navbar = (props) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      pt={2}
      bg={useColorModeValue("#ffffff", "#030B16")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container p={2} maxW="container.md">
        <Flex align="center">
          <Heading as="h1" size="xl" px={2} ml={2} fontWeight={800}>
            <Link href="/">GT</Link>
          </Heading>
          <Spacer />
          <Stack
            pr={2}
            direction="row"
            width="auto"
            alignItems="center"
            spacing="20px"
          >
            <Heading as="h5" size="md" variant="nav-link" fontWeight={600}>
              <Link href="/portfolio">Portfolio</Link>
            </Heading>
            <Heading as="h5" size="md" variant="nav-link" fontWeight={600}>
              <a href="/resume.pdf">Resume</a>
            </Heading>
            <ToggleButton />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
