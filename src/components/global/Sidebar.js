import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material";
import { Person } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import PublicIcon from "@mui/icons-material/Public";
import { useAppTranslation } from "../../app/hooks";

const Sidebar = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useAppTranslation();

  const firstPartItems = [
    { text: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { text: "News", path: "/account", icon: <NewspaperIcon /> },
    { text: "World top", path: "/account", icon: <PublicIcon /> },
  ];

  const secondPartItems = [
    { text: "Watch List", path: "/watchList", icon: <RemoveRedEyeIcon /> },
    { text: "My Account", path: "/account", icon: <Person /> },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {firstPartItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondPartItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={t(item.text)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      container={window.document.body}
      variant="temporary"
      open={props.open}
      onClose={props.handleClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 300,
          backgroundColor: theme.palette.primary.lighter,
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};
export default Sidebar;
