import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "../../components/global/Navbar.js";

const Base = (props) => {
  return (
    <Box>
      <Navbar toggleTheme={props.toggleTheme} />
      <Outlet />
    </Box>
  );
};
export default Base;
