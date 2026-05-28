"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardMenu } from "@/config/dashboard-menu";
import clsx from "clsx";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-60 flex-col border-r bg-white">
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
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                pathname === item.href
                  ? "bg-amber-800 text-gray-100"
                  : "hover:bg-amber-700",
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
