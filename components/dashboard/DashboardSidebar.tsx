"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardMenu } from "@/config/dashboard-menu";
import clsx from "clsx";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-5">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {dashboardMenu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                pathname === item.href
                  ? "bg-black text-white"
                  : "hover:bg-gray-100",
              )}
            >
              <Icon size={18} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
