import { Grid, useMediaQuery, useTheme } from "@mui/material";
import FloatingPoints from "../components/Auth/FloatingPoints";
import LoginForm from "../components/Auth/LoginForm";
import CComponent from "../components/CComponent";

const LandingPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("xl"));

  const colors = ["black", theme.palette.primary.lighter];

  const sizes = {
    xs: { height: 120, width: 320 },
    sm: { height: 260, width: 380 },
    md: { height: 330, width: 450 },
    lg: { height: 330, width: 660 },
  };

  const returnSize = () => {
    if (matchesXS) {
      return sizes["xs"];
    }
    if (matchesSM) {
      return sizes["sm"];
    }
    if (matchesMD) {
      return sizes["md"];
    }
    if (matchesLG) {
      return sizes["lg"];
    }
  };
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
        >
          <FloatingPoints
            height={returnSize().height}
            width={returnSize().width}
            color={theme.palette.primary.main}
          />
          <FloatingPoints
            height={returnSize().height}
            width={returnSize().width}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          item
          sx={{
            backgroundColor: matches ? colors[0] : colors[1],
            height: matches ? "50vh" : "100vh",
          }}
        >
          <FloatingPoints
            height={returnSize().height}
            width={returnSize().width}
            color={theme.palette.primary.main}
          />
          <FloatingPoints
            height={returnSize().height}
            width={returnSize().width}
            color={theme.palette.primary.main}
          />
        </Grid>
      </Grid>
      <CComponent />
      <LoginForm />
    </>
  );
};
export default LandingPage;
