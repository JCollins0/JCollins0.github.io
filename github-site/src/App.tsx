import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { BlogTopics } from "./pages/blogs/BlogTopics";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </ul>
          }
        ></Route>
        <Route path="/blogs/*" element={<BlogTopics />}></Route>
      </Routes>
    </>
  );
}

export default App;
