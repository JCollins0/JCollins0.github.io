import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./blogs-common.scss";

type BlogHeaderProps = { title: string };

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
}: BlogHeaderProps) => {
  return (
    <header>
      <h2 style={{ margin: "0" }}>{title}</h2>
    </header>
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
