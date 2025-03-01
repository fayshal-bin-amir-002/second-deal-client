import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-72px)]">{children}</main>
    </>
  );
};

export default CommonLayout;
