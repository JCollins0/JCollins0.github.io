import { NavLink } from "react-router-dom";
import { topics } from "./routes";
import { Link, Typography } from "@mui/material";

export const BlogTopics: React.FC = () => {
  return (
    <div className="blog-wrapper">
      <Typography variant="h1">Blogs</Typography>
      <ul>
        {topics.map((topic) => (
          <li key={topic.path} className="blog-topic-item">
            <Link component={NavLink} to={topic.to}>
              {topic.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
