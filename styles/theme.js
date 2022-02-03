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
  Heading: {
    variants: (props) => ({
      "nav-link": {
        fontSize: 18,
        color: mode("#ffffff", "#000000")(props),
      },
    }),
  },
  Text: {
    baseStyle: (props) => ({
      color: mode("#000000", "#ffffff")(props),
      letterSpacing: 0.5,
      fontSize: 18,
    }),
  },
};

const fonts = {
  heading: "Raleway",
  body: "Manrope",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  whites: {
    50: "#FFFFFF",
    100: "#FFFFFF",
    200: "#FFFFFF",
    300: "#FFFFFF",
    400: "#FFFFFF",
    500: "#FFFFFF",
    600: "#FFFFFF",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#FFFFFF",
  },
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
  fonts,
});

export default theme;
