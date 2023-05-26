import { gql } from "@apollo/client";

export const GET_COINS = gql`
  query coins {
    coins {
      id
      name
      symbol
    }
  }
`;

export const GET_COIN_DETAILS = gql`
  query coinDetails($ids: [String]) {
    coinDetails(ids: $ids) {
      name
      usd
      usd_market_cap
      usd_24h_vol
      usd_24h_change
      last_updated_at
    }
  }
`;

export const GET_COIN_HISTORY = gql`
  query coinHistory($coinHistoryId: String) {
    coinHistory(id: $coinHistoryId) {
      id
      symbol
      name
      image {
        thumb
        small   
      }
    }
  }
`;
