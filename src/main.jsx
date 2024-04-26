import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import FirbaseProvider from "./FirbaseProvider/FirbaseProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirbaseProvider>
      <RouterProvider router={router} />
    </FirbaseProvider>
  </React.StrictMode>
);
