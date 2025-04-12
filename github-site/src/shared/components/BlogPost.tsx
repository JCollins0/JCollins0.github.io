import { useMediaQuery } from "@mui/material";
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
      <h1
        style={{
          viewTransitionName: prefersReducedMotion ? undefined : "blog-title",
          contain: "layout",
        }}
      >
        {title}
      </h1>
      <p className="date">{date}</p>
      {showImage && (
        <img src={myImage} alt="jonathan" className="my-image"></img>
      )}
      {data.map(({ id, heading, paragraph }) => (
        <div key={id}>
          {heading && <h2 className="heading">{heading}</h2>}
          <p className="paragraph">{paragraph}</p>
        </div>
      ))}
    </div>
  );
};
