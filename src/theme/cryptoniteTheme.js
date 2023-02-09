import { createTheme } from "@mui/material/styles";
import { green, blue } from "@mui/material/colors";

const cryptoniteTheme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default cryptoniteTheme;
