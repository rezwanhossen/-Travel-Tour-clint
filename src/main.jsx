import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import FirbaseProvider from "./FirbaseProvider/FirbaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirbaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirbaseProvider>
  </React.StrictMode>
);
