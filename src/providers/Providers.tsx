"use client";

import UserProvider from "@/context/UserContext";
import { ReactNode } from "react";
import StoreProvider from "./StoreProvider";
import { SocketProvider } from "@/context/SocketContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <StoreProvider>
        <SocketProvider>{children}</SocketProvider>
      </StoreProvider>
    </UserProvider>
  );
};

export default Providers;
