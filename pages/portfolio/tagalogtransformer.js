import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

const TagalogTransformer = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Tagalog Transformer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent></PortfolioContent>
      <Footer />
    </div>
  );
};

export default TagalogTransformer;
