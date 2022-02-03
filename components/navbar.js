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
      py={3}
      bg={useColorModeValue("#ffffff", "#000000")}
      zIndex={1}
      borderBottom="1px"
      borderBottomColor="borderColor"
      {...props}
    >
      <Container p={2} maxW="container.xl">
        <Flex align="center">
          <Link href="/">
            <Heading
              fontSize="24"
              px={2}
              ml={2}
              fontWeight={900}
              cursor="pointer"
            >
              <Box>
                G
                <Box as="span" color="accent">
                  T
                </Box>
              </Box>
            </Heading>
          </Link>
          <Spacer />
          <Stack
            pr={4}
            direction="row"
            width="auto"
            alignItems="center"
            spacing="30px"
          >
            <Heading fontSize="18">
              <Link href="/portfolio">Portfolio</Link>
            </Heading>
            <Heading fontSize="18">
              <Link href="/resume.pdf">Resume</Link>
            </Heading>
            {/* <ToggleButton /> */}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
