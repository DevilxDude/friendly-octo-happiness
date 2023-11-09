import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
  colors: {
    primary: generateColors("#8a3ffc"),
  },
  primaryColor: "primary",
  primaryShade: 4,
});
