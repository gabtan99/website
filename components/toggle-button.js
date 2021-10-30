import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icon";

const ToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorMode("#030B16", "#ffffff")}
      icon={useColorModeValue(<SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};
export default ToggleButton;
