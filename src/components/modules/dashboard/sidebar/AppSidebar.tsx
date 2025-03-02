"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import NavMain from "./NavMain";
import dashboardRoutes from "@/routes/DashboardRoutes";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const routes = dashboardRoutes();
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
