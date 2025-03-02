"use client";

import { useUser } from "@/context/UserContext";
import {
  BadgeDollarSign,
  CreditCard,
  Home,
  LayoutDashboard,
  LayoutList,
} from "lucide-react";

const dashboardRoutes = () => {
  const { user } = useUser();
  if (user?.role === "user") {
    return [
      {
        title: "Home",
        url: "/",
        icon: Home,
        isNotCollapsible: true,
      },
      {
        title: "Dashboard",
        url: `/${user?.role}/dashboard`,
        icon: LayoutDashboard,
        isNotCollapsible: true,
      },
      {
        title: "My Listing",
        url: `/${user?.role}/listing`,
        icon: LayoutList,
        isNotCollapsible: true,
      },
      {
        title: "My Sales",
        url: `/${user?.role}/sales`,
        icon: BadgeDollarSign,
        isNotCollapsible: true,
      },
      {
        title: "My Purchases",
        url: `/${user?.role}/purchases`,
        icon: CreditCard,
        isNotCollapsible: true,
      },
    ];
  } else if (user?.role === "admin") {
    return [
      {
        title: "Home",
        url: "/",
        icon: Home,
        isNotCollapsible: true,
      },
      {
        title: "Dashboard",
        url: `/${user?.role}/dashboard`,
        icon: LayoutDashboard,
        isNotCollapsible: true,
      },
    ];
  }
};

export default dashboardRoutes;
