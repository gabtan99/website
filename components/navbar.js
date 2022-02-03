import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Container,
  Heading,
  Flex,
  Spacer,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
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
          <Link href="/" passHref>
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
            spacing="20px"
          >
            <Link mr={3} href="/portfolio" passHref>
              <Button position="static" variant="ghost" color="textPrimary">
                Portfolio
              </Button>
            </Link>

            <Link mr={3} href="/resume.pdf" passHref>
              <Button position="static" variant="ghost" color="textPrimary">
                Resume
              </Button>
            </Link>
            {/* <ToggleButton /> */}
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
