import { Link, Route, Routes } from "react-router-dom";
import { CS373BlogHome } from "./cs373/BlogHome";

const topics = [
  { path: "cs373/*", to: "cs373", text: "CS373", element: <CS373BlogHome /> },
];

export const BlogTopics: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="wrapper">
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
