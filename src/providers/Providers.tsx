"use client";

import UserProvider from "@/context/UserContext";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
