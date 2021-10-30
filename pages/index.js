import Head from "next/head";
import Image from "next/image";
import { Container, Box } from "@chakra-ui/react";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>Gab Tan - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={"container.md"} pt={14}>
        <Box p={3} mb={3} align="center">
          Hi, I&apos;m Gab!
        </Box>
      </Container>
    </div>
  );
}
