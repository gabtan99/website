import { theme as chakra, extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#000000")(props),
    },
    a: {
      _hover: {
        textDecoration: "none !important",
        boxShadow: "none !important",
      },
    },
  }),
};

const components = {
  Text: {
    baseStyle: (props) => ({
      color: mode("#000000", "textSecondary")(props),
      fontSize: 14,
      lineHeight: "tall",
    }),
  },
};

const fonts = {
  ...chakra.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "80em",
  xl: "80em",
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  background: "#000000",
  textPrimary: "#ffffff",
  textSecondary: "#848484",
  accent: "#FFAD33",
  borderColor: "#40404050",
};

const fontSizes = {
  big: fluidType(64, 96),
  medium: fluidType(18, 24),
  small: fluidType(16, 18),
};

const theme = extendTheme({
  config,
  styles,
  colors,
  components,
  fontSizes,
  breakpoints,
  fonts,
});

export default theme;
