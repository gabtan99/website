import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Container, Link, Text, Tag, Box, Wrap } from "@chakra-ui/react";
import Block from "../block";

import TransformerURL from "../../public/media/transformer.png";

const PortfolioContent = () => {
  return (
    <Container maxW="container.sm" pt={14}>
      <Block delay={0.1} mb={5}>
        <Text fontSize="lg" fontWeight={300}>
          Portfolio
        </Text>
        <Text mb={2} fontSize="xl" fontWeight={600}>
          Tagalog Transformer
        </Text>
      </Block>
      <Block delay={0.2} mb={3}>
        <Image
          src={TransformerURL}
          alt={"test"}
          placeholder="blur"
          loading="lazy"
          className="port-item"
        />
      </Block>
      <Block delay={0.3} mb={5}>
        <Text
          fontSize="md"
          fontWeight={300}
          letterSpacing={0.5}
          lineHeight="tall"
        >
          A video work generated with deep learning, imitating famous four
          painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
          Hokusai. A video work generated with deep learning, imitating famous
          four painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and
          Katsushika Hokusai.
        </Text>
      </Block>

      <Block delay={0.4} mb={10}>
        <Box width="100%" display="flex" my={2}>
          <Text fontSize="sm" minW="60px">
            Stack
          </Text>
          <Wrap>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
            <Tag>Next.js</Tag>
          </Wrap>
        </Box>
        <Box width="100%" display="flex">
          <Text fontSize="sm" minW="60px">
            Link
          </Text>
          <Link href="https://chakra-ui.com" isExternal>
            Chakra Design system <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      </Block>
    </Container>
  );
};

export default PortfolioContent;
