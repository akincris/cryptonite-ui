import { green, blue, yellow, purple, orange, red } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: purple[200],
          },
          secondary: {
            main: orange[200],
          },
          error: {
            main: red[200],
          },
          warning: {
            main: yellow[200],
          },
          info: {
            main: blue[200],
          },
          success: {
            main: green[200],
          },
        }
      : {
          primary: {
            main: purple[700],
          },
          secondary: {
            main: orange[700],
          },
          error: {
            main: red[700],
          },
          warning: {
            main: yellow[700],
          },
          info: {
            main: blue[700],
          },
          success: {
            main: green[700],
          },
        }),
  },
});

export default getDesignTokens;
