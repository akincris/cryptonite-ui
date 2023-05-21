import { useTheme } from "@emotion/react";
import { Grid, Paper, styled, Typography, useMediaQuery } from "@mui/material";
import { useAppTranslation } from "../app/hooks";
import BasicCarousel from "../components/Carousel";
import CustomizedTable from "../components/CustomTable";
import { useQuery } from "@apollo/client";
import { GET_COIN_DETAILS, GET_COIN_HISTORY, GET_COINS } from "../api/queries";

const WatchListPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const { t } = useAppTranslation();
  // const { loading, error, data } = useQuery(GET_COIN_DETAILS, {
  //   variables: {
  //     ids: ["bitcoin", "historydao"],
  //   },
  // });

  const { loading, error, data } = useQuery(GET_COIN_HISTORY, {
    variables: {
      coinHistoryId: "bitcoin",
    },
  });
  console.log(data);

  var items1 = [
    {
      name: "Want some advices on trading?",
      description:
        "Click here to learn some tips from best traders on our platform",
    },
    {
      name: "Want to start on Crypto-Nite?",
      description: "Sign up to get the best experience and the best price!",
    },
  ];
  var items2 = [
    {
      name: "Bitcoin leads the board as usual! #1",
      description: "Click here to learn the latest news on Bitcoin",
    },
    {
      name: "Advices for you",
      description: "Check out where to trade your coins!",
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
      <Grid
        justifyContent={"center"}
        container
        spacing={2}
        sx={{ padding: "14px" }}
      >
        <Grid item xs={12}>
          <Item>
            <Typography
              fontWeight={700}
              color={theme.palette.secondary.light}
              variant="h4"
              gutterBottom
            >
              {t("Watch List")}
            </Typography>
            <Grid justifyContent={"center"} container>
              <Grid xs={12} sm={4} item>
                <BasicCarousel num={0} items={items1} />
              </Grid>
              <Grid xs={12} sm={4} item>
                <BasicCarousel num={1} items={items2} />
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
