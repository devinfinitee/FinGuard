import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { Bell, Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Insights from "@/pages/insights";
import BudgetPage from "@/pages/budget";
import BankLinking from "@/pages/bank-linking";
import Settings from "@/pages/settings";
import LoginPage from "@/pages/login";
import SignUpPage from "@/pages/signup";
import PricingPage from "@/pages/pricing";
import FeaturesPage from "@/pages/features";
import NotFound from "@/pages/not-found";

function AppLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  
  const sidebarStyle = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  } as React.CSSProperties;

  return (
    <SidebarProvider style={sidebarStyle}>
      <div className="flex h-screen w-full">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>
        
        <div className="flex flex-col flex-1 min-w-0">
          {/* Header - Desktop only shows sidebar toggle */}
          <header className="flex items-center justify-between p-4 border-b border-border bg-background sticky top-0 z-40">
            <div className="flex items-center gap-3">
              {/* Desktop Sidebar Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                asChild
              >
                <SidebarTrigger data-testid="button-sidebar-toggle">
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </SidebarTrigger>
              </Button>
              
              {/* Mobile Logo */}
              <div className="md:hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-lg font-bold text-foreground">FinGuard</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                data-testid="button-notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </header>
          
          {/* Main Content - Add padding bottom on mobile for bottom nav */}
          <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </SidebarProvider>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/features" component={FeaturesPage} />
      
      <Route path="/dashboard">
        <AppLayout>
          <Dashboard />
        </AppLayout>
      </Route>
      
      <Route path="/insights">
        <AppLayout>
          <Insights />
        </AppLayout>
      </Route>
      
      <Route path="/budget">
        <AppLayout>
          <BudgetPage />
        </AppLayout>
      </Route>
      
      <Route path="/bank-linking">
        <AppLayout>
          <BankLinking />
        </AppLayout>
      </Route>
      
      <Route path="/settings">
        <AppLayout>
          <Settings />
        </AppLayout>
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
