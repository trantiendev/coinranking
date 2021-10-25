import React from "react";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  News,
  NotFound,
  Homepage,
} from "./pages";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Homepage />,
  },
  {
    path: "/cryptocurrencies",
    exact: false,
    main: () => <Cryptocurrencies />,
  },
  {
    path: "/crypto/:coinId",
    exact: false,
    main: () => <CryptoDetails />,
  },
  {
    path: "/exchanges",
    exact: false,
    main: () => <Exchanges />,
  },
  {
    path: "/news",
    exact: false,
    main: () => <News />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
