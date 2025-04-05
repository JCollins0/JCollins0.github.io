import { Link, Route, Routes, useResolvedPath } from "react-router-dom";
import { cs373BlogData, CS373Blogs } from "./CS373Blogs";
import { BlogFooter, BlogHeader } from "../BlogsCommon";

export const CS373BlogHome: React.FC = () => {
  const backToBlogsPath = useResolvedPath("..").pathname;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="blogs-container">
            <BlogHeader title="CS373 Fall 2018" />
            <div className="blog-wrapper">
              <h2>Blogs</h2>
              <ul>
                {cs373BlogData.map((blogPage) => (
                  <li key={blogPage.path} className="blog-item">
                    <div>
                      <p>{blogPage.date}</p>
                      <Link to={blogPage.path}>{blogPage.text}</Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <BlogFooter to={backToBlogsPath} backToText="Back to Blogs" />
          </div>
        }
      ></Route>
      <Route path="/*" element={<CS373Blogs></CS373Blogs>}></Route>
    </Routes>
  );
};
