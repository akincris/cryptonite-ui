import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, useTheme, useMediaQuery } from "@mui/material";
import { useAppTranslation } from "../app/hooks";

const BasicCarousel = (props) => {
  const theme = useTheme();
  const { items, num } = props;

  return (
    <Carousel
      sx={{ margin: "5px"}}
      autoPlay={true}
      indicators={false}
      interval={3000}
      duration={800}
    >
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          textColor={theme.palette.primary.main}
          color={
            i % 2 === num
              ? theme.palette.primary.ligher
              : theme.palette.secondary.lighter
          }
        />
      ))}
    </Carousel>
  );
};

function Item(props) {
  const { t } = useAppTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper
      sx={{
        maxWidth: "600px",
        height: matches ? "200px" : "300px",
        backgroundColor: props.color,
        border: "3px solid white",
      }}
    >
      <h2>{t(props.item.name)}</h2>
      <p>{t(props.item.description)}</p>

      <Button color="secondary" className="CheckButton">
        {t("Learn more")}
      </Button>
    </Paper>
  );
}
export default BasicCarousel;
