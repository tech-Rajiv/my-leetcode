import { X, ArrowDownAZ, CodeXml, Code } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: ArrowDownAZ, label: "Dashboard", path: "/", count: 15 },
  { icon: Code, label: "Arrays", path: "/arrays", count: 5 },
  { icon: Code, label: "Strings", path: "/strings", count: 8 },
  { icon: Code, label: "Algorithms", path: "/algorithms", count: 2 },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-300 ease-in-out flex flex-col
          lg:translate-x-0 lg:z-auto lg:h-screen lg:sticky lg:top-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-bold text-sm text-primary-foreground">
                LC
              </span>
            </div>
            <span className="font-semibold text-sidebar-foreground">
              Acme Inc
            </span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-sidebar-accent text-sidebar-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                    pathname === item.path
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}{" "}
                  <span className="opacity-60">({item.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-sidebar-border shrink-0">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs font-medium">
                JD
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                john@acme.com
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
