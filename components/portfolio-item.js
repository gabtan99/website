import Link from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const PortfolioItem = ({ children, id, title, thumb }) => {
  return (
    <Box w="100%" mb={8}>
      <Link href={`/portfolio/${id}`} passHref>
        <LinkBox cursor="pointer">
          <Image
            src={thumb}
            alt={title}
            placeholder="blur"
            loading="lazy"
            className="port-item"
          />
          <LinkOverlay href={`/portfolio/${id}`} target="_blank">
            <Text fontSize={18} fontWeight="bold" mt={2} mb={1}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={16} fontWeight="400">
            {children}
          </Text>
        </LinkBox>
      </Link>
    </Box>
  );
};

export default PortfolioItem;
