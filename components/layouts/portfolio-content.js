import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Image from "next/image";
import { Container, Link, Text, Tag, Box, Wrap } from "@chakra-ui/react";
import Block from "../block";

const PortfolioContent = ({ title, children, image, stack, link }) => {
  return (
    <Container maxW="container.lg" mt={{ base: "5vh", md: "8vh" }}>
      <Block delay={0.1} mb={5}>
        <NextLink href="/portfolio" passHref>
          <Link>
            <Text
              fontSize="18"
              fontWeight={400}
              color="textPrimary"
              cursor="pointer"
            >
              ← Portfolio
            </Text>
          </Link>
        </NextLink>
        <Text mb={2} fontSize="medium" fontWeight={600} color="textPrimary">
          {title}
        </Text>
      </Block>
      <Block delay={0.2} mb={3}>
        <Image
          src={image}
          alt={"img"}
          placeholder="blur"
          loading="lazy"
          className="port-item"
        />
      </Block>
      <Block delay={0.3} mt={7}>
        <Text
          fontSize="md"
          fontWeight={400}
          letterSpacing={0.5}
          lineHeight="tall"
        >
          {children}
        </Text>
      </Block>

      <Block delay={0.4} mt={7}>
        <Box width="100%" display="flex" my={2}>
          <Text fontSize="14" minW="60px">
            Stack
          </Text>
          <Wrap>
            {stack.map((e, i) => (
              <Tag key={i}> {e} </Tag>
            ))}
          </Wrap>
        </Box>
        <Box width="100%" display="flex">
          <Text fontSize="14" minW="60px">
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
