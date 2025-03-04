"use client";

import UserProvider from "@/context/UserContext";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
};

export default Providers;
