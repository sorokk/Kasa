import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import App from "./App";
import ArticlePage from "../src/components/Pages/Article/ArticlePage";
import APropos from "../src/components/Pages/Apropos/Apropos";

/*const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
            path: "/article/:id",
            element: <ArticlePage />,
            errorElement: <ErrorPage />,
            },
            {
            path: "/a-propos",
            element: <APropos />,
            errorElement: <ErrorPage />,
            },
        ]
    }  
]);*/



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);