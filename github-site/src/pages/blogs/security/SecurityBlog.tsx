import { Link, useResolvedPath } from "react-router-dom";
import { BlogFooter, BlogHeader } from "../BlogsCommon";

import { routes } from "./routes";
import { useMediaQuery } from "@mui/material";

const SecurityBlog: React.FC = () => {
  const backToBlogsPath = useResolvedPath("..").pathname;
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  return (
    <>
      <BlogHeader title="Security Blogs" />
      <div className="blog-wrapper">
        <h2>Blogs</h2>
        <ul>
          {routes.map((route) => (
            <li key={route.path} className="blog-topic-item">
              <div>
                <p>{route.date}</p>
                <Link
                  to={route.path}
                  viewTransition={prefersReducedMotion ? undefined : true}
                >
                  {route.text}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <BlogFooter to={backToBlogsPath} backToText="Back to Blogs" />
    </>
  );
};
export default SecurityBlog;
