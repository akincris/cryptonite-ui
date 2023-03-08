import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const CComponent = () => {
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
        <Typography
          sx={{
            fontSize: matches ? "250px" : "450px",
            fontWeight: "700",
            color: theme.palette.primary.main,
            opacity: 0.6,
          }}
        >
          C
        </Typography>
      </Box>
    </Box>
  );
};

export default CComponent;
