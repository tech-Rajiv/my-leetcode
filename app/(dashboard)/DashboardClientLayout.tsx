"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";

function DashboardClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex w-full overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className=" flex flex-col w-full">
        <Header title="Dashboard" onMenuClick={() => setSidebarOpen(true)} />

        <main className=" p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardClientLayout;
