"use client";

import { useUser } from "@/context/UserContext";
import {
  ArrowRightLeft,
  BadgeDollarSign,
  CreditCard,
  Home,
  LayoutDashboard,
  LayoutList,
  List,
  Users,
} from "lucide-react";

const DashboardRoutes = () => {
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
        url: `/${user?.role}/my-listing`,
        icon: LayoutList,
        isNotCollapsible: true,
      },
      {
        title: "My Sales",
        url: `/${user?.role}/my-sales`,
        icon: BadgeDollarSign,
        isNotCollapsible: true,
      },
      {
        title: "My Purchases",
        url: `/${user?.role}/my-purchases`,
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
      {
        title: "User Management",
        url: `/${user?.role}/user-management`,
        icon: Users,
        isNotCollapsible: true,
      },
      {
        title: "Listing Management",
        url: `/${user?.role}/listing-management`,
        icon: List,
        isNotCollapsible: true,
      },
      {
        title: "Transactions",
        url: `/${user?.role}/transaction-management`,
        icon: ArrowRightLeft,
        isNotCollapsible: true,
      },
    ];
  }
};

export default DashboardRoutes;
