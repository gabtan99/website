import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import InterconURL from "../../public/media/intercon.png";

const Intercon = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Intercon Regenerative Center</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Intercon Regenerative Center"
        image={InterconURL}
        link="https://intercon.vercel.app/"
        stack={[
          "Gridsome",
          "Vue.js",
          "Forestry",
          "Cloudinary",
          "Styled-components",
          "GraphQL",
          "Mailchimp",
          "Figma",
        ]}
      >
        A dynamic web page for Intercon Regenerative Center (Manila,
        Philippines). The website showcases their collection of services for a
        healthy lifestyle and also a blog! Both the development and design of
        the website was made solely by myself and my group of friends. The
        production website is taken down as requested, so the link currently
        directs to the dev branch.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default Intercon;
