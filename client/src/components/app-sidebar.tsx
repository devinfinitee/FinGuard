import { Link, useLocation } from "wouter";
import { Home, TrendingUp, Wallet, Link2, Settings, PiggyBank } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FinGuardLogo } from "@/components/finguard-logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navItems = [
  { path: "/dashboard", icon: Home, label: "Dashboard" },
  { path: "/insights", icon: TrendingUp, label: "Spending Insights" },
  { path: "/budget", icon: PiggyBank, label: "Budgeting" },
  { path: "/bank-linking", icon: Link2, label: "Link Bank" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <Link href="/dashboard">
          <a className="flex items-center gap-2" data-testid="link-logo">
            <FinGuardLogo className="w-8 h-8" />
            <span className="text-xl font-bold text-sidebar-foreground">FinGuard</span>
          </a>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      className={`h-12 px-4 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold shadow-sm' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <Link href={item.path}>
                        <a 
                          className="flex items-center gap-3 w-full"
                          data-testid={`sidebar-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-purple-600 dark:text-purple-400' : ''}`} />
                          <span className="flex-1">{item.label}</span>
                        </a>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <Link href="/settings">
          <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200" data-testid="sidebar-profile">
            <Avatar className="w-10 h-10 ring-2 ring-purple-200 dark:ring-purple-800">
              <AvatarFallback className="bg-purple-600 text-white font-semibold">SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sidebar-foreground truncate">Sarah Johnson</p>
              <p className="text-xs text-muted-foreground truncate">sarah@email.com</p>
            </div>
          </a>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
