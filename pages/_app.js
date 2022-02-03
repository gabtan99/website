import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../styles/theme";
import Fonts from "../styles/fonts";
import NoSSR from "../components/no-ssr";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <NoSSR>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </NoSSR>
    </ChakraProvider>
  );
}

export default MyApp;
