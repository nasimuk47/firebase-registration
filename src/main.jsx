import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home";

import Register from "./register";

import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet></Outlet>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/Login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
