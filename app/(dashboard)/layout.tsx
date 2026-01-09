import React from "react";
import DashboardClientLayout from "./DashboardClientLayout";

function layout({ children }: { children: React.ReactNode }) {
  return <DashboardClientLayout>{children}</DashboardClientLayout>;
}

export default layout;
