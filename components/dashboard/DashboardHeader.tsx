"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import MobileSidebar from "./MobileSidebar";
import { logoutUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DashboardHeader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logoutUser();
      toast.success("Logged out successfully");
      router.replace("/");
      router.refresh();
    } catch (error) {
      toast.error("Failed to logout");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-5">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <h1 className="text-lg font-semibold">Pragati Coaching Dashboard</h1>
      </div>

      <div>
        <Button variant="destructive" onClick={handleLogout} disabled={loading}>
          {loading ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </header>
  );
}
