import Footer from "../../components/footer";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import PortfolioContent from "../../components/layouts/portfolio-content";
import Head from "next/head";

import AirshipURL from "../../public/media/airship.png";

const Airship = () => {
  return (
    <div>
      <Head>
        <title>Gab Tan - Airship Booking App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <PortfolioContent
        title="Airship Booking App"
        image={AirshipURL}
        link="https://play.google.com/store/apps/details?id=com.sendersapp"
        stack={["React Native", "Redux"]}
      >
        The booking app for Airship Logistic Solutions (a product of my
        internship company). My task was to translate the wireframe into
        production-ready code. I also conducted interviews and usability testing
        with the eventual users of the app. Checkout{" "}
        <Link href={"https://www.airship.me/"} isExternal>
          Airship
          <ExternalLinkIcon mx="2px" />
        </Link>{" "}
        for more information.
      </PortfolioContent>
      <Footer />
    </div>
  );
};

export default Airship;
