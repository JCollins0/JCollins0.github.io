import { Typography, useMediaQuery } from "@mui/material";
import myImage from "../../assets/images/jonathan.jpg";

export type BlogPostData = Array<{
  id: number;
  heading?: string;
  paragraph: JSX.Element;
}>;

type BlogProps = {
  title: string;
  date: string;
  data: BlogPostData;
  showImage?: boolean;
};
type BlogComponent = React.FC<BlogProps>;

export const BlogPost: BlogComponent = ({
  title,
  date,
  data,
  showImage = false,
}: BlogProps) => {
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  return (
    <div className="content">
      <Typography
        variant="h1"
        sx={{
          viewTransitionName: prefersReducedMotion ? undefined : "blog-title",
          contain: "layout",
        }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" className="date">
        {date}
      </Typography>
      {showImage && (
        <img src={myImage} alt="jonathan" className="my-image"></img>
      )}
      {data.map(({ id, heading, paragraph }) => (
        <div key={id}>
          {heading && (
            <Typography variant="h2" className="heading">
              {heading}
            </Typography>
          )}
          <Typography variant="body1" className="paragraph">
            {paragraph}
          </Typography>
        </div>
      ))}
    </div>
  );
};
