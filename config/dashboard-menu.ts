import {
  LayoutDashboard,
  Bell,
  GraduationCap,
  UserRoundSearch,
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
    title: "Contact",
    href: "/dashboard/contacts",
    icon: UserRoundSearch,
  },
  //   {
  //     title: "Settings",
  //     href: "/dashboard/settings",
  //     icon: Settings,
  //   },
];
