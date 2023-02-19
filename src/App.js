import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { useMemo, useState } from "react";
import "./App.css";
import { AppRoutes } from "./routes/routes";
import getDesignTokens from "./theme/cryptoniteTheme";


function App() {
  const [mode, setMode] = useState("light");
 
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes changeTheme={setMode}/>
      </ThemeProvider>
    </>
  );
}

export default App;
