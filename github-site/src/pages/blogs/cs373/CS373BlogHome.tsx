import { NavLink, useResolvedPath } from "react-router-dom";
import { cs373BlogData } from "./routes";
import { BlogFooter, BlogHeader } from "../BlogsCommon";
import { Link, Typography, useMediaQuery } from "@mui/material";

export const CS373BlogHome: React.FC = () => {
  const backToBlogsPath = useResolvedPath("..").pathname;
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  return (
    <>
      <BlogHeader title="CS373 Fall 2018" />
      <div className="blog-wrapper">
        <ul>
          {cs373BlogData.map((blogPage) => (
            <li key={blogPage.path} className="blog-topic-item">
              <div>
                <Typography>{blogPage.date}</Typography>
                <Link
                  component={NavLink}
                  to={blogPage.path}
                  viewTransition={prefersReducedMotion ? undefined : true}
                  style={{
                    contain: "layout",
                  }}
                >
                  {blogPage.text}
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
