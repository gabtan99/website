import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Heading,
  Flex,
  Spacer,
  Stack,
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
      bg={useColorModeValue("#ffffff", "#030B16")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container p={2} maxW="container.md">
        <Flex align="center">
          <Heading as="h1" size="lg" px={2}>
            <Link href="/">GT</Link>
          </Heading>
          <Spacer />
          <Stack
            px={2}
            direction="row"
            width="auto"
            alignItems="center"
            spacing="24px"
          >
            <Link href="/portfolio">portfolio</Link>
            <Link href="/resume">resume</Link>
            <ToggleButton />
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
