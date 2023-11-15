import { ReactNode } from "react";

type SideNavProps = {
  children: ReactNode;
};

const SideNav = ({ children }: SideNavProps) => {
  return <div className="flex flex-col w-1/3 h-full">{children}</div>;
};

export default SideNav;
