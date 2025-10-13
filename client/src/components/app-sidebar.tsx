import { Link, useLocation } from "wouter";
import { Home, TrendingUp, Wallet, LinkIcon, Settings } from "lucide-react";
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
  { path: "/budget", icon: Wallet, label: "Budgeting" },
  { path: "/bank-linking", icon: LinkIcon, label: "Link Bank" },
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

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.path;
                
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.path}>
                        <a data-testid={`sidebar-${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Icon className="w-5 h-5" />
                          <span>{item.label}</span>
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
      </SidebarFooter>
    </Sidebar>
  );
}
