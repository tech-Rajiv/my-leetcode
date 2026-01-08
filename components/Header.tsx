import { Menu, Bell, Search } from "lucide-react";

interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}

const Header = ({ title, onMenuClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-sidebar backdrop-blur border-b border-border">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 rounded-md hover:bg-muted text-foreground"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
