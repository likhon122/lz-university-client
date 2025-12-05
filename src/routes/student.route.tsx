import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

const studentDashboardPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Course Management",
    children: [
      {
        name: "offered Courses",
        path: "offered-courses",
        element: <OfferedCourse />,
      },
    ],
  },
];

export default studentDashboardPath;
