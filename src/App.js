import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useMemo, useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { getLSValue, setLSValue } from "./app/localStorage";
import { store } from "./app/store";
import { AppRoutes } from "./routes/routes";
import getDesignTokens from "./theme/cryptoniteTheme";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api";

function App() {
  const [mode, setMode] = useState(getLSValue("theme") || "light");

  const changeTheme = (theme) => {
    setLSValue("theme", theme);
    setMode(theme);
  };

  const theme = useMemo(
    () =>
      createTheme(
        {
          breakpoints: {
            values: {
              xs: 0,
              s: 400,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            },
          },
        },
        getDesignTokens(mode)
      ),
    [mode]
  );

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <AppRoutes changeTheme={changeTheme} />
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
