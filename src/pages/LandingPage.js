import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useAppTranslation } from "../app/hooks";
import FloatingPoints from "../components/Auth/FloatingPoints";
import LoginForm from "../components/Auth/LoginForm";
import CComponent from "../components/CComponent";

const LandingPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useAppTranslation();

  const matchesXS = useMediaQuery(theme.breakpoints.down("s"));
  const matchesS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("xl"));
  const matchesXL = useMediaQuery(theme.breakpoints.up("xl"));

  const colors = ["black", theme.palette.primary.light];

  const sizes = {
    xs: { height: 120, width: 320 },
    s: { height: 125, width: 410 },
    sm: { height: 260, width: 370 },
    md: { height: 330, width: 450 },
    lg: { height: 330, width: 700 },
    xl: { height: 860, width: 1200 },
  };

  const returnSize = () => {
    if (matchesXS) {
      return sizes["xs"];
    }
    if (matchesS) {
      return sizes["s"];
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
    if (matchesXL) {
      return sizes["xl"];
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
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: 600,
              color: matchesS ? "black" : "#ededed",
              position: "absolute",
              top: "30%",
              left: "5%",
            }}
          >
            {t("Crypto")} <br />
          </Typography>
          <Typography
            sx={{
              fontSize: "80px",
              fontWeight: 600,
              color: "#ededed",
              position: "absolute",
              top: "45%",
              left: "5%",
            }}
          >
            {t("Nite")}
          </Typography>
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
      {!matchesS && <CComponent />}
      {/* <LoginForm /> */}
    </>
  );
};
export default LandingPage;
