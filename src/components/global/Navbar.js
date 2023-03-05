import {
  AppBar,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import LanguageButton from "./selectLanguage";

const Navbar = ({ toggleSidebar, sidebarMode, toggleTheme, tools }) => {
  const theme = useTheme();
  return (
    <AppBar enableColorOnDark={true} position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => toggleSidebar(!sidebarMode)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
          }}
        >
          Crypto-Nite
        </Typography>
        <ButtonGroup>
          <IconButton
            onClick={() =>
              toggleTheme(theme.palette.mode === "light" ? "dark" : "light")
            }
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined color="secondary" />
            ) : (
              <LightModeOutlined color="secondary" />
            )}
          </IconButton>
          <LanguageButton />
          {tools && tools()}
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
