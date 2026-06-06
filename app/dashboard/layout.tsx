import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden md:flex h-screen w-60 flex-col border-r bg-white">
        <DashboardSidebar />
      </div>

      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 p-5">{children}</main>
        <Toaster />
      </div>
    </div>
  );
}
