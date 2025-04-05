import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { BlogTopics } from "./pages/blogs/BlogTopics";
import { Projects } from "./pages/projects/Projects";
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
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/blogs/*" element={<BlogTopics />}></Route>
        <Route path="/projects/*" element={<Projects />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
