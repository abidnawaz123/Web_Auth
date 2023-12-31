import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./layout/dashboard/Dashboard";
import Signup from "./layout/signInScreen/Signup";
import LoginScreen from "./layout/LoginScreen/LoginScreen";

export const customRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    { path: "/login", element: <LoginScreen /> },
    { path: "/signup", element: <Signup /> },
])
