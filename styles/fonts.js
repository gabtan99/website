import { Global } from "@emotion/react";

const Fonts = () => {
  return (
    <Global
      styles={`@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap'); 
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap');`}
    />
  );
};

export default Fonts;
