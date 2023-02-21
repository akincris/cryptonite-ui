import { Grid, Paper, styled, useTheme } from "@mui/material";
import BasicCard from "../Card";
import ListedBars from "../ListedBars";
import LineGraphic from "./Line";
import AnimatedSunburst from "./SunBurst";

const ChartHolder = () => {
  const theme = useTheme();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lighter,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid container spacing={2} sx={{ padding: "14px" }}>
      <Grid item md={8} xs={14}>
        <Item>
          <AnimatedSunburst />
        </Item>
      </Grid>
      <Grid item md={4} xs={8}>
        <Item><ListedBars color={theme.palette.mode === "light" ? "#c4e1c8" : "#121b21" } /></Item>
      </Grid>
      <Grid item xs={4}>
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
