import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ margin: "4px", backgroundColor: props.color }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Check it out
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Crypto-Nite is rated as one of the best apps in the industry!
        </Typography>
        <Typography variant="body2">
          {'"The app really knows what you need"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="secondary" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
