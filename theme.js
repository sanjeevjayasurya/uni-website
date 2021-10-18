import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  "2xl": "120em",
});

const fonts = {
  ...chakraTheme.fonts,
  body: `"Matter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `"Matter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const colors = {
  ...chakraTheme.colors,
  brand: {
    primary: "#00DCC8",
    secondary: "#FDEF78",
    caution: "#EA9D09",
    darkGray: '#8D8D95'
  },
};
const theme = extendTheme({ fonts, breakpoints, colors });

export default theme;
