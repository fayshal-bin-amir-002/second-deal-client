import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-72px-250px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
