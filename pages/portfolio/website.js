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
        link="https://gab.vercel.app"
        stack={["Next.js", "Chakra UI", "Framer Motion"]}
      >
        My portfolio website. I designed the wireframe in Figma (as you can see
        in the thumbnail) and developed it using my favorite React framework,
        Next.js. This was also my first time using Chakra UI for components and
        easy theming. The website is heavily inspired by YouTuber "devaslife".
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default Website;
