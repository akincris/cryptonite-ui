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
    backgroundColor: theme.palette.primary.light,
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
                <Typography style={{ fontWeight: 800 }}>
                  Date: {new Date().toDateString()}
                </Typography>
                <Typography style={{ fontWeight: 700 }}>
                  Time: {new Date().getHours() + ":" + new Date().getMinutes()}{" "}
                </Typography>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Box>
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <ListedBars color={theme.palette.secondary.light} />
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
