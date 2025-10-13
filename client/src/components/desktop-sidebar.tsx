import { Link, useLocation } from "wouter";
import { Home, TrendingUp, Wallet, LinkIcon, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FinGuardLogo } from "@/components/finguard-logo";

export function DesktopSidebar() {
  const [location] = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/insights", icon: TrendingUp, label: "Spending Insights" },
    { path: "/budget", icon: Wallet, label: "Budgeting" },
    { path: "/bank-linking", icon: LinkIcon, label: "Link Bank" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="hidden md:block w-64 border-r border-border bg-sidebar h-screen sticky top-0">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/dashboard">
            <a className="flex items-center gap-2">
              <FinGuardLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-sidebar-foreground">FinGuard</span>
            </a>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.path;
            
            return (
              <Link key={item.path} href={item.path}>
                <a
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                  }`}
                  data-testid={`sidebar-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-sidebar-border">
          <Link href="/settings">
            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent/50 transition-colors" data-testid="sidebar-profile">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sidebar-foreground truncate">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground truncate">sarah@email.com</p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </aside>
  );
}
