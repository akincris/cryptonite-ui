import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useAppTranslation } from "../../app/hooks";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";

function MainFeaturedPost(props) {
  const { color, accountData, avatarColor } = props;
  const { t } = useAppTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: color,
        color: "#fff",
        mb: 4,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.1)",
        }}
      />
      <Grid container>
        <Grid md={2} item>
          <Box
            sx={{
              position: "relative",
              p: { xs: 2, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Avatar
              sx={{
                width: matches ? 60 : 150,
                height:  matches ? 60 : 150,
                bgcolor: avatarColor,
                color: "white",
              }}
              {...stringAvatar(accountData.name)}
            />
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 2, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant={matches ? "h5" : "h4"}
              color="inherit"
              gutterBottom
            >
              {accountData.name}
            </Typography>
            <Typography  variant={matches ? "h6" : "h4"} color="inherit" paragraph>
              {accountData.location}
            </Typography>
            <Link sx={{ fontWeight: "600" }} variant="subtitle1" href="#">
              {accountData.link}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;
