import { Link, Route, Routes } from "react-router-dom";
import { CS373BlogHome } from "./cs373/CS373BlogHome";
import WebDevBlog from "./web-dev/WebDevBlog";
import SecurityBlog from "./security/SecurityBlog";
import "./blog-home.scss";

const topics = [
  {
    path: "security/*",
    to: "security",
    text: "Security",
    element: <SecurityBlog />,
  },
  {
    path: "webdev/*",
    to: "webdev",
    text: "Web Development",
    element: <WebDevBlog />,
  },
  {
    path: "cs373/*",
    to: "cs373",
    text: "CS373 - Elements of SWE",
    element: <CS373BlogHome />,
  },
];

export const BlogTopics: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="blog-wrapper">
            <h1>Blogs</h1>
            <ul>
              {topics.map((topic) => (
                <li key={topic.path} className="blog-topic-item">
                  <Link to={topic.to}>{topic.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        }
      ></Route>
      {topics.map((topic) => (
        <Route key={topic.path} {...topic}></Route>
      ))}
    </Routes>
  );
};
