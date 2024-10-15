import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { ErrorPage } from "../pages/user/ErrorPage";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { Contact } from "../pages/user/Contact";
import { Course } from "../pages/user/Course";
import { CourseDetails } from "../pages/user/CourseDetails";
import { LoginPage } from "../pages/shared/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "signup",
                element: <h2>Sign-up page</h2>
            },

            {
                path: "login",
                element :<LoginPage />
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
        ],
    },
]);