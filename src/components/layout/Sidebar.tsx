import Sider from "antd/es/layout/Sider";
import adminDashboardPath from "../../routes/admin.routes";
import { Menu } from "antd";
import sidebarMenuGenerator from "../../utils/sidebarMenuGenerator";
import roles from "../../constant/role";
import studentDashboardPath from "../../routes/student.route";
import facultyDashboardPath from "../../routes/faculty.route";
import type { TUserItem } from "../../types";

const Sidebar = () => {
  const role = "admin";
  let menuItems: TUserItem[] = [];

  switch (role) {
    case roles.ADMIN:
      menuItems = adminDashboardPath;
      break;
    case roles.STUDENT:
      menuItems = studentDashboardPath;
      break;
    case roles.FACULTY:
      menuItems = facultyDashboardPath;
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        className="demo-logo-vertical"
        style={{
          color: "white",
          fontSize: "30px",
          width: "full",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        LZ University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarMenuGenerator(menuItems, role)}
      />
    </Sider>
  );
};

export default Sidebar;
