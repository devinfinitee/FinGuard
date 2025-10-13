import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpendingChart } from "@/components/spending-chart";
import { BudgetProgressBar } from "@/components/budget-progress-bar";
import type { Budget } from "@shared/schema";

export default function Insights() {
  const { data: spendingData, isLoading: spendingLoading, error: spendingError } = useQuery<{ name: string; value: number; color: string }[]>({
    queryKey: ["/api/spending/monthly"],
  });

  const { data: budgets, isLoading: budgetsLoading, error: budgetsError } = useQuery<Budget[]>({
    queryKey: ["/api/budgets"],
  });

  const totalSpent = spendingData?.reduce((sum, item) => sum + item.value, 0) || 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Spending Insights</h1>
        <p className="text-muted-foreground">Track your spending patterns</p>
      </div>

      {/* Monthly Spending Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Monthly Spending Breakdown</CardTitle>
          <p className="text-sm text-muted-foreground">Current Month</p>
        </CardHeader>
        <CardContent className="relative">
          {spendingLoading ? (
            <div className="h-64 flex items-center justify-center">
              <div className="w-48 h-48 bg-muted/50 rounded-full animate-pulse" />
            </div>
          ) : spendingError ? (
            <div className="h-64 flex items-center justify-center">
              <p className="text-destructive">Failed to load spending data</p>
            </div>
          ) : spendingData && spendingData.length > 0 ? (
            <SpendingChart data={spendingData} total={totalSpent} />
          ) : (
            <div className="h-64 flex items-center justify-center">
              <p className="text-muted-foreground">No spending data available</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Breakdown with Progress Bars */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {budgetsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-muted/50 rounded-md animate-pulse" />
              ))}
            </div>
          ) : budgetsError ? (
            <div className="h-40 flex items-center justify-center">
              <p className="text-destructive">Failed to load budget data</p>
            </div>
          ) : budgets && budgets.length > 0 ? (
            budgets.map((budget) => (
              <BudgetProgressBar key={budget.id} budget={budget} />
            ))
          ) : (
            <div className="h-40 flex items-center justify-center">
              <p className="text-muted-foreground">No budget data available</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
