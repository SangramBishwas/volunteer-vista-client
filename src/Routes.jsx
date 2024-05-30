import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import NeedVolunteer from "./NeedVolunteer/NeedVolunteer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ErrorPage from "./ErrorPage";
import MyPost from "./Pages/My Post/MyPost";
import AddVolunteer from "./Pages/Add Volunteer/AddVolunteer";
import Details from "./NeedVolunteer/Details";
import PivateRoute from "./ContextAPI/PivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import MyProfile from "./Pages/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/posts/:id",
                element: <PivateRoute><Details></Details></PivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`)
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
    {
        path: "/dashboard",
        element: <PivateRoute><Dashboard></Dashboard></PivateRoute>,
        children: [
            {
                path: "/dashboard/my&profile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/dashboard/my&post",
                element: <MyPost></MyPost>
            },
            {
                path: "/dashboard/add&volunteer",
                element: <AddVolunteer></AddVolunteer>
            }
        ]
    }
]);

export default router;