"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent side="left" className="p-0">
            <DashboardSidebar onLinkClick={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
