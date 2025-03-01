import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default CommonLayout;
