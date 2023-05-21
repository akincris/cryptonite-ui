import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Skeleton, useTheme } from "@mui/material";
import { useAppTranslation } from "../app/hooks";
import { GET_COINS } from "../api/queries";
import { useQuery } from "@apollo/client";

export default function ListedBars(props) {
  const theme = useTheme();
  const { t } = useAppTranslation();
  const { loading, error, data } = useQuery(GET_COINS);
  const coins = data?.coins.slice(0, 50);
  const returnComponent = () => {
    if (data) {
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
          {coins.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemButton sx={{ backgroundColor: props.color }}>
                  <ListItemIcon>
                    <StarIcon sx={{ color: theme.palette.secondary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "white" }}
                    secondary={t("Coin from CryptoNite")}
                  />{" "}
                  <span
                    style={{
                      fontWeight: 800,
                      fontFamily: "monospace",
                      fontSize: "16px",
                    }}
                  >
                    {item.name.toUpperCase()}
                  </span>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );
    } else {
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
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return (
              <ListItem key={index}>
                <Skeleton height={"40px"} width={"100%"} animation="wave" />
              </ListItem>
            );
          })}
        </List>
      );
    }
  };
  return returnComponent();
}
