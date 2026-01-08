"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DashboardLayout = ({
  children,
  title = "Dashboard",
}: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex w-full overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className=" flex flex-col w-full">
        <Header title={title} onMenuClick={() => setSidebarOpen(true)} />

        <main className=" p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
