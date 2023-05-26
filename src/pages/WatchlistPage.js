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
  const { loading, error, data } = useQuery(GET_COIN_DETAILS, {
    variables: {
      ids: [
        "bitcoin",
        "ethereum",
        "ethereum-cash",
        "ethereum-classic",
        "ethereumfair",
        "eloin",
        "elo-inu",
        "elondoge-dao",
        "elon-doge-token",
        "elongate-duluxe",
        "elon-goat",
        "elon-musk-ceo",
        "elons-marvin",
        "drive-crypto",
        "drivenx",
        "droparb",
        "drops-ownership-power",
        "drunk-robots",
        "drunk-skunks-drinking-club",
        "dsc-mix",
        "dshares",
        "d-shop",
        "dsquared-finance",
        "dsun-token",
        "cosmic-fomo",
        "cosmicswap",
        "cosmic-universe-magic-token",
        "cosmos",
        "cosplay-token-2",
        "coti",
        "cotrader",
        "cougar-token",
        "counosx",
        "counterparty",
        "couponbay",
        "covalent",
        "covalent-cova",
        "covenant-child",
        "covercompared",
        "cover-protocol",
      ],
    },
  });

  // const { loading, error, data } = useQuery(GET_COIN_HISTORY, {
  //   variables: {
  //     coinHistoryId: "bitcoin",
  //   },
  // });

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
    { name: "USD", key: "usd" },
    { name: "Change", key: "usd_24h_change" },
    { name: "Volume", key: "usd_24h_vol" },
    { name: "Market Cap", key: "usd_24h_vol" },
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
            <CustomizedTable data={data?.coinDetails || []} columns={columns} />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
export default WatchListPage;
