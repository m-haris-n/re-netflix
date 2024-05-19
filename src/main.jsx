import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home.jsx";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Login.jsx";
import App from "./Pages/App/App.jsx";
import Search from "./Pages/Search/Search.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/app",
      element: <App />,
   },
   {
      path: "/search",
      element: <Search />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <MantineProvider defaultColorScheme={"dark"}>
         <RouterProvider router={router} />
      </MantineProvider>
   </React.StrictMode>
);
