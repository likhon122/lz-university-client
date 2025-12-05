import { NavLink } from "react-router";
import type { TAdminMenu, TUserItem } from "../types";

const sidebarMenuGenerator = (items: TUserItem[], role: string) => {
  const adminMenu = items.reduce((acc: TAdminMenu[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminMenu;
};

export default sidebarMenuGenerator;
