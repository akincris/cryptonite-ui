import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";

const LoginForm = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <Card sx={{ width: matches ? 290 : 370, zIndex: 11, backgroundColor : theme.palette.secondary.lighter, opacity: 0.9 }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "35px", margin : "12px" }}
          >
            <TextField
              size={matches ? "small" : "medium"}
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              size={matches ? "small" : "medium"}
              label="Password"
              placeholder="Enter your password"
            />
          </CardContent>
          <CardActions sx={{ justifyContent: "center", margin: "6px" }}>
            <Button sx={{color: "white"}} size="medium">login</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
export default LoginForm;
