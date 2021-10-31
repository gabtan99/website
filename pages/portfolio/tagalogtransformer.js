import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import TransformerURL from "../../public/media/transformer.png";

const TagalogTransformer = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Tagalog Transformer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Tagalog Transformer"
        image={TransformerURL}
        link="https://www.tagalogtransformer.me"
        stack={[
          "Next.js",
          "Tailwind",
          "Flask",
          "Google Cloud Platform",
          "Python",
        ]}
      >
        A web application to showcase newly-produced NLP models in Tagalog /
        Filipino. The models are an output of my undergraduate research which
        involved producing the first conversational response generator in
        Filipino (which means it can remember previous n responses).
        Specifically, we focused on creating the first Filipino conversational
        dataset and using RoBERTa-based data augmentation to multiply the amount
        of data for training. The web app communicates with our model through a
        REST API.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default TagalogTransformer;
