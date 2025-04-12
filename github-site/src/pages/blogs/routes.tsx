import { RouteObject } from "react-router-dom";
import SecurityBlog from "./security/SecurityBlog";
import WebDevBlog from "./web-dev/WebDevBlog";
import { CS373BlogHome } from "./cs373/CS373BlogHome";
import { securityBlogRoutes } from "./security/routes";
import { cs373blogRoutes } from "./cs373/routes";

export const topics = [
  {
    path: "security",
    to: "security",
    text: "Security",
    children: [
      { index: true, element: <SecurityBlog /> },
      ...securityBlogRoutes,
    ],
  },
  {
    path: "webdev",
    to: "webdev",
    text: "Web Development",
    element: <WebDevBlog />,
  },
  {
    path: "cs373",
    to: "cs373",
    text: "CS373 - Elements of SWE",
    children: [{ index: true, element: <CS373BlogHome /> }, ...cs373blogRoutes],
  },
];

export const blogRoutes: RouteObject[] = [
  ...topics.map((topic) => ({
    path: topic.path,
    element: topic.element,
    children: topic.children,
  })),
];
