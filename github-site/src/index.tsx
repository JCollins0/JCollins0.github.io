import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import HomeComponent from "./pages/home/Home";
import { BlogTopics } from "./pages/blogs/BlogTopics";
import { Projects } from "./pages/projects/Projects";
import { createBrowserRouter } from "react-router-dom";
import { Outlet, RouterProvider } from "react-router";
import NotFoundComponent from "./pages/errors/NotFound";
import { blogRoutes } from "./pages/blogs/routes";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeComponent /> },
      {
        path: "/blogs",
        element: (
          <div className="blogs-container">
            <Outlet />
          </div>
        ),
        children: [{ index: true, element: <BlogTopics /> }, ...blogRoutes],
      },
      { path: "/projects", element: <Projects /> },
      { path: "*", element: <NotFoundComponent /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
