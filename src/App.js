import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRoutes } from "./routes/routes";
import cryptoniteTheme from "./theme/cryptoniteTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={cryptoniteTheme}>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
