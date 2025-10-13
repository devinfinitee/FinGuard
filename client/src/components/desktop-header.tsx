import { Bell, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinGuardLogo } from "@/components/finguard-logo";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";

export function DesktopHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="hidden md:block border-b border-border bg-background sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/dashboard">
          <a className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-lg transition-all">
            <FinGuardLogo className="w-8 h-8" />
            <span className="text-xl font-bold text-foreground">FinGuard</span>
          </a>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            data-testid="button-notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <Link href="/settings">
            <Button variant="default" size="sm" data-testid="button-quick-actions">
              Quick Actions
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
