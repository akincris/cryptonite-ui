import { LogoutOutlined } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "../../components/global/Navbar.js";
import Sidebar from "../../components/global/Sidebar.js";
import { getLSValue } from "../../app/localStorage.js";

const Base = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const tools = () => {
    return (
      <IconButton onClick={() => navigate("/auth")}>
        <LogoutOutlined color="secondary" />
      </IconButton>
    );
  };
  return (
    <Box style={{backgroundColor: getLSValue("theme") === "light"? "white" : theme.palette.primary.light}}>
      <Navbar
        sidebarExist={true}
        toggleTheme={props.toggleTheme}
        sidebarMode={sidebarOpen}
        toggleSidebar={setSidebarOpen}
        tools={tools}
      />
      <Sidebar handleClose={() => setSidebarOpen(false)} open={sidebarOpen} />
      <Outlet />
    </Box>
  );
};
export default Base;
