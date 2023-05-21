import apiReducer from "../reducers/crypto";

const cryptoniteApi = apiReducer.injectEndpoints({
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => ({
        url: "/coins/list",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCoinsQuery } = cryptoniteApi;
