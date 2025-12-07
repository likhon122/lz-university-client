import GetAllAcademicSemester from "../pages/academicSemester/getAllAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateStudent from "../pages/student/CreateStudent";

const adminDashboardPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    name: "Semester Management",
    children: [
      {
        name: "All Academic Semesters",
        path: "get-all-academic-semesters",
        element: <GetAllAcademicSemester />,
      },
    ],
  },
];

export default adminDashboardPath;
