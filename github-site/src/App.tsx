import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { BlogTopics } from "./pages/blogs/BlogTopics";
import { Projects } from "./pages/projects/Projects";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { Examples } from "./pages/examples/Examples";

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

      <Routes>
        <Route
          path="/"
          element={
            <ul>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="examples">Examples</Link>
              </li>
            </ul>
          }
        ></Route>
        <Route path="/blogs/*" element={<BlogTopics />}></Route>
        <Route path="/projects/*" element={<Projects />}></Route>
        <Route path="/examples/*" element={<Examples />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
