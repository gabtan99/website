import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Container, Link, Text, Tag, Box, Wrap } from "@chakra-ui/react";
import Block from "../block";

const PortfolioContent = ({ title, children, image, stack, link }) => {
  return (
    <Container maxW="container.sm" pt={14}>
      <Block delay={0.1} mb={5}>
        <Text fontSize="lg" fontWeight={300}>
          Portfolio
        </Text>
        <Text mb={2} fontSize="xl" fontWeight={600}>
          {title}
        </Text>
      </Block>
      <Block delay={0.2} mb={3}>
        <Image
          src={image}
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
          {children}
        </Text>
      </Block>

      <Block delay={0.4} mb={10}>
        <Box width="100%" display="flex" my={2}>
          <Text fontSize="sm" minW="60px">
            Stack
          </Text>
          <Wrap>
            {stack.map((e, i) => (
              <Tag key={i}> {e} </Tag>
            ))}
          </Wrap>
        </Box>
        <Box width="100%" display="flex">
          <Text fontSize="sm" minW="60px">
            Link
          </Text>

          {link ? (
            <Link href={link} isExternal>
              {title}
              <ExternalLinkIcon mx="2px" />
            </Link>
          ) : (
            "Unavailable"
          )}
        </Box>
      </Block>
    </Container>
  );
};

export default PortfolioContent;
