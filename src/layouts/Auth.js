import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ButtonGroup, IconButton, useTheme } from "@mui/material";
import LanguageButton from "../components/global/selectLanguage";

const Auth = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{position: "relative"}}>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "right",
          width: "100%",
          zIndex: 10
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
            <Typography sx={{padding: "5px"}} variant="button">Login</Typography>
          </IconButton>
        </ButtonGroup>
      </Box>
      <Outlet />
    </Box>
  );
};
export default Auth;
