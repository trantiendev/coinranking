import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL

const createRequest = url => ({url, headers: cryptoApiHeader})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: builder => ({
    getCryptosStats: builder.query({
      query: () => createRequest('/stats')
    }),
    getCoins: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}&timePeriod=24h`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  })
})

export const {
  useGetCryptosStatsQuery,
  useGetCoinsQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery
} = cryptoApi