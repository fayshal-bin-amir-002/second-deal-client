import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <div className="pb-12 md:pb-16 lg:pb-20">{children}</div>;
};

export default SectionContainer;
