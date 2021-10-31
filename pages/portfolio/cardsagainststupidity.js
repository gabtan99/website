import Footer from "../../components/footer";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import CasURL from "../../public/media/cas.png";

const CardsAgainstStupidity = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Cards Against Stupidity</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Cards Against Stupidity"
        image={CasURL}
        link="https://cas-fe-gabtan99.vercel.app"
        stack={[
          "React",
          "Heroku",
          "Express.js",
          "GraphQL",
          "Apollo",
          "PostgreSQL",
        ]}
      >
        I wanted to challenge myself during the start of the pandemic and so I
        recreated my 2nd year web development project but with better tools and
        frameworks. The website was intended to help me with reviewing my notes
        for university. So far, I have finished coding the frontend and the
        backend server but never got the chance to integrate the two since
        school resumed online.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default CardsAgainstStupidity;
