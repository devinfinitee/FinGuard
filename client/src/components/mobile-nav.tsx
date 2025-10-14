import { Link, useLocation } from "wouter";
import { Home, TrendingUp, PiggyBank, Link2, Settings } from "lucide-react";

export function MobileNav() {
  const [location] = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/insights", icon: TrendingUp, label: "Insights" },
    { path: "/budget", icon: PiggyBank, label: "Budget" },
    { path: "/bank-linking", icon: Link2, label: "Banks" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-50 shadow-lg">
      <div className="flex items-center justify-around h-16 px-2 safe-area-inset-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <a 
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[64px] ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30" 
                    : "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                <Icon className={`w-6 h-6 transition-transform ${isActive ? "scale-110" : ""}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-medium ${isActive ? "font-semibold" : ""}`}>{item.label}</span>
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
