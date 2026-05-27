"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";

export default function MobileSidebar() {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent side="left" className="p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
