import DashboardHeader from "@/ui/dashboard/dashboard-header";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashboardHeader />
      <div>
        {children}
      </div>
    </div>
  );
}
