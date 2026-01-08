import DashboardLayout from "@/components/DashboardLayout";
import { TrendingUp, Users, FolderOpen, Activity } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", icon: TrendingUp },
  { label: "Active Users", value: "2,350", change: "+15.2%", icon: Users },
  { label: "Projects", value: "12", change: "+2", icon: FolderOpen },
  { label: "Active Now", value: "573", change: "+201", icon: Activity },
];
export default function Home() {
  return (
    <div>Hii</div>
  );
}
