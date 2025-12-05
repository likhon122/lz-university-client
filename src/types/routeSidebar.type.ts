import type { ReactNode } from "react";

export type TAdminRoutePathAcc = {
  path: string;
  element: ReactNode;
};

export type TUserItem = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserItem[];
};

export type TAdminMenu = {
  key: string;
  label: ReactNode;
  children?: TAdminMenu[];
};
