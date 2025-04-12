import { RouteObject } from "react-router-dom";
import NodeBKS from "./encryption/NodeBKS";

export const routes = [
  {
    path: "nodebks",
    text: "Read Bouncy Castle Keystore in Nodejs",
    date: "April 5, 2025",
    element: (
      <NodeBKS
        date={"April 5, 2025"}
        title={"Read Bouncy Castle Keystore in Nodejs"}
      />
    ),
  },
];

export const securityBlogRoutes: RouteObject[] = [
  ...routes.map((route) => ({
    path: route.path,
    element: route.element,
  })),
];
