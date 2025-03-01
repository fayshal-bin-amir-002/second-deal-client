import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="py-12 md:py-16 lg:py-20">{children}</div>;
};

export default SectionContainer;
