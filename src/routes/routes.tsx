import { createBrowserRouter } from "react-router";
import App from "../App";
import adminDashboardPath from "./admin.routes";
import routeGenerator from "../utils/routeGenerator";
import studentDashboardPath from "./student.route";
import facultyDashboardPath from "./faculty.route";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminDashboardPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentDashboardPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyDashboardPath),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
