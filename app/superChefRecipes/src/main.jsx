import React from "react";
import ReactDOM from "react-dom/client";
import Home, { loader as HomeLoader } from "./routes/home";
import Details from "./routes/details";
import Layout from "./routes/layout";
import ErrorPage from "./error-page";
import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: HomeLoader,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
