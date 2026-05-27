import {
  LayoutDashboard,
  Bell,
  GraduationCap,
  Users,
  Settings,
} from "lucide-react";

export const dashboardMenu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    title: "Notices",
    href: "/dashboard/notices",
    icon: Bell,
  },
  {
    title: "Teachers",
    href: "/dashboard/teachers",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
