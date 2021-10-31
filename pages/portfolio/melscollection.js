import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import MelsURL from "../../public/media/mels.png";

const MelsCollection = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Mel's Collection</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Mel's Collection"
        image={MelsURL}
        // link="https://www.tagalogtransformer.me"
        stack={[
          "Next.js",
          "Tailwind",
          "Strapi",
          "GraphQL",
          "MongoDB",
          "Heroku",
          "Cloudinary",
        ]}
      >
        A freelance job, Mel's Collection's website contains e-commerce
        functionality such as browsing a catalog, adding to cart, uploading
        payment slips, SMS / Email updates and more! The website was created to
        streamline business transactions (due to complex customization options)
        and is set to release by the end of 2021.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default MelsCollection;
