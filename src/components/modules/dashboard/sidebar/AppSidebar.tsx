"use client";

import * as React from "react";
import { Bot, Home, SquareTerminal } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "./NavMain";
import { useUser } from "@/context/UserContext";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const routes = [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isNotCollapsible: true,
    },
    {
      title: "Dashboard",
      url: `/${user?.role}/dashboard`,
      icon: Home,
      isNotCollapsible: true,
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      isNotCollapsible: true,
    },
  ];
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={routes} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
