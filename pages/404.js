import { Box, Container, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Container maxW="container.sm" pt={14}>
        <Box align="center" my={6}>
          <Heading as="h2" my={6}>
            Page not found
          </Heading>
          Uh oh! The page you were looking cannot be found :(
          <Link href="/">
            <Button my={6}>Return Home</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default NotFound;
