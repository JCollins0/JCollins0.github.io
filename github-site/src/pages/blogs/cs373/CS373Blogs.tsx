import { BlogFooter } from "../BlogsCommon";
import { blogPostDataMap } from "./CS373BlogData";
import { BlogPost } from "../../../shared/components/BlogPost";
export type CS373BlogData = {
  path: string;
  text: string;
  date: string;
};

type CS373BlogProps = {
  blogPage: CS373BlogData;
};

export const CS373Blogs: React.FC<CS373BlogProps> = ({ blogPage }) => {
  return (
    <>
      {blogPostDataMap.has(blogPage.path) ? (
        <BlogPost
          title={blogPage.text}
          date={blogPage.date}
          showImage={true}
          data={blogPostDataMap.get(blogPage.path) ?? []}
        />
      ) : (
        <></>
      )}
      <BlogFooter backToText="Back to CS373 Blogs" />
    </>
  );
};
