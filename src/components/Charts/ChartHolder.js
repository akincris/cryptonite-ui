import { Grid, Paper, styled, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useAppTranslation } from "../../app/hooks";
import BasicCard from "../Card";
import ListedBars from "../ListedBars";
import LineGraphic from "./Line";
import AnimatedSunburst from "./SunBurst";

const ChartHolder = () => {
  const theme = useTheme();
  const { t } = useAppTranslation();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lighter,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid container spacing={2} sx={{ padding: "14px" }}>
      <Grid item md={8} xs={14}>
        <Item>
          <AnimatedSunburst />
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography>Date: February 23, 2023</Typography>
                <Typography>Time: 4.03 AM</Typography>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
          </Box>
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <ListedBars
            color={theme.palette.mode === "light" ? "#c4e1c8" : "#121b21"}
          />
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <BasicCard color={theme.palette.primary.main} />
        </Item>
      </Grid>
      <Grid item xs={12} md={8}>
        <Item sx={{ display: "flex", flexDirection: "col" }}>
          <LineGraphic />
          <div>last month data</div>
        </Item>
      </Grid>
    </Grid>
  );
};
export default ChartHolder;
