import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./blogs-common.scss";
import { Link, Typography } from "@mui/material";

type BlogHeaderProps = { title: string };

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
}: BlogHeaderProps) => {
  return (
    <div className="blog-title">
      <Typography variant="h1">{title}</Typography>
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
      <Link component={NavLink} to={to || ".."}>
        {backToText}
      </Link>
      <Link href="https://github.com/JCollins0" target="_blank">
        <GitHubIcon />
        JCollins0
      </Link>
    </footer>
  );
};
