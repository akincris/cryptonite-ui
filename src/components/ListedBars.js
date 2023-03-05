import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material";
import { useAppTranslation } from "../app/hooks";

export default function ListedBars(props) {
  const theme = useTheme();
  const { t } = useAppTranslation();
  return (
    <List
      sx={{
        width: "100%",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
      }}
      aria-label="contacts"
    >
      {[1, 2, 3, 4, 5, 4, 3, 4, 3, 4, 4].map((item, index) => {
        return (
          <ListItem key={index}>
            <ListItemButton sx={{ backgroundColor: props.color }}>
              <ListItemIcon>
                <StarIcon sx={{ color: theme.palette.secondary.main }} />
              </ListItemIcon>
              <ListItemText secondary={t("Coin price from GraphQL")} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
