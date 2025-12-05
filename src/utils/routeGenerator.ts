import type { TAdminRoutePathAcc, TUserItem } from "../types";

const routeGenerator = (items: TUserItem[]) => {
  const routePaths = items.reduce((acc: TAdminRoutePathAcc[], item) => {
    if (item.path && item.element) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item.children) {
      item.children.forEach((child) => {
        if (child.path && child.element) {
          acc.push({ path: child.path, element: child.element });
        }
      });
    }
    return acc;
  }, []);
  return routePaths;
};

export default routeGenerator;
