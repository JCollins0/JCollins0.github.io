import { Route, Routes } from "react-router-dom";
import myImage from "../../../assets/images/jonathan.jpg";
import { BlogFooter, BlogHeader } from "../BlogsCommon";
import { blogPostDataMap, BlogPostData } from "./BlogData";
import "./blogs.scss";

type BlogProps = {
  title: string;
  date: string;
  data: BlogPostData;
};
type BlogComponent = React.FC<BlogProps>;

const BlogPost: BlogComponent = ({ title, date, data }: BlogProps) => {
  return (
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="date">{date}</p>
      <img src={myImage} alt="jonathan" className="my-image"></img>
      {data.map(({ heading, paragraph }) => (
        <div key={heading}>
          <h2 className="heading">{heading}</h2>
          <p className="paragraph">{paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export const cs373BlogData = [
  {
    path: "week1",
    text: "Week One",
    date: "Sep 2, 2018",
  },
  {
    path: "week2",
    text: "Week Two",
    date: "Sep 9, 2018",
  },
  {
    path: "week3",
    text: "Week Three",
    date: "Sep 16, 2018",
  },
  {
    path: "week4",
    text: "Week Four",
    date: "Sep 22, 2018",
  },
  {
    path: "week5",
    text: "Week Five",
    date: "Sep 30, 2018",
  },
  {
    path: "week6",
    text: "Week Six",
    date: "Oct 7, 2018",
  },
  {
    path: "week7",
    text: "Week Seven",
    date: "Oct 14, 2018",
  },
  {
    path: "week8",
    text: "Week Eight",
    date: "Oct 21, 2018",
  },
  {
    path: "week9",
    text: "Week Nine",
    date: "Oct 28, 2018",
  },
  {
    path: "ethics",
    text: "Ethical Engineer",
    date: "Oct 30, 2018",
  },
  {
    path: "week10",
    text: "Week Ten",
    date: "Nov 4, 2018",
  },
  {
    path: "week11",
    text: "Week Eleven",
    date: "Nov 11, 2018",
  },
  {
    path: "week12",
    text: "Week Twelve",
    date: "Nov 18, 2018",
  },
  {
    path: "week13",
    text: "Week Thirteen",
    date: "Dec 2, 2018",
  },
  {
    path: "final",
    text: "Final Entry",
    date: "Dec 11, 2018",
  },
];

export const CS373Blogs: React.FC = () => {
  return (
    <>
      <Routes>
        {cs373BlogData.map((blogPage) => (
          <Route
            key={blogPage.path}
            {...{
              ...blogPage,
              element: (
                <div className="fade-in">
                  <BlogHeader title="CS373 Fall 2018" />
                  <main>
                    {blogPostDataMap.has(blogPage.path) ? (
                      <BlogPost
                        title={blogPage.text}
                        date={blogPage.date}
                        data={blogPostDataMap.get(blogPage.path) ?? []}
                      />
                    ) : (
                      <></>
                    )}
                  </main>
                  <BlogFooter backToText="Back to CS373 Blogs" />
                </div>
              ),
            }}
          ></Route>
        ))}
      </Routes>
    </>
  );
};
