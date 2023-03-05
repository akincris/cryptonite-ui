import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/global/Navbar.js";
import Sidebar from "../../components/global/Sidebar.js";

const Base = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Box>
      <Navbar
        toggleTheme={props.toggleTheme}
        sidebarMode={sidebarOpen}
        toggleSidebar={setSidebarOpen}
      />
      <Sidebar handleClose={() => setSidebarOpen(false)} open={sidebarOpen} />
      <Outlet />
    </Box>
  );
};
export default Base;
