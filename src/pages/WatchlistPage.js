import { Grid, Paper, styled, Typography } from "@mui/material";
import BasicCarousel from "../components/Carousel";
import CustomizedTable from "../components/CustomTable";

const WatchListPage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lighter,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  const columns = [
    { name: "Name", key: "name" },
    { name: "Price", key: "price" },
    { name: "Chart", key: "chart" },
    { name: "Change", key: "change" },
    { name: "Market Cap", key: "marketCap" },
  ];
  const rows = [
    {
      name: "Bitcoin",
      price: 23829,
      chart: "something",
      change: "36.88%",
      marketCap: 460,
    },
    {
      name: "Ethereum",
      price: 1.62,
      chart: "something",
      change: "37.80%",
      marketCap: 80,
    },
    {
      name: "Tether",
      price: 23.829,
      chart: "something",
      change: "18.23%",
      marketCap: 380,
    },
    {
      name: "XRP",
      price: 9.023,
      chart: "something",
      change: "6.49%",
      marketCap: 434,
    },
    {
      name: "USD Coin",
      price: 22.894,
      chart: "something",
      change: "19.88%",
      marketCap: 260,
    },
    {
      name: "Ethereum",
      price: 1.62,
      chart: "something",
      change: "37.80%",
      marketCap: 80,
    },
    {
      name: "Tether",
      price: 23.829,
      chart: "something",
      change: "18.23%",
      marketCap: 380,
    },
    {
      name: "XRP",
      price: 9.023,
      chart: "something",
      change: "6.49%",
      marketCap: 434,
    },
    {
      name: "USD Coin",
      price: 22.894,
      chart: "something",
      change: "19.88%",
      marketCap: 260,
    },
  ];
  return (
    <>
      <Grid container maxWidth={2000} spacing={2} sx={{ padding: "14px" }}>
        <Grid item xs={12}>
          <Item>
            <Typography fontWeight={600} variant="h4" gutterBottom>
              Watch List
            </Typography>
            <Grid container>
              <Grid xs={6} item>
                <BasicCarousel num={0} items={items} />
              </Grid>
              <Grid xs={6} item>
                <BasicCarousel num={1} items={items} />
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <CustomizedTable data={rows} columns={columns} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
export default WatchListPage;
