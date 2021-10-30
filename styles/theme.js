import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#030B16")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props) => ({
      color: mode("#ffffff", "#030B16")(props),
      textDecoration: "underline",
      textUnderlineOffset: 6,
    }),
  },
};

const fonts = {
  heading: "Raleway",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
});

export default theme;
