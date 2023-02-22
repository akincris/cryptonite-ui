import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, useTheme } from "@mui/material";
import { useAppTranslation } from "../app/hooks";

const BasicCarousel = (props) => {
  const theme = useTheme();
  const { items, num } = props;

  return (
    <Carousel autoPlay={true} indicators={false} interval={3000} duration={800}>
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

  return (
    <Paper
      sx={{
        maxWidth: "600px",
        height: "300px",
        margin: "3px",
        backgroundColor: props.color,
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
