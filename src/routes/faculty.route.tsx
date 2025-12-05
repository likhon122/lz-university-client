import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import SelectCourse from "../pages/faculty/SelectCourse";

const facultyDashboardPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Select Course",
        path: "select-course",
        element: <SelectCourse />,
      },
    ],
  },
];

export default facultyDashboardPath;
