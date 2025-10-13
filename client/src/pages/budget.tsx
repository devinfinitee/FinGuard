import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BudgetProgressBar } from "@/components/budget-progress-bar";
import type { Budget } from "@shared/schema";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function BudgetPage() {
  const { data: budgets, isLoading: budgetsLoading, error: budgetsError } = useQuery<Budget[]>({
    queryKey: ["/api/budgets"],
  });

  const totalBudget = budgets?.reduce((sum, b) => sum + parseFloat(b.amount), 0) || 300000;
  const totalSpent = budgets?.reduce((sum, b) => sum + parseFloat(b.spent), 0) || 250000;
  const remaining = totalBudget - totalSpent;
  const percentage = (totalSpent / totalBudget) * 100;

  const chartData = [
    { name: "Spent", value: totalSpent, color: "hsl(270, 60%, 50%)" },
    { name: "Remaining", value: remaining, color: "hsl(240, 5%, 90%)" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Set Monthly Budget</h1>
        <p className="text-muted-foreground">Track smart. Spend wise. Live free.</p>
      </div>

      {/* Overall Budget Progress */}
      <Card>
        <CardContent className="pt-6">
          {budgetsLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 flex items-center justify-center">
                <div className="w-48 h-48 bg-muted/50 rounded-full animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="h-20 bg-muted/50 rounded-md animate-pulse" />
                <div className="h-16 bg-muted/50 rounded-md animate-pulse" />
                <div className="h-16 bg-muted/50 rounded-md animate-pulse" />
                <div className="h-16 bg-muted/50 rounded-md animate-pulse" />
              </div>
            </div>
          ) : budgetsError ? (
            <div className="h-64 flex items-center justify-center">
              <p className="text-destructive">Failed to load budget overview</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-2xl font-bold text-foreground" data-testid="text-budget-chart">
                    ₦{totalSpent.toLocaleString("en-NG", { minimumFractionDigits: 0 })} / ₦{totalBudget.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Remaining this month</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Monthly Budget Overview</h3>
                  <p className="text-muted-foreground">
                    You've spent {percentage.toFixed(0)}% of your budget this month
                  </p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Total Budget</span>
                  <span className="font-semibold text-foreground" data-testid="text-total-budget">
                    ₦{totalBudget.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Total Spent</span>
                  <span className="font-semibold text-primary" data-testid="text-total-spent">
                    ₦{totalSpent.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <span className="text-sm text-muted-foreground">Remaining</span>
                  <span className="font-semibold text-[hsl(142,76%,36%)]" data-testid="text-remaining-budget">
                    ₦{remaining.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Category Budgets */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Category Budgets</CardTitle>
          <Button size="sm" data-testid="button-add-budget">Add Budget</Button>
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
              <p className="text-destructive">Failed to load budgets</p>
            </div>
          ) : budgets && budgets.length > 0 ? (
            budgets.map((budget) => (
              <BudgetProgressBar key={budget.id} budget={budget} />
            ))
          ) : (
            <div className="h-40 flex items-center justify-center">
              <p className="text-muted-foreground">No budgets set yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Save Budget Button */}
      <div className="flex justify-end">
        <Button size="lg" className="px-8" data-testid="button-save-budget">
          Save Budget
        </Button>
      </div>

      {/* Security Note */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>Your data is encrypted and kept private</span>
      </div>
    </div>
  );
}
