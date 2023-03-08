import { Box, Typography, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ButtonGroup, IconButton, useTheme } from "@mui/material";
import LanguageButton from "../components/global/selectLanguage";
import { useAppTranslation } from "../app/hooks";

const Auth = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const {t} = useAppTranslation();
  return (
    <Box sx={{ position: "relative" }}>
      {matches && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: "100%",
            zIndex: 10,
          }}
        >
          <ButtonGroup sx={{ padding: "20px" }}>
            <IconButton>
              <Typography
                sx={{ padding: "4px", color: theme.palette.primary.main }}
                variant="button"
              >
                {t("About Us")}
              </Typography>
            </IconButton>
            <IconButton>
              <Typography
                sx={{ padding: "4px", color: theme.palette.primary.main }}
                variant="button"
              >
                {t("Trending Topics")}
              </Typography>
            </IconButton>
          </ButtonGroup>
        </Box>
      )}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "right",
          width: "100%",
          zIndex: 10,
        }}
      >
        <ButtonGroup sx={{ padding: "20px" }}>
          <IconButton
            onClick={() =>
              props.toggleTheme(
                theme.palette.mode === "light" ? "dark" : "light"
              )
            }
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined color="white" />
            ) : (
              <LightModeOutlined color="white" />
            )}
          </IconButton>
          <LanguageButton />
          <IconButton>
            <Typography sx={{ padding: "5px" }} variant="button">
              Login
            </Typography>
          </IconButton>
        </ButtonGroup>
      </Box>
      <Outlet />
    </Box>
  );
};
export default Auth;
