import { Link, Route, Routes, useResolvedPath } from "react-router-dom";
import { BlogFooter, BlogHeader } from "../BlogsCommon";
import NodeBKS from "./encryption/NodeBKS";

const routes = [
  {
    path: "nodebks",
    text: "Read Bouncy Castle Keystore in Nodejs",
    date: "April 5, 2025",
    element: (
      <NodeBKS
        date={"April 5, 2025"}
        title={"Read Bouncy Castle Keystore in Nodejs"}
      />
    ),
  },
];

const SecurityBlog: React.FC = () => {
  const backToBlogsPath = useResolvedPath("..").pathname;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="blogs-container">
            <BlogHeader title="Security Blogs" />
            <div className="blog-wrapper">
              <h2>Blogs</h2>
              <ul>
                {routes.map((route) => (
                  <li key={route.path} className="blog-item">
                    <div>
                      <p>{route.date}</p>
                      <Link to={route.path}>{route.text}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <BlogFooter to={backToBlogsPath} backToText="Back to Blogs" />
          </div>
        }
      ></Route>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <div className="blogs-container">
              <div className="fade-in">{route.element}</div>
            </div>
          }
        ></Route>
      ))}
    </Routes>
  );
};
export default SecurityBlog;
