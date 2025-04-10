import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./blogs-common.scss";

type BlogHeaderProps = { title: string };

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
}: BlogHeaderProps) => {
  return (
    <div className="blog-title">
      <h1 style={{ margin: "0" }}>{title}</h1>
    </div>
  );
};

type BlogFooterProps = { to?: string; backToText: string };

export const BlogFooter: React.FC<BlogFooterProps> = ({
  to,
  backToText,
}: BlogFooterProps) => {
  return (
    <footer className="blog-footer">
      <Link to={to || ".."}>{backToText}</Link>
      <a href="https://github.com/JCollins0">
        <GitHubIcon />
        JCollins0
      </a>
    </footer>
  );
};
