import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { ErrorPage } from "../pages/user/ErrorPage";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Course } from "../pages/user/Course";
import { CourseDetails } from "../pages/user/CourseDetails";
import { LoginPage } from "../pages/shared/LoginPage";
import { ProtectRoute } from "./ProtectRoute";



export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout  />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "signup",
                element: <h2>Sign-up page</h2>,
            },

            {
                path: "login",
                element: <LoginPage />,
            },

            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "course",
                element: <Course />,
            },
            {
                path: "course-details/:id",
                element: <CourseDetails />,
            },
            {
                path: "user",
                element : <ProtectRoute  />,
                children: [
                    {
                        path: "profile",
                        element: <h2>user profile </h2>,
                    },
                    {
                        path: "cart",
                        element: <h2>user cart </h2>,
                    },
                    {
                        path: "wishlist",
                        element: <h2>user wishlist </h2>,
                    },
                    {
                        path: "orders",
                        element: <h2>orders</h2>,
                    },
                ],
            },
        ],
    },

    {
        path: "mentor",
        // element: ,
        children: [
            {
                path: "login",
                element: <LoginPage role="mentor" />,
            },
        ],
    },
]);
