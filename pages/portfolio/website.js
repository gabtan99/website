import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import WebsiteURL from "../../public/media/website.png";

const Website = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Personal Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Personal Website"
        image={WebsiteURL}
        link="https://www.tagalogtransformer.me"
        stack={["Next.js", "React"]}
      >
        A video work generated with deep learning, imitating famous four
        painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai. A video work generated with deep learning, imitating famous
        four painters: Van Gogh, Edvard Munch, Kiyoshi Yamashita, and Katsushika
        Hokusai.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default Website;
