import { ShoppingBag, Car, Tv, Receipt, MoreHorizontal } from "lucide-react";
import type { Budget } from "@/types/schema";
import { Progress } from "@/components/ui/progress";

const categoryIcons = {
  "Food & Dining": ShoppingBag,
  "Transport": Car,
  "Subscriptions": Tv,
  "Bills": Receipt,
  "Other": MoreHorizontal,
};

const categoryColors = {
  "Food & Dining": "text-[hsl(32,95%,58%)]",
  "Transport": "text-[hsl(217,91%,60%)]",
  "Subscriptions": "text-[hsl(271,81%,56%)]",
  "Bills": "text-[hsl(162,63%,50%)]",
  "Other": "text-muted-foreground",
};

interface BudgetProgressBarProps {
  budget?: Budget;
  spent?: number;
  total?: number;
  category?: string;
}

export function BudgetProgressBar({ budget, spent: spentProp, total: totalProp, category: categoryProp }: BudgetProgressBarProps) {
  const category = budget?.category || categoryProp || "Other";
  const spent = budget ? parseFloat(budget.spent) : (spentProp || 0);
  const total = budget ? parseFloat(budget.amount) : (totalProp || 0);
  
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || MoreHorizontal;
  const colorClass = categoryColors[category as keyof typeof categoryColors] || "text-muted-foreground";
  
  const percentage = total > 0 ? (spent / total) * 100 : 0;
  const remaining = Math.max(0, total - spent);

  return (
    <div className="space-y-3" data-testid={`budget-${category.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${colorClass}`} />
          <span className="font-medium text-foreground">{category}</span>
        </div>
        <span className="text-sm font-semibold text-foreground" data-testid={`text-budget-amount-${budget?.id || category}`}>
          ₦{total.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
        </span>
      </div>
      
      <Progress value={percentage} className="h-2" />
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground" data-testid={`text-spent-${budget?.id || category}`}>
          ₦{spent.toLocaleString("en-NG", { minimumFractionDigits: 0 })} spent
        </span>
        <span className="text-muted-foreground" data-testid={`text-remaining-${budget?.id || category}`}>
          ₦{remaining.toLocaleString("en-NG", { minimumFractionDigits: 0 })} left
        </span>
      </div>
    </div>
  );
}
