import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import MediacastURL from "../../public/media/mediacast.png";

const Mediacast = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Mediacast Digital Group</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Mediacast Digital Group"
        image={MediacastURL}
        // link="https://www.tagalogtransformer.me"
        stack={[
          "Wordpress",
          "Frontity",
          "React",
          "Styled-components",
          "Mailchimp",
        ]}
      >
        Work for Mediacast Digital Group Inc. as a web developer for their
        website revamp project. The project involves migrating their current
        Wordpress into a headless CMS. New custom post types were added to
        restructure their content and serverless pre-rendering via Frontity to
        optimize website loading time and SEO.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default Mediacast;
