import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppTranslation } from "../app/hooks";

export default function BasicCard(props) {
  const { t } = useAppTranslation();

  return (
    <Card sx={{ margin: "4px", backgroundColor: props.color }}>
      <CardContent>
        <Typography sx={{ fontSize: 16, fontWeight: "600" }} color="text.secondary" gutterBottom>
          {t("Reviews from our best customers")}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {t("Crypto-Nite is rated as one of the best apps in the industry!")}
        </Typography>
        <Typography variant="body2">
          '{t("The app really knows what you need")}'
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">
          {t("Learn more")}
        </Button>
      </CardActions>
    </Card>
  );
}
