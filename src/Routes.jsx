import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import NeedVolunteer from "./NeedVolunteer/NeedVolunteer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/need&volunteer",
                element: <NeedVolunteer></NeedVolunteer>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;