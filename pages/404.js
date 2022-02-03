import { Box, Container, Heading, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <Container maxW="container.lg" pt={14}>
        <Box align="center" my={6}>
          <Heading as="h2" my={6}>
            Page not found
          </Heading>
          <Text>Uh oh! The page you were looking cannot be found :(</Text>
          <Link href="/" passHref>
            <Button my={6}>Return Home</Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default NotFound;
