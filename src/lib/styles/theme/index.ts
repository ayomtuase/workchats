import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { textStyles } from "./components/textStyles";
import { config } from "./config";
import { fonts } from "./fonts";

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
  textStyles,
});

export default customTheme;
