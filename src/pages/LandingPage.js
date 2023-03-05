import { Grid, useMediaQuery, useTheme } from "@mui/material";
import CComponent from "../components/CComponent";

const LandingPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = [theme.palette.secondary.main, theme.palette.primary.lighter];

  return (
    <>
      <Grid sx={{ position: "absolute" }} container>
        <Grid
          xs={12}
          sm={6}
          item
          sx={{
            backgroundColor: matches ? colors[1] : colors[0],
            height: matches ? "50vh" : "100vh",
          }}
        ></Grid>
        <Grid
          xs={12}
          sm={6}
          item
          sx={{
            backgroundColor: matches ? colors[0] : colors[1],
            height: matches ? "50vh" : "100vh",
          }}
        ></Grid>
      </Grid>
      <CComponent />
    </>
  );
};
export default LandingPage;
