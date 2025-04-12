import { Link } from "react-router-dom";
import { topics } from "./routes";

export const BlogTopics: React.FC = () => {
  return (
    <div className="blog-wrapper">
      <h1>Blogs</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.path} className="blog-topic-item">
            <Link to={topic.to}>{topic.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
