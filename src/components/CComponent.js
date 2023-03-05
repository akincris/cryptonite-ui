import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

const CComponent = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Box sx={{ margin: "auto" }}>
        <Typography
          sx={{
            fontSize: "450px",
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
