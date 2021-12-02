import Typewriter from "typewriter-effect";
import { Heading } from "@chakra-ui/react";

const TitleTypewriter = () => {
  return (
    <Heading as="h2" size="lg" my={2} fontWeight={600}>
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Programmer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("UI/UX Designer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Software Developer")
            .pauseFor(10000)
            .deleteAll()
            .start();
        }}
      />
    </Heading>
  );
};

export default TitleTypewriter;
