import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const Block = ({ children, delay = 0, ...props }) => {
  return (
    <Animation
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, delay }}
      {...props}
    >
      {children}
    </Animation>
  );
};

const Animation = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

export default Block;
