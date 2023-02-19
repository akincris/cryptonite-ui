import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const Navbar = (props) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <ButtonGroup>
            <IconButton
              onClick={() =>
                props.toggleTheme(
                  theme.palette.mode === "light" ? "dark" : "light"
                )
              }
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined color="info" />
              ) : (
                <LightModeOutlined color="info" />
              )}
            </IconButton>
            <Button color="inherit">Login</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
