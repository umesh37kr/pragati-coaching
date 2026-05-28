import MobileSidebar from "./MobileSidebar";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-5">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <h1 className="text-lg font-semibold">Pragati Coaching Dashboard</h1>
      </div>

      <div>Admin</div>
    </header>
  );
}
