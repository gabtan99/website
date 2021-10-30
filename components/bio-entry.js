import { Text, Box } from "@chakra-ui/react";

const BioEntry = ({ year = "N/A", children }) => {
  return (
    <Box display="flex" mb={2}>
      <Text fontWeight={600} mr={3}>
        {year}
      </Text>
      <Text fontWeight={300}>{children}</Text>
    </Box>
  );
};

export default BioEntry;
