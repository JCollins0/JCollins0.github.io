import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/images/github_logo.svg";
import "./blogs-common.scss";

type BlogHeaderProps = { title: string };

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
}: BlogHeaderProps) => {
  return (
    <header>
      <h2>{title}</h2>
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
      <a href="github.com/JCollins0">
        <GithubIcon />
        JCollins0
      </a>
    </footer>
  );
};
