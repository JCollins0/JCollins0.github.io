import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { Header } from "./shared/components/Header";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: true,
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? "#4392f9" : "#fff",
          },
        },
        typography: {
          h1: {
            fontSize: "2em",
            marginBlockStart: ".67em",
          },
          h2: {
            fontSize: "1.5em",
            marginBlock: ".83em",
          },
          h3: {
            fontSize: "1.25em",
          },
          h4: {
            fontSize: "1.125em",
          },
          h5: {
            fontSize: "1em",
          },
          h6: {
            fontSize: "1em",
          },
        },
        components: {
          MuiLink: {
            styleOverrides: {
              root: {
                textDecoration: "none",
                color: "#4392f9",
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <ScrollRestoration />
      <CssBaseline />
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
