import Link from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const PortfolioItem = ({ children, href, title, thumb }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image src={thumb} alt={title} placeholder="blur" loading="lazy" />
        <LinkOverlay href={href} target="_blank">
          <Text> {title}</Text>
        </LinkOverlay>
        <Text fontSize={14}> {children}</Text>
      </LinkBox>
    </Box>
  );
};

export default PortfolioItem;
